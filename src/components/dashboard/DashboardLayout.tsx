// src/components/dashboard/DashboardLayout.tsx
import * as React from "react";
import Link from "next/link"; // Import the Link component
import { SidebarItem } from "./SidebarItem";

import HomeSvg from "@/images/icons/home-svg.svg";
import WeedPressureSvg from "@/images/icons/weed-pressure.svg";
import CropStatusSvg from "@/images/icons/crop-status.svg";
import InsightsIconSvg from "@/images/icons/insights-icon.svg";
import SettingsIconSvg from "@/images/icons/settings-icon.svg";

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sidebarItems = [
    {
      icon: HomeSvg,
      text: "Home",
      path: "/",
    },
    {
      icon: WeedPressureSvg,
      text: "Weed Pressure",
      path: "/weed-pressure",
    },
    {
      icon: CropStatusSvg,
      text: "Crop Status",
      path: "/crop-status",
    },
    {
      icon: InsightsIconSvg,
      text: "Insights",
      path: "/insights",
    },
    {
      icon: SettingsIconSvg,
      text: "Settings",
      path: "/settings",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Your existing header */}
      <header className="flex flex-col justify-center px-4 py-3.5 w-full bg-white border border-b max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between px-4 py-px w-full bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex flex-wrap gap-10">
            <div className="flex relative flex-col justify-center items-start py-1.5 aspect-[4.104] w-[197px]">
              <Link href="/"> 
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d58d48f77a1bf41f3c7f2dfa609beda9f2342a8aa32a203e5b3cbd0323c48eb5?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                  alt="Click to return to home"
                  className="object-cover absolute inset-0 size-full cursor-pointer" // Add cursor-pointer for better UX
                />
              </Link>
            </div>
          </div>
          <div className="flex gap-px self-start">
            <Link href="/settings">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/96f544cf09ff8a4c6ff0a464f3a74861da49038e0729c0ff1901b10609b23e8b?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                alt="User profile"
                className="object-contain shrink-0 w-11 rounded-sm aspect-square cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </header>

      <div className="flex gap-5 h-full w-full px-4 max-md:flex-col">
        {/* Your existing sidebar navigation */}
        <nav className="flex flex-col w-64 h-full max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-4 py-6 w-full h-full bg-stone-50 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] max-md:mt-7">
            <div className="px-4 pt-0.5 pb-3 w-52 max-w-full text-xl font-bold tracking-wider leading-none whitespace-nowrap bg-black bg-opacity-0 text-zinc-800 max-md:pr-5">
              Dashboard
            </div>
            <div className="flex flex-col flex-grow mt-8 w-full bg-black bg-opacity-0 max-md:mr-0.5">
              {sidebarItems.map((item, index) => (
                <div key={index} className="mt-5 first:mt-0">
                  <SidebarItem {...item} />
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Main content area */}
        <main className="flex flex-col flex-grow h-full max-md:ml-0 max-md:w-full">
          {children}
        </main>
      </div>
    </div>
  );
};