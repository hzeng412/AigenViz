// // src/components/dashboard/Map.tsx
// 'use client';
// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';


// // Replace with your Mapbox access token
// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || 'pk.eyJ1IjoiaHplbmciLCJhIjoiY202ank2NXg3MDYwcDJyb2JqeXZ5azY3NCJ9.UB53JETtOE63OoMxQFEK8g';

// export const Map = () => {
//   const mapContainer = useRef<HTMLDivElement>(null);
//   const map = useRef<mapboxgl.Map | null>(null);

//   useEffect(() => {
//     if (!mapContainer.current || map.current) return;

//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/satellite-v9',
//       center: [-122.13562733034926, 47.68175297321384], // Aigen Inc coordinates
//       zoom: 17,
//       bearing: 0,
//       pitch: 0
//     });

//     // Optional: Add navigation controls
//     map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

//     return () => {
//       map.current?.remove();
//     };
//   }, []);

//   return (
//     <div 
//       ref={mapContainer} 
//       className="w-full bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.25)] overflow-hidden aspect-[1.63] max-md:max-w-full"
//     />
//   );
// };


// src/components/dashboard/Map.tsx
'use client';
import React from 'react';

export const Map = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.25)] overflow-hidden aspect-[1.63] max-md:max-w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.2542006179187!2d-96.70882668432853!3d46.98774197914774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDU5JzE1LjkiTiA5NsKwNDInMjMuOSJX!5e1!3m2!1sen!2sus!4v1684518477908!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
};