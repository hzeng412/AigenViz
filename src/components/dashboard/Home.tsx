// import * as React from "react";
// import { SidebarItem } from "./SidebarItem";
// import { SearchBar } from "./SearchBar";
// import { FieldList } from "./FieldList";

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
//   ];

//   return (
//     <div className="flex overflow-hidden flex-col bg-stone-50">
//       <header className="flex flex-col justify-center px-4 py-3.5 w-full bg-white border border-b max-md:max-w-full">
//         <div className="flex flex-wrap gap-5 justify-between px-4 py-px w-full bg-black bg-opacity-0 max-md:max-w-full">
//           <div className="flex flex-wrap gap-10">
//             <div className="flex relative flex-col justify-center items-start py-1.5 aspect-[4.104] w-[197px]">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/d58d48f77a1bf41f3c7f2dfa609beda9f2342a8aa32a203e5b3cbd0323c48eb5?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
//                 alt=""
//                 className="object-cover absolute inset-0 size-full"
//               />
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/18c67ec604fbb7885861982b868b85eb9d2477cc5decf6e4a786469d223eeda5?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
//                 alt="Logo"
//                 className="object-contain rounded-sm aspect-square w-[38px]"
//               />
//             </div>
//             <SearchBar
//               searchIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/b90846117660f87093ed45f797b9c656888a22f5b3ce0b6ce7d8eac23ad0deb9?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
//               placeholder="Search"
//             />
//           </div>
//           <div className="flex gap-px self-start">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/06b4a8707a24e9b6e9056d5db7d5d92dd0e552859e29b7d150a6059aef5cf572?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
//               alt=""
//               className="object-contain shrink-0 my-auto aspect-[2.42] w-[92px]"
//             />
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/96f544cf09ff8a4c6ff0a464f3a74861da49038e0729c0ff1901b10609b23e8b?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
//               alt="User profile"
//               className="object-contain shrink-0 w-11 rounded-sm aspect-square"
//             />
//           </div>
//         </div>
//       </header>

//       <div className="w-full max-w-[1479px] max-md:max-w-full">
//         <div className="flex gap-5 max-md:flex-col">
//           <nav className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col grow px-4 py-6 w-full bg-stone-50 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] max-md:mt-7">
//               <div className="px-4 pt-0.5 pb-3 w-52 max-w-full text-xl font-bold tracking-wider leading-none whitespace-nowrap bg-black bg-opacity-0 text-zinc-800 max-md:pr-5">
//                 Dashboard
//               </div>
//               <div className="flex flex-col pb-64 mt-8 w-full bg-black bg-opacity-0 max-md:pb-24 max-md:mr-0.5">
//                 {sidebarItems.map((item, index) => (
//                   <div key={index} className="mt-5 first:mt-0">
//                     <SidebarItem {...item} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </nav>

//           <main className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col mt-3.5 max-md:mt-10 max-md:max-w-full">
//               <div className="w-full bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.25)] overflow-hidden aspect-[1.63] max-md:max-w-full">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671.8783454069844!2d-122.13562733034926!3d47.68175297321384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900dec17994e17%3A0x5b017bec4a65f897!2sAigen%20Inc!5e1!3m2!1sen!2sus!4v1706583658974!5m2!1sen!2sus"
//                   width="100%"
//                   height="100%"
//                   style={{ 
//                     border: 0,
//                     filter: 'contrast(1.1) saturate(1.2)'  // Enhance satellite imagery
//                   }}
//                   allowFullScreen={false}  // Disable fullscreen button
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//                 <style>{`
//                   iframe {
//                     filter: saturate(1.2) contrast(1.1);
//                   }
//                   /* Hide the "View Larger Map" text */
//                   iframe::before {
//                     content: "";
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     width: 100px;
//                     height: 40px;
//                     background: white;
//                     z-index: 1;
//                   }
//                 `}</style>
//               </div>
//               <div className="flex flex-col items-start pt-2.5 pr-20 pl-4 mt-4 w-full bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.25)] max-md:pr-5 max-md:max-w-full">
//                 <div className="flex z-10 flex-wrap gap-5 justify-between max-w-full text-xl font-bold leading-none w-[973px]">
//                   <div className="flex gap-10">
//                     <div className="text-gray-600 basis-auto">
//                       Field: North-East Quarter
//                     </div>
//                     <div className="text-black">Location</div>
//                   </div>
//                   <div className="flex gap-10 self-start text-black max-md:max-w-full">
//                     <div>Size</div>
//                     <div>Current Crop Type</div>
//                   </div>
//                 </div>
//                 <FieldList />
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };
