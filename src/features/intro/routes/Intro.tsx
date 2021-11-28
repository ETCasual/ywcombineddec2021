// import { doc } from 'firebase/firestore';
import React from 'react';
// import { useFirestore, useFirestoreDocData } from 'reactfire';
import { useFirebaseApp } from 'reactfire';

import { SignUpForm } from '../components/SignUpForm';
import { VideoBG } from '../components/VideoBG';

import { useGame } from '@/hooks/useGame';

export const Intro: React.FC = () => {
  const { gameStarted } = useGame();
  // const gameRef = doc(useFirestore(), 'game');

  // const { status, data } = useFirestoreDocData(gameRef);

  const fa = useFirebaseApp();
  console.log(fa);

  return (
    <>
      <VideoBG>
        {!gameStarted ? (
          <SignUpForm />
        ) : (
          <>
            <p>Status :</p>
            {/* <pre>{JSON.stringify(status, null, 2)}</pre>
            <br />
            <br />
            <p>Data :</p>
            <pre>{JSON.stringify(data, null, 2)}</pre> */}
          </>
        )}
      </VideoBG>
    </>
  );
};
