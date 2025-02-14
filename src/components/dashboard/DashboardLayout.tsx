// src/components/dashboard/DashboardLayout.tsx
import * as React from "react";
import Link from "next/link"; // Import the Link component
import { SidebarItem } from "./SidebarItem";
import { SearchBar } from "./SearchBar";

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sidebarItems = [
    {
      icon: "/src/images/home.png",
      // icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6f777c6b0b69916f2b94afb38cfdf0a9703cbd1bd351aae120acb7abfc4b96b?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
      text: "Home",
      path: "/",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5ebf1ea86fc64865136abdc377205dccd460d0b7f3c14735e3e50b0825de223?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
      text: "Weed Pressure",
      path: "/weed-pressure",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f1010d2415d45fe331c82f1af948b1577b4af7464d2ddbce6710dd4772d53cb?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
      text: "Crop Status",
      path: "/crop-status",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd9b8661dd01af93213a983821f2d3bd920b6d887115bbd836903772b819b147?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
      text: "Insights",
      path: "/insights",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd9b8661dd01af93213a983821f2d3bd920b6d887115bbd836903772b819b147?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
      text: "Settings",
      path: "/settings",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-stone-50">
      {/* Your existing header */}
      <header className="flex flex-col justify-center px-4 py-3.5 w-full bg-white border border-b max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between px-4 py-px w-full bg-black bg-opacity-0 max-md:max-w-full">
          <div className="flex flex-wrap gap-10">
            <div className="flex relative flex-col justify-center items-start py-1.5 aspect-[4.104] w-[197px]">
              {/* Wrap the image in a Link component */}
              <Link href=""> {/* Replace "/home" with your desired route */}
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

            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/96f544cf09ff8a4c6ff0a464f3a74861da49038e0729c0ff1901b10609b23e8b?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
              alt="User profile"
              className="object-contain shrink-0 w-11 rounded-sm aspect-square"
            />
          </div>
        </div>
      </header>

      <div className="w-full max-w-[1479px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* Your existing sidebar navigation */}
          <nav className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-4 py-6 w-full bg-stone-50 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] max-md:mt-7">
              <div className="px-4 pt-0.5 pb-3 w-52 max-w-full text-xl font-bold tracking-wider leading-none whitespace-nowrap bg-black bg-opacity-0 text-zinc-800 max-md:pr-5">
                Dashboard
              </div>
              <div className="flex flex-col pb-64 mt-8 w-full bg-black bg-opacity-0 max-md:pb-24 max-md:mr-0.5">
                {sidebarItems.map((item, index) => (
                  <div key={index} className="mt-5 first:mt-0">
                    <SidebarItem {...item} />
                  </div>
                ))}
              </div>
            </div>
          </nav>

          {/* Main content area */}
          <main className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};