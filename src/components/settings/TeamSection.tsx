"use client";
import React from "react";
import { SettingsCard } from "./SettingsCard";

export const TeamSection = () => {
  return (
    <SettingsCard title="Team Management">
      <div className="flex flex-col bg-white">
        <div className="flex flex-col px-3 pt-4 pb-4">
          <h3 className="self-start text-sm leading-6 text-black">
            Restrict Profile Creation
          </h3>
          <p className="mt-2 text-xs leading-loose text-neutral-600">
            View who can create or manage profiles.
          </p>
        </div>
        <p className="pt-5 pr-7 pb-4 pl-3 text-sm tracking-normal leading-6 text-neutral-600">
          User Roles: Add or remove team members with specific roles
        </p>
        <div className="flex flex-wrap gap-2.5 items-start px-4 pt-4 pb-4 text-sm tracking-normal leading-6 rounded-none">
          <p className="pr-12 min-w-60 w-[453px]">
            Access Logs: View who has accessed or modified field data
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/9fdf5cbe1773b3ff82735e7797010f3f5c41a93b8368e6aea0535d8ec50a692e?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[0.56] w-[9px]"
            alt=""
          />
        </div>
      </div>
    </SettingsCard>
  );
}; 