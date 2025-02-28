import * as React from 'react';
import { WeatherConditions } from './WeatherConditions';
import { SoilConditions } from './SoilConditions';
import { CropMetrics } from './CropMetrics';
import { FieldConnectivity } from './FieldConnectivity';
import { EnvironmentalDataProps } from '../../types';

export const EnvironmentalData: React.FC<EnvironmentalDataProps> = ({ fieldName }) => {
  return React.createElement('div',
    { className: "flex flex-col px-6 py-4 mt-2.5 w-full bg-white rounded-xl border border-solid max-md:mr-0.5 max-md:max-w-full" },
    [
      React.createElement('div',
        {
          key: "header",
          className: "flex flex-wrap gap-7 self-start py-1 bg-black bg-opacity-0"
        },
        [
          React.createElement('div',
            {
              key: "title",
              className: "text-xl font-bold tracking-wide text-neutral-500"
            },
            "Environmental Data"
          ),
          React.createElement('div',
            {
              key: "field-name",
              className: "flex-auto text-base leading-none text-gray-600 max-md:max-w-full"
            },
            fieldName
          )
        ]
      ),
      React.createElement('div',
        {
          key: "content",
          className: "mt-4 max-md:max-w-full"
        },
        React.createElement('div',
          {
            className: "flex gap-5 max-md:flex-col"
          },
          [
            React.createElement(WeatherConditions, { key: "weather" }),
            React.createElement(SoilConditions, { key: "soil" }),
            React.createElement(CropMetrics, { key: "metrics" }),
            React.createElement(FieldConnectivity, { key: "connectivity" })
          ]
        )
      )
    ]
  );
}; 