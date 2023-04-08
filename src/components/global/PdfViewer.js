import React, { useState, useRef, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";

const PdfViewer = ({ url }) => {
  const [pdf, setPdf] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
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
      pdf.getPage(currentPage).then((page) => {
        const viewport = page.getViewport({ scale: 1 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        page.render({
          canvasContext: ctx,
          viewport: viewport,
          rotation: viewport.width > viewport.height ? 0 : 180,
        });
      });
    });

    // Clean up the event listener
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [url, currentPage]);

  return (
    <div className="pdf-container">
      <div className="pdf-header"></div>
      <div className="pdf-body">
        <canvas ref={canvasRef} className="pdf-canvas" />
      </div>
      <div className="pdf-footer">
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
    </div>
  );
};

export default PdfViewer;
