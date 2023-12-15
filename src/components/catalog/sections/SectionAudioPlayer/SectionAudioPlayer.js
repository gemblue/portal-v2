import React, { useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

const SectionAudioPlayer = ({ audios }) => {
  // Collect all chapter on book
  const chapters = audios.filter(
    (audio, index) =>
      index === audios.findIndex((obj) => audio.chapter === obj.chapter)
  );

  // Set tab active chapter
  const [tabActive, setTabActive] = useState({
    chapter: chapters[0].chapter,
    button: 0,
  });

  // Set played audio when move audio
  const audioEl = useRef([]);
  const [playedAudio, setPlayedAudio] = useState(null);

  return (
    <section id="audioPlayer">
      <div className="container p-3">
        <h4>Pemutar Audio</h4>
        <div className="d-flex gap-3 align-items-center">
          <div class="dropdown my-3">
            <button
              class="btn btn-outline-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pilih Bab
            </button>
            <ul class="dropdown-menu">
              {chapters.map((chapter, index) => {
                return (
                  <li
                    key={index}
                    role="button"
                    onClick={() => {
                      setTabActive({ chapter: chapter.chapter, button: index });
                    }}
                  >
                    {
                      chapter.chapter == '-' || chapter.chapter == '0' ? (
                        <a class="dropdown-item">Identitas Buku</a>
                      ) : (
                        <a class="dropdown-item">Bab {chapter.chapter}</a>
                      )
                    }
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            Filter : {tabActive.chapter == '-' || tabActive.chapter == '0' ? 'Identitas Buku' : `Bab ${tabActive.chapter}`}
          </div>
        </div>
        {/* <div className="d-flex gap-2 my-3 overflow-auto">
          {chapters.map((chapter, index) => {
            return (
              <button
                className={`btn ${
                  tabActive.button == index
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => {
                  setTabActive({ chapter: chapter.chapter, button: index });
                }}
              >
                Bab {chapter.chapter}
              </button>
            );
          })}
        </div> */}
        <table className="table">
          <thead className="bg-light">
            <tr>
              <th>NO</th>
              <th>AUDIO</th>
              <th>JUDUL</th>
            </tr>
          </thead>
          <tbody>
            {audios
              .filter((audio) => audio.chapter == tabActive.chapter)
              .map((item, index) => {
                return (
                  <tr key={index}>
                    <td
                      width={1}
                      align="center"
                      style={{ verticalAlign: "middle" }}
                    >
                      {index + 1}
                    </td>
                    <td width="40%" className="p-2">
                      <ReactAudioPlayer
                        className="w-100 bg-transparent"
                        src={item.attachment}
                        controls
                        key={index}
                        ref={(element) => (audioEl.current[index] = element)}
                        onPlay={() => {
                          setPlayedAudio((prev) => {
                            if (!isNaN(prev) && index !== prev) {
                              const audioElm =
                                audioEl?.current[prev]?.audioEl?.current;
                              audioElm?.pause();
                            }
                            return index;
                          });
                        }}
                      />
                    </td>
                    <td style={{ verticalAlign: "middle" }}>{item.title}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SectionAudioPlayer;
