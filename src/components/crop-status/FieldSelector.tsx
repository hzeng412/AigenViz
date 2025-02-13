import * as React from 'react';

export const FieldSelector: React.FC = () => {
  return React.createElement('div',
    { className: "flex flex-col bg-black bg-opacity-0" },
    React.createElement('div',
      {
        className: "flex gap-4 px-3 py-3.5 w-full bg-white rounded-lg border border border-solid"
      },
      [
        React.createElement('div',
          {
            key: "icon",
            className: "flex overflow-hidden justify-center items-center self-start min-h-[16px]"
          },
          React.createElement('img',
            {
              loading: "lazy",
              src: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/cf69a6ac336ecfb8bd865aa01b7979c011399b07471d562dd97b77dd6c96905c?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&",
              className: "object-contain self-stretch my-auto w-3 aspect-[0.75]",
              alt: "Field selector icon"
            }
          )
        ),
        React.createElement('div',
          {
            key: "text",
            className: "grow shrink text-base text-gray-400 w-[238px]"
          },
          "Select Field"
        )
      ]
    )
  );
}; 