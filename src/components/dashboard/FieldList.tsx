import * as React from "react";
import { FieldDataProps } from "./types";

const fieldData: FieldDataProps[] = [
  {
    name: "Zimmerman",
    location: "#2B",
    size: "214 acres",
    cropType: "Sugar Beet",
  },
  { name: "Lindemann", location: "#1A", size: "184 acres", cropType: "Cotton" },
  { name: "Sinimann", location: "#2C", size: "157 acres", cropType: "Cotton" },
];

export const FieldList: React.FC = () => {
  return (
    <div className="flex z-10 flex-wrap gap-9 mt-0 max-w-full text-base leading-4 text-black w-[1006px]">
      <div className="my-auto">
        {fieldData.map((field, index) => (
          <React.Fragment key={index}>
            {field.name}
            <br />
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className="flex relative flex-col grow shrink-0 justify-center items-center px-16 py-7 bg-blend-normal basis-0 min-h-[129px] w-fit max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/36b00b944cd2093c5e1a37a0dbe16c7eb393f07b93a0cc6099d4d25e71e4a7ab?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between ml-6 max-w-full w-[571px]">
          <div>
            {fieldData.map((field, index) => (
              <React.Fragment key={index}>
                {field.location}
                <br />
                <br />
              </React.Fragment>
            ))}
          </div>
          <div>
            {fieldData.map((field, index) => (
              <React.Fragment key={index}>
                {field.size}
                <br />
                <br />
              </React.Fragment>
            ))}
          </div>
          <div>
            {fieldData.map((field, index) => (
              <React.Fragment key={index}>
                {field.cropType}
                <br />
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
