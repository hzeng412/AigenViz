import * as React from 'react';

export const CropMetrics: React.FC = () => {
  return React.createElement('div',
    { className: "flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full" },
    React.createElement('div',
      {
        className: "flex flex-col px-3.5 py-3 mx-auto w-full text-base font-semibold leading-none rounded-xl bg-stone-50 max-md:mt-8"
      },
      [
        React.createElement('div',
          {
            key: "title",
            className: "self-start py-1 bg-black bg-opacity-0 text-neutral-500"
          },
          "Crop Metrics"
        ),
        React.createElement('div',
          {
            key: "metrics-container",
            className: "flex gap-5 justify-between mt-4 text-black"
          },
          [
            React.createElement('img',
              {
                key: "metrics-icon",
                loading: "lazy",
                src: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/16ac2af7f260ec6f0b23af8c22d44918b40c2b9c3f81040f74924f17f87957e3?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&",
                className: "object-contain shrink-0 aspect-[0.3] w-[19px]",
                alt: "Crop metrics icon"
              }
            ),
            React.createElement('div',
              {
                key: "metrics-values",
                className: "flex flex-col self-start"
              },
              [
                React.createElement('div',
                  {
                    key: "leaf-area",
                    className: "self-start"
                  },
                  "Leaf Area Index : 3.0-4.5"
                ),
                React.createElement('div',
                  {
                    key: "growth-rate",
                    className: "mt-8"
                  },
                  "Crop Growth Rate: 4.2 g/m²/d"
                )
              ]
            )
          ]
        )
      ]
    )
  );
}; 