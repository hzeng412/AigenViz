// 'use client';
// import { WeedPressurePage } from '@/components/dashboard/WeedPressure';

// export default function WeedPressure() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Weed Pressure Analysis</h1>
//       {/* Add your weed pressure specific content here */}
//       <div className="grid gap-4">
//         {/* Add your weed pressure components */}
//       </div>
//     </div>
//   )
// } 


import * as React from "react";
import { SidebarItem } from "@/components/dashboard/SidebarItem";
import { SearchBar } from "@/components/dashboard/SearchBar";
import { FieldList } from "@/components/dashboard/FieldList";
import { WeedPressurePage } from '@/components/dashboard/WeedPressure';

// export const HomePage: React.FC = () => {
//   const sidebarItems = [
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6f777c6b0b69916f2b94afb38cfdf0a9703cbd1bd351aae120acb7abfc4b96b?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
//       text: "Home",
//       path: "/",
//     },
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5ebf1ea86fc64865136abdc377205dccd460d0b7f3c14735e3e50b0825de223?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
//       text: "Weed Pressure",
//       path: "/weed-pressure",
//     },
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f1010d2415d45fe331c82f1af948b1577b4af7464d2ddbce6710dd4772d53cb?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
//       text: "Crop Status",
//       path: "/crop-status",
//     },
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd9b8661dd01af93213a983821f2d3bd920b6d887115bbd836903772b819b147?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
//       text: "Insights",
//       path: "/insights",
//     },
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd9b8661dd01af93213a983821f2d3bd920b6d887115bbd836903772b819b147?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0",
//       text: "Settings",
//       path: "/settings",
//     },
//   ];import * as React from 'react';

