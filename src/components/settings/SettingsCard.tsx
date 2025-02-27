"use client";
import React from "react";

interface SettingsCardProps {
  title: string;
  children: React.ReactNode;
}

export const SettingsCard: React.FC<SettingsCardProps> = ({
  title,
  children,
}) => {
  return (
    <section className="p-px w-full text-sm leading-6 rounded shadow-[0px_1px_2px_rgba(0,0,0,0.05)] text-neutral-600">
      <header className="flex items-center py-1 pl-4 w-full font-semibold tracking-normal text-white rounded-xl bg-[#4B8B6F]">
        <h2 className="overflow-hidden whitespace-nowrap">{title}</h2>
      </header>
      {children}
    </section>
  );
}; 