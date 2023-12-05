import React, { useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

const SectionAudioPlayer = ({ audios }) => {
  // Collect all chapter on book
  const chapters = audios.filter(
    (audio, index) =>
      index === audios.findIndex((obj) => audio.chapter === obj.chapter)
  );

  const [tabActive, setTabActive] = useState({
    chapter: chapters[0].chapter,
    button: 0,
  });
  const audioEl = useRef([]);
  const [playedAudio, setPlayedAudio] = useState(null);
  let number = 1;

  return (
    <section id="audioPlayer">
      <div className="container p-3">
        <h4>Pemutar Audio</h4>
        <div className="d-flex gap-2 my-3 overflow-auto">
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
        </div>
        <table className="table table-hover">
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
                    <td width="8%">{number++}</td>
                    <td width="40%" className="p-0 pt-1">
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
                    <td>{item.title}</td>
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
