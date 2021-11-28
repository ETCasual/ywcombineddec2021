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
        <source src="/src/assets/video/loopBGwithoutLogo.mp4" type="video/mp4" />
      </video>
      {children}
    </div>
  );
};
