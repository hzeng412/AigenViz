import * as React from "react";
import { SearchBarProps } from "./types";

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  searchIcon,
}) => {
  return (
    <div className="flex flex-col grow shrink-0 self-start text-sm font-medium text-gray-400 whitespace-nowrap basis-0 bg-black bg-opacity-0 w-fit">
      <div className="flex gap-1.5 rounded-lg border border-solid bg-stone-50 border-stone-50">
        <img
          loading="lazy"
          src={searchIcon}
          alt=""
          className="object-contain shrink-0 w-8 aspect-[0.73]"
        />
        <input
          type="search"
          placeholder={placeholder}
          className="flex-auto my-auto w-[368px] bg-transparent border-none outline-none"
          aria-label="Search"
        />
      </div>
    </div>
  );
};
