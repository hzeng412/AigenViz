// src/components/dashboard/MinimalMap.tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useRouter } from 'next/navigation';
import 'mapbox-gl/dist/mapbox-gl.css';

// Set token directly
mapboxgl.accessToken = 'pk.eyJ1IjoiaHplbmciLCJhIjoiY203bG5yMXpsMGUybzJzcHhvb3g2eG92MCJ9.oHavpjy_vg8BmjZqsT2C6w';

export const MinimalMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    console.log('MinimalMap mounting');
    console.log('Container ref exists:', !!mapContainer.current);
    
    if (!mapContainer.current) {
      console.error('Map container ref is null');
      setMapError('Container not available');
      return;
    }

    try {
      // Create a simple map with no extras, centered between your coordinates
      console.log('Creating map instance');
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [-96.20952342335481, 46.003369397341276], // Center between your two points
        zoom: 14 // Zoomed in more to better see the highlighted area
      });

      // Add simple error and success handlers
      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        setMapError(`Map error: ${e.error?.message || 'Unknown error'}`);
      });

      map.current.on('load', () => {
        console.log('Map loaded successfully!');
        
        // Add the highlighted area once the map is loaded
        if (map.current) {
          // Add a source for the field boundary
          map.current.addSource('field-boundary', {
            'type': 'geojson',
            'data': {
              'type': 'Feature',
              'properties': {
                'name': 'farm06',
                'description': 'Farm 06'
              },
              'geometry': {
                'type': 'Polygon',
                'coordinates': [
                  [
                    // Create a rectangle from the two points
                    [-96.2145001049546, 46.0068861185098],  // Top left
                    [-96.20454674175502, 46.0068861185098], // Top right
                    [-96.20454674175502, 45.99985267617274], // Bottom right
                    [-96.2145001049546, 45.99985267617274],  // Bottom left
                    [-96.2145001049546, 46.0068861185098]   // Close the polygon
                  ]
                ]
              }
            }
          });

          // Add a fill layer for the highlighted area
          map.current.addLayer({
            'id': 'field-highlight-fill',
            'type': 'fill',
            'source': 'field-boundary',
            'layout': {},
            'paint': {
              'fill-color': '#00FF00', // Green highlight
              'fill-opacity': 0.3
            }
          });

          // Add an outline layer for the highlighted area
          map.current.addLayer({
            'id': 'field-highlight-outline',
            'type': 'line',
            'source': 'field-boundary',
            'layout': {},
            'paint': {
              'line-color': '#00FF00',
              'line-width': 2
            }
          });

          // Add a text label for "farm06" in the center of the field
          map.current.addLayer({
            'id': 'field-label',
            'type': 'symbol',
            'source': 'field-boundary',
            'layout': {
              'text-field': 'farm06',
              'text-size': 14,
              'text-anchor': 'center',
              'text-transform': 'uppercase',
              'text-letter-spacing': 0.05,
              'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
            },
            'paint': {
              'text-color': '#000000',
              'text-halo-color': '#ffffff',
              'text-halo-width': 2
            }
          });

          // Add click handler to navigate to /weed_pressure
          map.current.on('click', 'field-highlight-fill', () => {
            router.push('/weed-pressure');
          });

          // Change cursor to pointer when hovering over the rectangle
          map.current.on('mouseenter', 'field-highlight-fill', () => {
            if (map.current) {
              map.current.getCanvas().style.cursor = 'pointer';
            }
          });

          // Change cursor back when leaving the rectangle
          map.current.on('mouseleave', 'field-highlight-fill', () => {
            if (map.current) {
              map.current.getCanvas().style.cursor = '';
            }
          });
        }
      });
    } catch (err) {
      console.error('Error initializing map:', err);
      setMapError(`Initialization error: ${err instanceof Error ? err.message : String(err)}`);
    }

    return () => {
      console.log('Cleaning up map');
      if (map.current) {
        map.current.remove();
      }
    };
  }, [router]);

  return (
    <div className="flex flex-col">
      {mapError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded">
          {mapError}
        </div>
      )}
      <div 
        ref={mapContainer} 
        style={{ width: '100%', height: '500px', border: '1px solid #ddd' }}
      />
      <div className="mt-2 text-sm text-gray-500">
        {/* Highlighted area: NW (46.007, -96.215) to SE (46.000, -96.205) */}
      </div>
    </div>
  );
};

export default MinimalMap;