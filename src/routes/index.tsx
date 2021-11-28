import { getFirestore } from 'firebase/firestore';
import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';

import { Intro } from '@/features/intro/routes/Intro';

const App: React.FC = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <Outlet />
    </FirestoreProvider>
  );
};

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Intro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
