import React, { useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

const SectionAudioPlayer = ({ audio }) => {
  const [limit, setLimit] = useState(10);
  const audioEl = useRef([]);
  const [playedAudio, setPlayedAudio] = useState(null);
  let number = 1;

  const reset = () => {
    setLimit(10);
    setTimeout(() => {
      document.getElementById("audioPlayer").scrollIntoView();
    }, 0);
  };

  return (
    <section id="audioPlayer">
      <div className="container p-3">
        <h4>Pemutar Audio</h4>
        <table className="table table-hover">
          <thead className="bg-light">
            <tr>
              <th>NO</th>
              <th>AUDIO</th>
              <th>JUDUL</th>
            </tr>
          </thead>
          <tbody>
            {audio
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
              })
              .slice(0, limit)}
          </tbody>
        </table>
        <div className="text-center my-5">
          {audio.length >= limit && (
            <button
              onClick={() => setLimit(limit + 5)}
              className="btn btn-primary"
            >
              Load more
            </button>
          )}
          {audio.length <= limit && (
            <button onClick={() => reset()} className="btn btn-warning">
              Reset
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionAudioPlayer;
