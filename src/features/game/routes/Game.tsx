import { ref } from '@firebase/database';
import React from 'react';
import { useNavigate } from 'react-router';
import { useDatabase, useDatabaseObjectData } from 'reactfire';

import { CrackedScreen } from '../components/CrackedScreen';
import { GameComp } from '../components/GameComp';
import { SignUpForm } from '../components/SignUpForm';
import { VideoBG } from '../components/VideoBG';
import { Waiting } from '../components/Waiting';

import { useGame } from '@/hooks/useGame';

export type DataType = {
  gameNo: number;
};

export const Game: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useGame();
  const dbRef = useDatabase();

  const gameRef = ref(dbRef, '/gameNo');
  const { status, data } = useDatabaseObjectData<number>(gameRef);

  const adminAccess = () => {
    const pw = prompt('Password');

    if (pw === 'douglas2021') navigate('/admin');
  };

  if (status === 'error') throw new Error('Please Enstablish a Secure Connection');

  return status === 'success' ? (
    <>
      {data !== 8 ? (
        <VideoBG>
          <button
            className="px-2 py-1 rounded-lg top-5 right-10 <md:right-5 bg-[#30ffff] z-3 absolute"
            onClick={() => adminAccess()}
          >
            Admin Access
          </button>
          {user.name == undefined ? (
            <SignUpForm />
          ) : data ? (
            <GameComp gameNo={data} />
          ) : (
            <Waiting />
          )}
        </VideoBG>
      ) : (
        <CrackedScreen />
      )}
    </>
  ) : null;
};
