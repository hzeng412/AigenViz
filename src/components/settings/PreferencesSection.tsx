"use client";
import React from "react";
import { SettingsCard } from "./SettingsCard";

export const PreferencesSection = () => {
  return (
    <SettingsCard title="Preferences">
      <div className="flex flex-col bg-white">
        <div className="flex flex-wrap gap-2.5 items-start px-4 pt-4 pb-4">
          <p className="flex-1 shrink pr-64 basis-0 min-w-60">
            Language Settings
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/9fdf5cbe1773b3ff82735e7797010f3f5c41a93b8368e6aea0535d8ec50a692e?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[0.56] w-[9px]"
            alt=""
          />
        </div>
        <div className="flex flex-wrap gap-2.5 items-start px-4 pt-4 pb-4">
          <p className="flex-1 shrink pr-80 basis-0 min-w-60">
            Time Zone Selection
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/6080edb418892b66acba334288fbf79a64a8ecca2f1f82407e78594851172eeb?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[0.56] w-[9px]"
            alt=""
          />
        </div>
        <div className="flex flex-wrap gap-2.5 items-start px-4 pt-4 pb-4 rounded-none">
          <p className="pr-64 min-w-60 w-[453px]">Notification Preferences</p>
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