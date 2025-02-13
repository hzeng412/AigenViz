// src/components/weed-pressure/WeedPressureMap.tsx
import * as React from "react";
import { WeedTypeCard } from "./WeedTypeCard";
import { WeedPressureLegend } from "./WeedPressureLegend";
import { FieldSelector } from "./FieldSelector";

const weedTypes = [
  {
    name: "Dandelion",
    description: "Common perennial weed with yellow flowers.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/18c2bdea1903b8b1c801d82a3a86a4666ae7edc5bc303a17b561431b05145821?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&"
  },
  {
    name: "Crabgrass",
    description: "Annual grass weed that spreads quickly.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/afb1e57db58ca7988fac94f9efbe3acbb45e4945292fba311fff33eb4903365f?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&"
  },
  {
    name: "Thistle",
    description: "Prickly weed with purple flowers.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/545ec60bc636b41f51c09c066152913e1f28926c3e7187b3695d4b4c1c4f890d?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&"
  }
];

export const WeedPressureMap: React.FC = () => {
  return React.createElement('div',
    { className: "flex flex-col rounded-xl" },
    [
      React.createElement('div',
        {
          key: "main-container",
          className: "flex flex-col px-5 py-5 w-full bg-white rounded-xl max-md:pr-5 max-md:max-w-full"
        },
        [
          // Header with Field Selector
          React.createElement('div',
            {
              key: "header",
              className: "flex justify-between items-center"
            },
            [
              React.createElement('div',
                {
                  key: "title-container",
                  className: "flex flex-col gap-2"
                },
                [
                  React.createElement('div',
                    {
                      key: "title",
                      className: "text-xl font-bold tracking-wide text-neutral-500"
                    },
                    "Weed Pressure Map"
                  ),
                  React.createElement('div',
                    {
                      key: "field-name",
                      className: "text-base text-gray-600"
                    },
                    "Field: #2B Zimmerman"
                  )
                ]
              ),
              React.createElement(FieldSelector, { key: "field-selector" })
            ]
          ),

          // Pressure Map Image
          React.createElement('div',
            {
              key: "map-container",
              className: "flex overflow-hidden flex-col mt-5 text-xs font-bold text-white bg-white rounded-xl max-md:mr-2 max-md:max-w-full"
            },
            React.createElement('div',
              {
                key: "map-wrapper",
                className: "flex relative flex-col items-end pr-2.5 pb-2 pl-20 w-full min-h-[688px] pt-[634px] max-md:pt-24 max-md:pl-5 max-md:max-w-full"
              },
              [
                React.createElement('img',
                  {
                    key: "map-image",
                    loading: "lazy",
                    src: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/90fa025ac8cdd0932f994e9e65933aeb377433bacfbfcc5323471ae17b1fb408?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&",
                    className: "object-cover absolute inset-0 size-full",
                    alt: "Weed pressure map"
                  }
                ),
                React.createElement('div',
                  {
                    key: "scale-bar",
                    className: "flex relative shrink-0 max-w-full h-3 w-[350px]"
                  }
                ),
                React.createElement('div',
                  {
                    key: "scale-labels",
                    className: "flex relative gap-10 max-w-full w-[351px]"
                  },
                  React.createElement('div',
                    {
                      key: "scale-numbers",
                      className: "flex flex-auto gap-9 items-start"
                    },
                    [
                      React.createElement('div', { key: "5" }, "5"),
                      React.createElement('div', { key: "10" }, "10"),
                      React.createElement('div',
                        {
                          key: "30-container",
                          className: "flex flex-col self-stretch"
                        },
                        [
                          React.createElement('div',
                            {
                              key: "30",
                              className: "self-start max-md:ml-2.5"
                            },
                            "30"
                          ),
                          React.createElement('div',
                            { key: "unit", className: "mt-2" },
                            "Weeds / ㎡"
                          )
                        ]
                      ),
                      React.createElement('div', { key: "80" }, "80"),
                      React.createElement('div', { key: "300" }, "300")
                    ]
                  )
                )
              ]
            )
          ),

          // Legend and Action Buttons
          React.createElement('div',
            {
              key: "legend-actions",
              className: "flex justify-between items-end mt-1.5 max-md:max-w-full"
            },
            [
              React.createElement(WeedPressureLegend, { key: "legend" }),
              React.createElement('div',
                {
                  key: "action-buttons",
                  className: "flex gap-4 ml-4"
                },
                [
                  React.createElement('button',
                    {
                      key: "filter-button",
                      className: "px-8 py-3 text-base text-white rounded-lg bg-neutral-500"
                    },
                    "Filter"
                  ),
                  React.createElement('button',
                    {
                      key: "export-button",
                      className: "px-8 py-3 text-base rounded-lg border border-emerald-200 border-solid text-neutral-500"
                    },
                    "Export"
                  )
                ]
              )
            ]
          ),

          // Weed Type Section
          React.createElement('section',
            {
              key: "weed-type-section",
              className: "flex flex-col mt-8 w-full bg-white rounded-xl"
            },
            [
              React.createElement('div',
                {
                  key: "section-header",
                  className: "px-8 pt-8 pb-6"
                },
                React.createElement('h2',
                  {
                    className: "text-xl font-bold tracking-wide text-neutral-500"
                  },
                  "Found Weed Types"
                )
              ),
              React.createElement('div',
                {
                  key: "weed-cards-container",
                  className: "px-8 pb-8"
                },
                React.createElement('div',
                  {
                    key: "weed-cards-grid",
                    className: "flex gap-6"
                  },
                  weedTypes.map((weed, index) => 
                    React.createElement(WeedTypeCard, {
                      key: index,
                      ...weed,
                      isLast: index === weedTypes.length - 1
                    })
                  )
                )
              )
            ]
          )
        ]
      )
    ]
  );
};