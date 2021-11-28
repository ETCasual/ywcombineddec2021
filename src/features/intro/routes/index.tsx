import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Intro } from './Intro';

export const IntroRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  );
};
