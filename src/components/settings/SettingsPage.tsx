"use client";
import React from "react";
import Image from "next/image";
import aigenRobot from "@/images/backgrounds/aigen-robot.png";
import { AccountSection } from "./AccountSection";
import { SubscriptionSection } from "./SubscriptionSection";
import { PreferencesSection } from "./PreferencesSection";
import { HelpSection } from "./HelpSection";
import { FieldSection } from "./FieldSection";
import { TeamSection } from "./TeamSection";
import { DataSection } from "./DataSection";
import { LegalSection } from "./LegalSection";

export const SettingsPage = () => {
  return (
    <main className="rounded-none relative min-h-screen">
      <div className="flex flex-col px-12 pt-9 w-full bg-white rounded-lg max-md:px-5 max-md:max-w-full">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex gap-16 max-md:flex-col">
            {/* 左侧列 */}
            <div className="w-[506px] max-md:w-full">
              <AccountSection />
              <div className="mt-8">
                <SubscriptionSection />
              </div>
              <div className="mt-8">
                <PreferencesSection />
              </div>
              <div className="mt-8">
                <FieldSection />
              </div>
              <div className="mt-8">
                <TeamSection />
              </div>
              <div className="mt-8">
                <DataSection />
              </div>
              <div className="mt-8">
                <LegalSection />
              </div>
            </div>

            {/* 右侧列 */}
            <div className="flex-1 max-w-[506px] max-md:w-full">
              <HelpSection />
            </div>
          </div>
        </div>
      </div>

      {/* 右下角图片 */}
      <div className="fixed bottom-0 right-0 z-10 pointer-events-none">
        <Image
          src={aigenRobot}
          alt="Aigen Robot"
          width={400}
          height={300}
          className="object-contain"
          priority
        />
      </div>
    </main>
  );
}; 