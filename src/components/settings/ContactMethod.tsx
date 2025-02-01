import * as React from 'react';
import { ContactMethodProps } from './types';

export const ContactMethod: React.FC<ContactMethodProps> = ({ icon, text, onClick }) => {
  return (
    <div 
      className="flex gap-3 items-start py-1 bg-black bg-opacity-0"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 mt-0 w-6 aspect-square"
      />
      <div className="flex-auto">{text}</div>
    </div>
  );
};