import * as React from 'react';

export const WeatherConditions: React.FC = () => {
  return React.createElement('div',
    { className: "flex flex-col w-3/12 max-md:ml-0 max-md:w-full" },
    React.createElement('div',
      {
        className: "flex flex-col p-3.5 mx-auto w-full rounded-xl bg-stone-50 max-md:pr-5 max-md:mt-8"
      },
      [
        React.createElement('div',
          {
            key: "weather-container",
            className: "flex gap-5 justify-between"
          },
          [
            React.createElement('div',
              {
                key: "temperature-section",
                className: "flex gap-2.5"
              },
              [
                React.createElement('div',
                  {
                    key: "temp-content",
                    className: "flex flex-col"
                  },
                  [
                    React.createElement('div',
                      {
                        key: "title",
                        className: "py-1 text-base font-semibold leading-none text-emerald-200 bg-black bg-opacity-0"
                      },
                      "Weather Conditions"
                    ),
                    React.createElement('div',
                      {
                        key: "temp-display",
                        className: "flex gap-10 mt-5 w-[84px]"
                      },
                      [
                        React.createElement('div',
                          {
                            key: "temp-icon",
                            className: "flex overflow-hidden flex-1 justify-center items-center min-h-[19px]"
                          },
                          React.createElement('img',
                            {
                              loading: "lazy",
                              src: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/7429ebca99d7fccdaa9b0e456829166ef16f4b28fa6e33a3e6e7784e343e9747?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&",
                              className: "object-contain self-stretch my-auto w-3 aspect-[0.63]",
                              alt: "Temperature icon"
                            }
                          )
                        ),
                        React.createElement('div',
                          {
                            key: "temp-value",
                            className: "my-auto text-sm font-semibold leading-none text-black"
                          },
                          "72°F"
                        )
                      ]
                    )
                  ]
                ),
                React.createElement('div',
                  {
                    key: "humidity-icon",
                    className: "flex overflow-hidden justify-center items-center self-end mt-11 min-h-[19px] max-md:mt-10"
                  },
                  React.createElement('img',
                    {
                      loading: "lazy",
                      src: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/948f2b7fe7068aba7ccd64c2fe2a83cb8e1fc9292cd8cfbe543de2d81c0e9e3a?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&",
                      className: "object-contain self-stretch my-auto aspect-[0.79] w-[15px]",
                      alt: "Humidity icon"
                    }
                  )
                )
              ]
            ),
            React.createElement('div',
              {
                key: "humidity-value",
                className: "self-end mt-12 text-sm font-semibold leading-none text-black max-md:mt-10"
              },
              "65% Humidity"
            )
          ]
        ),
        React.createElement('div',
          {
            key: "wind-section",
            className: "flex gap-8 mt-5 max-w-full bg-black bg-opacity-0 w-[271px]"
          },
          [
            React.createElement('div',
              {
                key: "wind-icon",
                className: "flex overflow-hidden justify-center items-center min-h-[19px]"
              },
              React.createElement('img',
                {
                  loading: "lazy",
                  src: "https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/338c5818cded7a93793262b4dc936c193fc906ad7f0586ec510c41a27dbc7fcb?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&",
                  className: "object-contain self-stretch my-auto w-5 aspect-[1.05]",
                  alt: "Wind icon"
                }
              )
            ),
            React.createElement('div',
              {
                key: "wind-value",
                className: "grow shrink my-auto text-sm font-semibold leading-none text-black w-[218px]"
              },
              "5 mph NW"
            )
          ]
        )
      ]
    )
  );
}; 