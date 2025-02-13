import * as React from 'react';
import { StatusCard } from './StatusCard';
import { EnvironmentalData } from './EnvironmentalData';
import { FieldSelector } from '../FieldSelector';
import { CropMonitorStatusProps } from '../types';

export const CropMonitorStatus: React.FC<CropMonitorStatusProps> = ({ fieldName }) => {
  const statusCards = [
    {
      title: "Average Height Growth",
      value: "12%",
      description: "Height Growth in this month vs last month",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/521d7092b92103403db1eafc6f7c595073c262282786d8c29cf74fb68a2498d6?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&",
      color: "text-red-600"
    },
    {
      title: "Stand Density",
      value: "Sugar Beet",
      description: "16 July 25",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/6ab7434c7500e69530fb6cbda24e049a6de312ff93ecd614390926e3b337f570?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&",
      color: "text-emerald-200"
    },
    {
      title: "Seed Survival",
      value: "85%",
      description: "germination rate",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/8eb2f16da50ac637c0e3e637df84f62e7b0ba83357d6e5dcbab70ce5daf6a366?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&",
      color: "text-yellow-600"
    },
    {
      title: "Disease Risk",
      value: "High",
      description: "rust detected at Field 2B Row 18",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/55e5eeca23b7a26e57fe1c61f6f99e2ae739e6ff08837fae2e15d9587cf4c383?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&",
      color: "text-red-600"
    }
  ];

  return React.createElement('div',
    { className: "flex flex-col rounded-none" },
    [
      React.createElement('div',
        {
          key: "main-container",
          className: "flex overflow-hidden flex-col bg-white rounded-xl h-[539px] max-md:max-w-full"
        },
        [
          React.createElement('div',
            {
              key: "content-container",
              className: "flex flex-col px-7 py-5 w-full bg-black bg-opacity-0 max-md:px-5 max-md:max-w-full"
            },
            [
              React.createElement('div',
                {
                  key: "header",
                  className: "flex flex-wrap gap-5 justify-between w-full max-md:max-w-full"
                },
                [
                  React.createElement('div',
                    {
                      key: "title-section",
                      className: "flex flex-wrap gap-10 self-start py-1.5 bg-black bg-opacity-0"
                    },
                    [
                      React.createElement('div',
                        {
                          key: "title",
                          className: "grow text-xl font-bold tracking-wide text-neutral-500"
                        },
                        "Crop Monitor Status"
                      ),
                      React.createElement('div',
                        {
                          key: "field-name",
                          className: "self-start text-base leading-none text-gray-600 basis-auto"
                        },
                        `Field: ${fieldName}`
                      )
                    ]
                  ),
                  React.createElement(FieldSelector, { key: "field-selector" })
                ]
              ),
              React.createElement('div',
                {
                  key: "status-cards",
                  className: "mt-5 max-md:max-w-full"
                },
                React.createElement('div',
                  {
                    className: "flex gap-5 max-md:flex-col"
                  },
                  statusCards.map((card, index) => 
                    React.createElement(StatusCard, {
                      key: index,
                      ...card
                    })
                  )
                )
              ),
              React.createElement(EnvironmentalData, {
                key: "environmental-data",
                fieldName: fieldName
              })
            ]
          )
        ]
      ),
      React.createElement('img',
        {
          key: "field-image",
          loading: "lazy",
          src: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/ba24c73773c5c6c94fd76f049fe71c67d489c9305390b4ad18ebd3cc6974336b?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&",
          alt: "Crop field overview",
          className: "object-contain mt-1 w-full rounded-none aspect-[1.31] max-md:max-w-full"
        }
      )
    ]
  );
};