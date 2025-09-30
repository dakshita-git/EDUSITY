import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    // Close only if user clicks outside the video element
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls width="100%" />
      <button className="close-btn" onClick={() => setPlayState(false)}>
        ✖
      </button>
    </div>
  );
};

export default VideoPlayer;
