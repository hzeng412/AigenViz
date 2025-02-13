import * as React from 'react';
import { FieldInfo } from './types';

interface FieldInfoCardProps {
  imageUrl: string;
  fieldInfo: FieldInfo[];
}

export default function FieldInfoCard(props: FieldInfoCardProps) {
  const { imageUrl, fieldInfo } = props;

  return React.createElement('div',
    { className: "flex flex-col rounded-none" },
    [
      React.createElement('img',
        {
          key: "field-image",
          loading: "lazy",
          src: imageUrl,
          alt: "Field overview",
          className: "object-contain w-full bg-white rounded-lg aspect-[1.67] max-md:max-w-full"
        }
      ),
      React.createElement('div',
        {
          key: "info-container",
          className: "pt-5 pr-20 pb-2 pl-7 mt-1 w-full bg-white rounded-lg max-md:px-5 max-md:max-w-full"
        },
        React.createElement('div',
          { className: "flex gap-5 max-md:flex-col" },
          [
            React.createElement('div', 
              { 
                key: "field-section",
                className: "flex flex-col w-1/4 max-md:w-full" 
              },
              [
                React.createElement('div', 
                  { 
                    key: "field-title",
                    className: "text-xl font-bold leading-none text-gray-600" 
                  },
                  "Field:"
                ),
                React.createElement('div', 
                  { 
                    key: "field-list",
                    className: "self-start mt-6 text-base leading-4" 
                  },
                  fieldInfo.map((info, index) => 
                    React.createElement(React.Fragment, { key: `field-${index}` },
                      React.createElement('div', null, info.field),
                      index < fieldInfo.length - 1 && [
                        React.createElement('br', { key: `br1-${index}` }),
                        React.createElement('br', { key: `br2-${index}` })
                      ]
                    )
                  )
                )
              ]
            ),
            // Section
            React.createElement('div',
              {
                key: "section-container",
                className: "flex flex-col w-1/4 max-md:w-full"
              },
              [
                React.createElement('div',
                  {
                    key: "section-title",
                    className: "text-xl font-bold leading-none text-gray-600"
                  },
                  "Section"
                ),
                React.createElement('div',
                  {
                    key: "section-list",
                    className: "self-start mt-6 text-base leading-4"
                  },
                  fieldInfo.map((info, index) =>
                    React.createElement(React.Fragment, { key: `section-${index}` },
                      React.createElement('div', null, info.section),
                      index < fieldInfo.length - 1 && [
                        React.createElement('br', { key: `br1-${index}` }),
                        React.createElement('br', { key: `br2-${index}` })
                      ]
                    )
                  )
                )
              ]
            ),
            // Size
            React.createElement('div',
              {
                key: "size-container",
                className: "flex flex-col w-1/4 max-md:w-full"
              },
              [
                React.createElement('div',
                  {
                    key: "size-title",
                    className: "text-xl font-bold leading-none text-gray-600"
                  },
                  "Size"
                ),
                React.createElement('div',
                  {
                    key: "size-list",
                    className: "self-start mt-6 text-base leading-4"
                  },
                  fieldInfo.map((info, index) =>
                    React.createElement(React.Fragment, { key: `size-${index}` },
                      React.createElement('div', null, info.size),
                      index < fieldInfo.length - 1 && [
                        React.createElement('br', { key: `br1-${index}` }),
                        React.createElement('br', { key: `br2-${index}` })
                      ]
                    )
                  )
                )
              ]
            ),
            // Crop Type
            React.createElement('div',
              {
                key: "cropType-container",
                className: "flex flex-col w-1/4 max-md:w-full"
              },
              [
                React.createElement('div',
                  {
                    key: "cropType-title",
                    className: "text-xl font-bold leading-none text-gray-600"
                  },
                  "Current Crop Type"
                ),
                React.createElement('div',
                  {
                    key: "cropType-list",
                    className: "self-start mt-6 text-base leading-4"
                  },
                  fieldInfo.map((info, index) =>
                    React.createElement(React.Fragment, { key: `cropType-${index}` },
                      React.createElement('div', null, info.cropType),
                      index < fieldInfo.length - 1 && [
                        React.createElement('br', { key: `br1-${index}` }),
                        React.createElement('br', { key: `br2-${index}` })
                      ]
                    )
                  )
                )
              ]
            )
          ]
        )
      )
    ]
  );
}