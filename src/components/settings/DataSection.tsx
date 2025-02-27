"use client";
import React from "react";
import { SettingsCard } from "./SettingsCard";

export const DataSection = () => {
  return (
    <SettingsCard title="Data Management">
      <div className="flex flex-col bg-white">
        <div className="flex flex-wrap gap-2.5 items-start px-4 pt-4 pb-4">
          <p className="flex-1 shrink pr-64 basis-0 min-w-60">
            Import/Export Data
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/6080edb418892b66acba334288fbf79a64a8ecca2f1f82407e78594851172eeb?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[0.56] w-[9px]"
            alt=""
          />
        </div>
        <div className="flex flex-wrap gap-2.5 items-start px-4 pt-4 pb-4">
          <p className="flex-1 shrink pr-16 basis-0 min-w-60">
            Data Backup: Enable automatic or manual backup of data
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/6080edb418892b66acba334288fbf79a64a8ecca2f1f82407e78594851172eeb?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[0.56] w-[9px]"
            alt=""
          />
        </div>
        <div className="flex flex-wrap gap-2.5 items-start px-4 pt-4 pb-4 text-black bg-gray-100 rounded-none">
          <p className="flex-1 shrink pr-64 basis-0 min-w-60">
            Delete Account/Data
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/6080edb418892b66acba334288fbf79a64a8ecca2f1f82407e78594851172eeb?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[0.56] w-[9px]"
            alt=""
          />
        </div>
      </div>
    </SettingsCard>
  );
}; 