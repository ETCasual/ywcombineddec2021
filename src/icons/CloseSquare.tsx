import * as React from 'react';

export const CloseSquare = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="#ef4444" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.394 9.595l-4.792 4.792M14.4 14.393l-4.8-4.8" />
        <path
          clipRule="evenodd"
          d="M2.75 12c0 6.937 2.313 9.25 9.25 9.25 6.937 0 9.25-2.313 9.25-9.25 0-6.937-2.313-9.25-9.25-9.25-6.937 0-9.25 2.313-9.25 9.25z"
        />
      </g>
    </svg>
  );
};
