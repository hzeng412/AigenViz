(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_dashboard_Map_tsx_fec3ea._.js", {

"[project]/src/components/dashboard/Map.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/components/dashboard/Map.tsx
__turbopack_esm__({
    "Map": (()=>Map)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
// Set Mapbox token directly for testing (replace with your actual token)
// In production, use environment variables: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = 'pk.eyJ1IjoiaHplbmciLCJhIjoiY202ank2NXg3MDYwcDJyb2JqeXZ5azY3NCJ9.UB53JETtOE63OoMxQFEK8gE'; // ⚠️ Replace with your actual Mapbox token
// Farm field coordinates - update these with your actual field coordinates
const FIELD_BOUNDS = {
    // Default coordinates (update these with your actual field coordinates)
    center: [
        -96.698,
        46.984
    ],
    bounds: [
        [
            -96.7066,
            46.9878
        ],
        [
            -96.6979,
            46.9841
        ]
    ]
};
const Map = ()=>{
    _s();
    const mapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Map.useEffect": ()=>{
            // Safety check for window object (needed for SSR)
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            // Wait to ensure the container is available
            if (!mapContainer.current) return;
            // Don't reinitialize if map already exists
            if (map.current) return;
            console.log('Initializing map with container:', mapContainer.current);
            // Initialize map
            map.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/satellite-v9',
                center: FIELD_BOUNDS.center,
                zoom: 16,
                bearing: 0,
                pitch: 0
            });
            // Add navigation controls
            map.current.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].NavigationControl(), 'top-right');
            // Add the field boundary when map loads
            map.current.on('load', {
                "Map.useEffect": ()=>{
                    console.log('Map loaded successfully');
                    // Add a data source for the field boundary
                    map.current?.addSource('field-boundary', {
                        'type': 'geojson',
                        'data': {
                            'type': 'Feature',
                            'properties': {},
                            'geometry': {
                                'type': 'Polygon',
                                'coordinates': [
                                    [
                                        FIELD_BOUNDS.bounds[0],
                                        [
                                            FIELD_BOUNDS.bounds[1][0],
                                            FIELD_BOUNDS.bounds[0][1]
                                        ],
                                        FIELD_BOUNDS.bounds[1],
                                        [
                                            FIELD_BOUNDS.bounds[0][0],
                                            FIELD_BOUNDS.bounds[1][1]
                                        ],
                                        FIELD_BOUNDS.bounds[0] // Close the polygon by repeating the first point
                                    ]
                                ]
                            }
                        }
                    });
                    // Add a fill layer for the field
                    map.current?.addLayer({
                        'id': 'field-fill',
                        'type': 'fill',
                        'source': 'field-boundary',
                        'layout': {},
                        'paint': {
                            'fill-color': '#0080ff',
                            'fill-opacity': 0.3
                        }
                    });
                    // Add a line layer for the field boundary
                    map.current?.addLayer({
                        'id': 'field-line',
                        'type': 'line',
                        'source': 'field-boundary',
                        'layout': {},
                        'paint': {
                            'line-color': '#0080ff',
                            'line-width': 3
                        }
                    });
                }
            }["Map.useEffect"]);
            return ({
                "Map.useEffect": ()=>{
                    if (map.current && typeof map.current.remove === 'function') {
                        try {
                            map.current.remove();
                        } catch (error) {
                            console.error('Error cleaning up map:', error);
                        }
                    }
                }
            })["Map.useEffect"];
        }
    }["Map.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.25)] overflow-hidden max-md:max-w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: mapContainer,
            className: "w-full h-[400px] max-md:max-w-full",
            style: {
                minHeight: "400px"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/Map.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/Map.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
};
_s(Map, "Lk3Flgv7n4ByEejhurS8fIb2FSQ=");
_c = Map;
var _c;
__turbopack_refresh__.register(_c, "Map");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_dashboard_Map_tsx_fec3ea._.js.map