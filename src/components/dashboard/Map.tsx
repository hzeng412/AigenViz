// src/components/dashboard/Map.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Set Mapbox token directly for testing (replace with your actual token)
// In production, use environment variables: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
mapboxgl.accessToken = 'pk.eyJ1IjoiaHplbmciLCJhIjoiY202ank2NXg3MDYwcDJyb2JqeXZ5azY3NCJ9.UB53JETtOE63OoMxQFEK8gE'; // ⚠️ Replace with your actual Mapbox token

// Farm field coordinates - update these with your actual field coordinates
const FIELD_BOUNDS = {
  // Default coordinates (update these with your actual field coordinates)
  center: [-96.698, 46.984] as [number, number],
  bounds: [
    [-96.7066, 46.9878] as [number, number], // Southwest corner
    [-96.6979, 46.9841] as [number, number]  // Northeast corner
  ] as [[number, number], [number, number]]
};

export const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  
  useEffect(() => {
    // Safety check for window object (needed for SSR)
    if (typeof window === 'undefined') return;
    
    // Wait to ensure the container is available
    if (!mapContainer.current) return;
    
    // Don't reinitialize if map already exists
    if (map.current) return;

    console.log('Initializing map with container:', mapContainer.current);
    
    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: FIELD_BOUNDS.center,
      zoom: 16,
      bearing: 0,
      pitch: 0
    });
    
    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    // Add the field boundary when map loads
    map.current.on('load', () => {
      console.log('Map loaded successfully');
      // Add a data source for the field boundary
      map.current?.addSource('field-boundary', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'Polygon',
            'coordinates': [[
              FIELD_BOUNDS.bounds[0], // Bottom left [lng, lat]
              [FIELD_BOUNDS.bounds[1][0], FIELD_BOUNDS.bounds[0][1]], // Bottom right [lng, lat]
              FIELD_BOUNDS.bounds[1], // Top right [lng, lat]
              [FIELD_BOUNDS.bounds[0][0], FIELD_BOUNDS.bounds[1][1]],  // Top left [lng, lat]
              FIELD_BOUNDS.bounds[0] // Close the polygon by repeating the first point
            ]]
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
    });
    
    return () => {
      if (map.current && typeof map.current.remove === 'function') {
        try {
          map.current.remove();
        } catch (error) {
          console.error('Error cleaning up map:', error);
        }
      }
    };
  }, []);

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.25)] overflow-hidden max-md:max-w-full">
      {/* Map container */}
      <div 
        ref={mapContainer} 
        className="w-full h-[400px] max-md:max-w-full"
        style={{ minHeight: "400px" }}
      />
    </div>
  );
};