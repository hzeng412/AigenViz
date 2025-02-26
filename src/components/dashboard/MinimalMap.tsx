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
      // Adjust center to accommodate both fields
      console.log('Creating map instance');
      
      // Calculate the center point between the two fields
      // Field 1: -96.2145001049546 to -96.20454674175502
      // Field 2: -96.22487834356818 to -96.21496439678182
      const centerLongitude = (-96.20454674175502 + -96.22487834356818) / 2;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [centerLongitude, 46.003369397341276], // Centered exactly between the two fields
        zoom: 13.5 // Slightly zoomed out to see both fields
      });

      // Add simple error and success handlers
      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        setMapError(`Map error: ${e.error?.message || 'Unknown error'}`);
      });

      map.current.on('load', () => {
        console.log('Map loaded successfully!');
        
        // Add the original field on the right
        if (map.current) {
          // Add a source for the first field boundary
          map.current.addSource('field-boundary-1', {
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

          // Add a fill layer for the first highlighted area
          map.current.addLayer({
            'id': 'field-highlight-fill-1',
            'type': 'fill',
            'source': 'field-boundary-1',
            'layout': {},
            'paint': {
              'fill-color': '#00FF00', // Green highlight
              'fill-opacity': 0.3
            }
          });

          // Add an outline layer for the first highlighted area
          map.current.addLayer({
            'id': 'field-highlight-outline-1',
            'type': 'line',
            'source': 'field-boundary-1',
            'layout': {},
            'paint': {
              'line-color': '#00FF00',
              'line-width': 2
            }
          });

          // Add a text label for "#1B" in the center of the first field
          map.current.addLayer({
            'id': 'field-label-1',
            'type': 'symbol',
            'source': 'field-boundary-1',
            'layout': {
              'text-field': '#1B',
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
          
          // Add a source for the second field boundary (to the left of the first field)
          map.current.addSource('field-boundary-2', {
            'type': 'geojson',
            'data': {
              'type': 'Feature',
              'properties': {
                'name': 'farm07',
                'description': 'Farm 07'
              },
              'geometry': {
                'type': 'Polygon',
                'coordinates': [
                  [
                    // Create a rectangle with the same dimensions, but to the left
                    [-96.22487834356818, 46.0068861185098],  // Top left
                    [-96.21496439678182, 46.0068861185098], // Top right (connects to original field)
                    [-96.21496439678182, 45.99985267617274], // Bottom right (connects to original field)
                    [-96.22487834356818, 45.99985267617274],  // Bottom left
                    [-96.22487834356818, 46.0068861185098]   // Close the polygon
                  ]
                ]
              }
            }
          });

          // Add a fill layer for the second highlighted area
          map.current.addLayer({
            'id': 'field-highlight-fill-2',
            'type': 'fill',
            'source': 'field-boundary-2',
            'layout': {},
            'paint': {
              'fill-color': '#FFD700', // Gold highlight for differentiation
              'fill-opacity': 0.3
            }
          });

          // Add an outline layer for the second highlighted area
          map.current.addLayer({
            'id': 'field-highlight-outline-2',
            'type': 'line',
            'source': 'field-boundary-2',
            'layout': {},
            'paint': {
              'line-color': '#FFD700',
              'line-width': 2
            }
          });

          // Add a text label for "#1A" in the center of the second field
          map.current.addLayer({
            'id': 'field-label-2',
            'type': 'symbol',
            'source': 'field-boundary-2',
            'layout': {
              'text-field': '#1A',
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

          // Add click handlers for both fields
          map.current.on('click', 'field-highlight-fill-1', () => {
            router.push('/weed-pressure');
          });
          
          map.current.on('click', 'field-highlight-fill-2', () => {
            router.push('/weed-pressure?field=1A');
          });

          // Change cursor to pointer when hovering over either rectangle
          map.current.on('mouseenter', 'field-highlight-fill-1', () => {
            if (map.current) {
              map.current.getCanvas().style.cursor = 'pointer';
            }
          });
          
          map.current.on('mouseenter', 'field-highlight-fill-2', () => {
            if (map.current) {
              map.current.getCanvas().style.cursor = 'pointer';
            }
          });

          // Change cursor back when leaving either rectangle
          map.current.on('mouseleave', 'field-highlight-fill-1', () => {
            if (map.current) {
              map.current.getCanvas().style.cursor = '';
            }
          });
          
          map.current.on('mouseleave', 'field-highlight-fill-2', () => {
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
        {/* Two highlighted fields side by side */}
      </div>
    </div>
  );
};

export default MinimalMap;