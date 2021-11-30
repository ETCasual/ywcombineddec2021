/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

export const CrackedScreen: React.FC = ({ children }) => {
  return (
    <>
      <audio className="w-0 h-0 z-10" autoPlay>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/yw-combined-game.appspot.com/o/bomb.mp3?alt=media&token=3213adbe-89ac-44c0-a631-f7c1df53633d"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <div className="relative flex h-full w-full">
        <img
          className="w-[100vw] h-[100vh] object-center object-cover z-1"
          alt="crack"
          src="https://firebasestorage.googleapis.com/v0/b/yw-combined-game.appspot.com/o/cracked.jpg?alt=media&token=e6f333d6-c5b4-4cd6-bea2-a943eaa2196e"
        />

        {children}
      </div>
    </>
  );
};
