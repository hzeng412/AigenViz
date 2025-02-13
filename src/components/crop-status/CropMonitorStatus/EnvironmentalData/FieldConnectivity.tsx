import * as React from 'react';

export const FieldConnectivity: React.FC = () => {
  return React.createElement('div',
    { className: "flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full" },
    React.createElement('div',
      {
        className: "flex flex-col grow items-start pt-3.5 pr-16 pb-14 pl-3.5 w-full text-base font-semibold leading-none rounded-xl bg-stone-50 max-md:pr-5 max-md:mt-8"
      },
      [
        React.createElement('div',
          {
            key: "title",
            className: "py-1 bg-black bg-opacity-0 text-neutral-500"
          },
          "Field Connectivity"
        ),
        React.createElement('div',
          {
            key: "connectivity-value",
            className: "mt-5 ml-20 text-black max-md:ml-2.5"
          },
          "30 mb/s"
        )
      ]
    )
  );
}; 