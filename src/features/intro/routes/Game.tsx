import { ref } from '@firebase/database';
import React from 'react';
import { useDatabase, useDatabaseObjectData } from 'reactfire';

import { SignUpForm } from '../components/SignUpForm';
import { VideoBG } from '../components/VideoBG';
import { Waiting } from '../components/Waiting';

import { useGame } from '@/hooks/useGame';

type DataType = {
  gameNo: number;
};

export const Game: React.FC = () => {
  const { user } = useGame();
  const dbRef = useDatabase();

  const gameRef = ref(dbRef, '/');
  const { status, data } = useDatabaseObjectData<DataType>(gameRef);

  if (status === 'error') throw new Error('Please Enstablish a Secure Connection');

  return status === 'success' ? (
    <>
      <VideoBG>
        {user.name == undefined ? (
          <SignUpForm />
        ) : data.gameNo == 1 ? (
          <pre className="absolute w-full text-center self-center text-white z-3">
            {JSON.stringify(data, null, 2)}
          </pre>
        ) : (
          <Waiting />
        )}
      </VideoBG>
    </>
  ) : null;
};
