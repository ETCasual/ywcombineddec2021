import React from 'react';
import Loader from 'react-loader-spinner';

export const Waiting: React.FC = () => {
  return (
    <div className="absolute self-center w-full z-3">
      <div className="mx-auto bg-grey-shade1 rounded-t-xl w-300px relative p-3 flex items-center">
        <p className="text text-white text-xl  italic">YW Combine</p>
      </div>
      <div className="mx-auto bg-grey-border rounded-b-xl w-300px p-3">
        <div className="w-8 h-8 mx-auto my-3 focus-within:outline-none">
          <Loader type="TailSpin" height="32px" width="32px" color="#30ffff" />
        </div>
        <p className="text text-white text-center text-xl">
          Please wait for the game to be started!
        </p>
      </div>
    </div>
  );
};
