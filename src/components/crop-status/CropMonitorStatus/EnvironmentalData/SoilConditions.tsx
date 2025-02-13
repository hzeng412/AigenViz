import * as React from 'react';

export const SoilConditions: React.FC = () => {
  return React.createElement('div',
    { className: "flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full" },
    React.createElement('div',
      {
        className: "flex flex-col items-start py-3.5 pr-16 pl-3.5 mx-auto w-full rounded-xl bg-stone-50 max-md:pr-5 max-md:mt-8"
      },
      [
        React.createElement('div',
          {
            key: "title",
            className: "py-1 text-base font-semibold leading-none text-amber-300 bg-black bg-opacity-0"
          },
          "Soil Conditions"
        ),
        React.createElement('div',
          {
            key: "moisture-section",
            className: "flex gap-5 justify-between mt-5 max-w-full w-[179px]"
          },
          [
            React.createElement('div',
              {
                key: "moisture-icon",
                className: "flex overflow-hidden justify-center items-center h-[21px]"
              },
              React.createElement('img',
                {
                  loading: "lazy",
                  src: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/1607c9ed641242e52f86c19f4a308a85e8f007442e80025c83e637471d7471a5?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&",
                  className: "object-contain self-stretch my-auto aspect-[1.29] w-[27px]",
                  alt: "Moisture icon"
                }
              )
            ),
            React.createElement('div',
              {
                key: "moisture-value",
                className: "my-auto text-sm font-semibold leading-none text-black"
              },
              "28% Moisture"
            )
          ]
        ),
        React.createElement('div',
          {
            key: "ph-section",
            className: "flex gap-10 mt-4 max-w-full w-[132px]"
          },
          [
            React.createElement('div',
              {
                key: "ph-icon",
                className: "flex overflow-hidden flex-1 justify-center items-center min-h-[24px]"
              },
              React.createElement('img',
                {
                  loading: "lazy",
                  src: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/640485aa9a53667166d032d6eff6acebf8bfa5429c081d5ffe47e68dcbdc6756?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&",
                  className: "object-contain self-stretch my-auto aspect-[0.87] w-[21px]",
                  alt: "pH icon"
                }
              )
            ),
            React.createElement('div',
              {
                key: "ph-value",
                className: "my-auto text-sm font-semibold leading-none text-black"
              },
              "pH 6.5"
            )
          ]
        )
      ]
    )
  );
}; 