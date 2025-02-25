// src/components/settings/SettingsContent.tsx
import * as React from "react";
import { AccountSettings } from "./AccountSettings";

export const SettingsContent = () => {
  return (
    <div className="flex flex-col mt-3.5 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      {/* Settings specific content */}
      <AccountSettings ></AccountSettings>
    </div>
  );
};