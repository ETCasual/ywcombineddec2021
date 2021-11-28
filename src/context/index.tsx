import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import Loader from 'react-loader-spinner';

import { CloseSquare } from '@/icons/CloseSquare';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// TODO: Customize this ErrorFallback
const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-primary">
      <div
        className="w-500px max-w-500px h-300px p-5 grid grid-rows-2 rounded-2xl shadow-lg bg-white <sm:mx-8"
        role="alert"
      >
        <h1 className="text-primary heading-1 text-center">Oops!</h1>
        <div className=" text-red-500">
          <div className="flex">
            <h5 className="heading-5">{error.name} occurred</h5>
            <CloseSquare className="mt-1 ml-1" />
          </div>
          <p>{error.message}</p>
        </div>
        <button
          className="mt-5 p-2 btn-text rounded-lg hover:bg-primary hover:text-white focus:outline-none <sm:p-1"
          onClick={() => resetErrorBoundary()}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export const AppProvider: React.FC = ({ children }) => {
  return (
    <React.Suspense fallback={<Loader type="Audio" color="#00BFFF" height={80} width={80} />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
    </React.Suspense>
  );
};
