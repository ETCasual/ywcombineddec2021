import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { IntroRoute } from '@/features/intro';

// import { useDarkMode } from '@/hooks';

// const Landing: React.FC = () => {
//   const { darkMode, setDarkMode } = useDarkMode();

//   return (
//     <>
//       <div className="dark:text-white text-dark-600">landing</div>
//       <button onClick={() => setDarkMode(!darkMode)}>darkMode: {darkMode}</button>
//     </>
//   );
// };

export const AppRoutes: React.FC = () => {
  console.log('Hit Here');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="//*" element={<IntroRoute />} />
        {/* <Route path="/intro" element={<Navigate to="/auth/login" />} /> */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
