"use client";
import React from "react";
import { SettingsCard } from "./SettingsCard";

export const AccountSection = () => {
  return (
    <div className="self-end max-w-full text-sm tracking-normal text-neutral-600 w-[506px]">
      <h1 className="self-start text-xl font-bold tracking-wide text-neutral-500 mb-8">
        Account Settings
      </h1>
      <SettingsCard title="Account Information">
        <div className="flex flex-col justify-center py-px w-full leading-6 whitespace-nowrap bg-white">
          <div className="flex flex-wrap items-start p-4">
            <p className="overflow-hidden flex-1 shrink pr-px basis-0">
              hello@insightfulgrower.io
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/0522d91f5bf745f2c098bd50de376dd148eb539c3418471dce70bed79c7f0fdd?placeholderIfAbsent=true"
              className="object-contain shrink-0 w-6 aspect-square"
              alt=""
            />
          </div>
          <div className="flex items-start pt-px w-full leading-6 bg-white">
            <div className="flex flex-wrap items-start p-4 min-w-60 w-[504px]">
              <p className="overflow-hidden flex-1 shrink pr-px basis-0">
                Password: **********
              </p>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/34d95095ba7aea25cd19cd24f160d04dcdbfe6eb74ad9b86cd81efb279ef2949?placeholderIfAbsent=true"
                className="object-contain shrink-0 w-6 aspect-square"
                alt=""
              />
            </div>
          </div>
          <button className="px-4 py-5 w-full leading-6 text-black bg-gray-100 text-left">
            Sign-out From All Devices
          </button>
        </div>
      </SettingsCard>
    </div>
  );
}; 