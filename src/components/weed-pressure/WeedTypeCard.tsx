// src/components/weed-pressure/WeedTypeCard.tsx

import * as React from 'react';

interface WeedTypeCardProps {
  name: string;
  description: string;
  imageSrc: string;
  isLast?: boolean;
}

export const WeedTypeCard: React.FC<WeedTypeCardProps> = ({ name, description, imageSrc, isLast }) => {
  return React.createElement('div',
    { className: "flex-1 min-w-0" },
    [
      React.createElement('div',
        {
          key: "card-container",
          className: "flex flex-col h-full bg-white rounded-xl border border-solid border-gray-200"
        },
        [
          React.createElement('div',
            {
              key: "image-container",
              className: "relative w-full pt-[56.25%]"
            },
            React.createElement('img',
              {
                key: "weed-image",
                loading: "lazy",
                src: imageSrc,
                className: "absolute top-0 left-0 w-full h-full object-cover rounded-t-xl",
                alt: `${name} weed`
              }
            )
          ),
          React.createElement('div',
            {
              key: "content-container",
              className: "flex flex-col flex-grow p-6"
            },
            [
              React.createElement('div',
                {
                  key: "title",
                  className: "text-xl font-semibold text-neutral-800 mb-4"
                },
                name
              ),
              React.createElement('div',
                {
                  key: "description",
                  className: "text-base text-neutral-600"
                },
                description
              )
            ]
          )
        ]
      ),
      isLast && React.createElement('div',
        {
          key: "generate-report",
          className: "mt-4 text-center"
        },
        React.createElement('button',
          {
            className: "px-4 py-3 text-base text-white rounded-lg bg-neutral-500"
          },
          "Generate Report"
        )
      )
    ]
  );
};