"use client";
import React from "react";
import { SettingsCard } from "./SettingsCard";

export const SubscriptionSection = () => {
  return (
    <SettingsCard title="Subscription Details">
      <div className="flex flex-col bg-white">
        <div className="flex flex-wrap gap-2.5 items-start px-4 pt-4 pb-4">
          <p className="flex-1 shrink pr-56 basis-0 min-w-60">
            Aigen Crop Management (Annual)
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/3712906eb55f6ed8779521ba4e63a49b90684841a0bcc650027f43f34f4f5b4c?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[0.53] w-[9px]"
            alt=""
          />
        </div>
        <div className="flex flex-wrap gap-2.5 items-start px-4 pt-4 pb-4">
          <p className="flex-1 shrink pr-56 basis-0 min-w-60">
            Upgrade/Downgrade Subscription
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/3712906eb55f6ed8779521ba4e63a49b90684841a0bcc650027f43f34f4f5b4c?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[0.53] w-[9px]"
            alt=""
          />
        </div>
        <div className="flex flex-wrap gap-2.5 items-start px-4 pt-4 pb-4">
          <p className="flex-1 shrink pr-14 basis-0 min-w-60">
            Payment Method: Manage or update saved payment details
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/3712906eb55f6ed8779521ba4e63a49b90684841a0bcc650027f43f34f4f5b4c?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[0.53] w-[9px]"
            alt=""
          />
        </div>
        <div className="flex flex-wrap gap-2.5 items-start px-4 pt-4 pb-4 rounded-none">
          <p className="flex-1 shrink pr-20 basis-0 min-w-60">
            Billing History: List of past invoices and payment history
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a8eb05b1cab740ac8ba52685a6faf2c4/3712906eb55f6ed8779521ba4e63a49b90684841a0bcc650027f43f34f4f5b4c?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[0.53] w-[9px]"
            alt=""
          />
        </div>
      </div>
    </SettingsCard>
  );
}; 