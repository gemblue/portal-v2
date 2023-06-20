import React, { useState, useRef, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";

const PdfViewer = ({ url }) => {
  const [pdf, setPdf] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const totalPages = pdf ? pdf.numPages : 0;

  const canvasRef = useRef(null);
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.5.141/pdf.worker.js";
  function nextPage() {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }

  function prevPage() {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }

  useEffect(() => {
    !isRendered && setLoading(true);
    // Load the PDF file
    const loadingTask = pdfjsLib.getDocument(url);

    // Set up the canvas context and event handlers
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        nextPage();
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        prevPage();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Render the PDF file in the canvas element
    loadingTask.promise.then((pdf) => {
      setPdf(pdf);
      pdf
        .getPage(currentPage)
        .then((page) => {
          const viewport = page.getViewport({ scale: 1 });
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          page
            .render({
              canvasContext: ctx,
              viewport: viewport,
              rotation: viewport.width > viewport.height ? 0 : 180,
            })
            .promise.then(() => setIsRendered(true))
            .finally(() => setLoading(false));
        })
        .catch(() => setIsError(true));
    });

    // Clean up the event listener
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [url, currentPage]);

  return (
    <div className="pdf-container">
      <div className="pdf-body">
        {loading && <img src="/assets/image/loading.gif" alt="loading..." />}
        {isError && <p>Error saat menampilkan PDF</p>}
        <canvas
          ref={canvasRef}
          className={`pdf-canvas ${(loading || isError) && "d-none"}`}
        />
      </div>
      {!loading && !isError && (
        <div className="pdf-footer p-2">
          {currentPage > 1 && (
            <button className="btn btn-primary" onClick={prevPage}>
              Back
            </button>
          )}
          <span>
            {currentPage} / {totalPages}
          </span>
          {currentPage !== totalPages && (
            <button className="btn btn-primary" onClick={nextPage}>
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
