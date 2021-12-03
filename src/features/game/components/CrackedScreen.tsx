/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import TypewriterComponent from 'typewriter-effect';

import { VideoBG } from './VideoBG';

export const CrackedScreen: React.FC = ({ children }) => {
  const [timePassed, setTimePassed] = useState<boolean>(false);

  return timePassed ? (
    <>
      <audio className="w-0 h-0 z-10" autoPlay>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/yw-combined-game.appspot.com/o/Explosion_Blast.wav?alt=media&token=d6e304ab-46cf-4cb6-b8c6-2b8a45cf23ca"
          type="audio/wav"
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
  ) : (
    <VideoBG>
      <div className="absolute w-full text-center text-2xl self-center text-white z-3 chibold">
        <div className="mx-auto bg-grey-shade1 rounded-t-xl w-300px relative p-3 flex items-center">
          <TypewriterComponent
            onInit={(typewriter) =>
              typewriter
                .typeString('问题加载中。。。')
                .pauseFor(3000)
                .callFunction(() => setTimePassed(true))
                .start()
            }
          />
        </div>
        <div className="mx-auto bg-grey-border rounded-b-xl w-300px p-3">
          <div className="w-8 h-8 mx-auto my-3 focus-within:outline-none">
            <Loader type="TailSpin" height="32px" width="32px" color="#30ffff" />
          </div>
        </div>
      </div>
    </VideoBG>
  );
};
