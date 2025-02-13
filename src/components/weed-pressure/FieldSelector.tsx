import React from 'react';

export const FieldSelector: React.FC = () => {
  return (
    <div className="flex flex-col shrink-0 basis-0 bg-black bg-opacity-0 grow-0 w-fit">
      <div className="flex gap-4 px-3 py-3.5 w-full bg-white rounded-lg border border border-solid">
        <div className="flex overflow-hidden justify-center items-center self-start min-h-[16px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/233ff09ac579268fd564ac363e4545f8a5f5bca16ccfda5dc37852b69e1f70f2?apiKey=a8eb05b1cab740ac8ba52685a6faf2c4&"
            className="object-contain self-stretch my-auto w-3 aspect-[0.75]"
            alt=""
          />
        </div>
        <div className="grow shrink text-base text-gray-400 w-[238px]">
          Select Field
        </div>
      </div>
    </div>
  );
}; 