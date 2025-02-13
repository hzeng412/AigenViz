import * as React from 'react';

interface FieldInfoSectionProps {
  title: string;
  items: string[];
  iconSrc?: string;
  bulletSrc?: string;
}

export default function FieldInfoSection(props: FieldInfoSectionProps) {
  const { title, items, iconSrc, bulletSrc } = props;
  
  const renderItems = () => {
    return items.map((item, index) => {
      const itemContent = bulletSrc 
        ? React.createElement('div', 
            { className: "flex gap-2 items-center", key: `item-${index}` },
            React.createElement('img', {
              loading: "lazy",
              src: bulletSrc,
              alt: "",
              className: "object-contain shrink-0 w-2 aspect-[0.67]",
              key: `bullet-${index}`
            }),
            React.createElement('span', { key: `text-${index}` }, item)
          )
        : React.createElement('div', { key: `item-${index}` }, item);

      return React.createElement(React.Fragment, { key: `fragment-${index}` },
        itemContent,
        index < items.length - 1 ? [
          React.createElement('br', { key: `br1-${index}` }),
          React.createElement('br', { key: `br2-${index}` })
        ] : null
      );
    });
  };

  const children = [
    React.createElement('div', 
      { 
        className: "text-xl font-bold leading-none text-gray-600",
        key: "title"
      },
      title
    )
  ];

  if (iconSrc) {
    children.push(
      React.createElement('img', {
        loading: "lazy",
        src: iconSrc,
        alt: "",
        className: "object-contain mt-1.5 w-full aspect-[83.33]",
        key: "icon"
      })
    );
  }

  children.push(
    React.createElement('div',
      { 
        className: "self-start mt-6 text-base leading-4",
        key: "items-container"
      },
      renderItems()
    )
  );

  return React.createElement('div', 
    { className: "flex flex-col w-1/4 max-md:w-full" },
    React.createElement('div', 
      { className: "flex flex-col text-black" },
      children
    )
  );
}