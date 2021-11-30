import { ref } from '@firebase/database';
import React from 'react';
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
  const { user } = useGame();
  const dbRef = useDatabase();

  const gameRef = ref(dbRef, '/gameNo');
  const { status, data } = useDatabaseObjectData<number>(gameRef);

  if (status === 'error') throw new Error('Please Enstablish a Secure Connection');

  return status === 'success' ? (
    <>
      {data !== 8 ? (
        <VideoBG>
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
