import React from 'react';

export const VideoBG: React.FC = ({ children }) => {
  return (
    <div className="relative flex h-full w-full">
      <video
        autoPlay
        loop
        muted
        id="bgVid"
        controls={false}
        className="w-[100vw] h-[100vh] object-center object-cover z-1"
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/yw-combined-game.appspot.com/o/loopBGwithoutLogo.mp4?alt=media&token=8e204358-6ed5-4b6e-aa88-9d4685dfe378"
          type="video/mp4"
        />
      </video>
      {children}
    </div>
  );
};
