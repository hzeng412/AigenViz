(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_dashboard_Map_tsx_fec3ea._.js", {

"[project]/src/components/dashboard/Map.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
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
__turbopack_esm__({
    "Map": (()=>Map)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const Map = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.25)] overflow-hidden aspect-[1.63] max-md:max-w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.2542006179187!2d-96.70882668432853!3d46.98774197914774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDU5JzE1LjkiTiA5NsKwNDInMjMuOSJX!5e1!3m2!1sen!2sus!4v1684518477908!5m2!1sen!2sus",
            width: "100%",
            height: "100%",
            style: {
                border: 0
            },
            allowFullScreen: true,
            loading: "lazy"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/Map.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/Map.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
};
_c = Map;
var _c;
__turbopack_refresh__.register(_c, "Map");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_dashboard_Map_tsx_fec3ea._.js.map