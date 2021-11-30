import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Game } from './Game';

export const IntroRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
    </Routes>
  );
};
