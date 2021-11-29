import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { DatabaseProvider, FirestoreProvider, useFirebaseApp } from 'reactfire';

import { Game } from '@/features/intro/routes/Game';

const App: React.FC = () => {
  const app = useFirebaseApp();

  const firestoreInstance = getFirestore(app);
  const database = getDatabase(app);

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <DatabaseProvider sdk={database}>
        <Outlet />
      </DatabaseProvider>
    </FirestoreProvider>
  );
};

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
