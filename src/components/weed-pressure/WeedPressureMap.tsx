// src/components/weed-pressure/WeedPressureMap.tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Replace with your Mapbox access token - using the same one from MinimalMap
mapboxgl.accessToken = 'pk.eyJ1IjoiaHplbmciLCJhIjoiY203bG5yMXpsMGUybzJzcHhvb3g2eG92MCJ9.oHavpjy_vg8BmjZqsT2C6w';

// Farm location data
type FarmLocation = {
  id: string;
  name: string;
  location: string;
  center: [number, number];
  zoom: number;
  boundary: number[][];
  color: string;
}

// Define farm locations using the same coordinates as MinimalMap
const farmLocations: { [key: string]: FarmLocation } = {
  '1A': {
    id: '1A',
    name: "Field #1A",
    location: "Eastern Fields",
    center: [-96.22, 46.0033], // Center of 1A field
    zoom: 15,
    color: '#FFD700', // Gold highlight
    boundary: [
      [-96.22487834356818, 46.0068861185098],  // Top left
      [-96.21496439678182, 46.0068861185098], // Top right
      [-96.21496439678182, 45.99985267617274], // Bottom right
      [-96.22487834356818, 45.99985267617274],  // Bottom left
      [-96.22487834356818, 46.0068861185098]   // Close the polygon
    ]
  },
  '1B': {
    id: '1B',
    name: "Field #1B",
    location: "Eastern Fields",
    center: [-96.21, 46.0033], // Center of 1B field
    zoom: 15,
    color: '#00FF00', // Green highlight
    boundary: [
      [-96.2145001049546, 46.0068861185098],  // Top left
      [-96.20454674175502, 46.0068861185098], // Top right
      [-96.20454674175502, 45.99985267617274], // Bottom right
      [-96.2145001049546, 45.99985267617274],  // Bottom left
      [-96.2145001049546, 46.0068861185098]   // Close the polygon
    ]
  }
};

interface WeedPressureMapProps {
  selectedFarm: string;
}

export const WeedPressureMap: React.FC<WeedPressureMapProps> = ({ selectedFarm = '1B' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [currentFarm, setCurrentFarm] = useState<string>(selectedFarm);

  // Ensure we have a valid farm selection
  const validFarm = farmLocations[currentFarm] ? currentFarm : '1B';

  // Initialize or update map when selectedFarm changes
  useEffect(() => {
    if (selectedFarm !== currentFarm) {
      setCurrentFarm(selectedFarm);
      
      // If map already exists, update visualization instead of recreating
      if (map.current && mapLoaded) {
        const farmData = farmLocations[selectedFarm] || farmLocations['1B'];
        map.current.flyTo({
          center: farmData.center,
          zoom: farmData.zoom,
          essential: true
        });
        
        // Update field visualization
        updateFieldVisualization(selectedFarm);
      }
    }
  }, [selectedFarm, currentFarm, mapLoaded]);

  // Initialize map on first render
  useEffect(() => {
    // Skip if container is not ready or map already exists
    if (!mapContainer.current || map.current) return;
    
    try {
      const farmData = farmLocations[validFarm];
      
      // Calculate center point between both fields for initial view
      const centerLongitude = (-96.20454674175502 + -96.22487834356818) / 2;
      const initialCenter: [number, number] = [centerLongitude, 46.003369397341276];
      
      // Initialize map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: initialCenter,
        zoom: 13.5, // Start zoomed out to see both fields
        bearing: 0,
        pitch: 0
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add event handlers
      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        setMapError(`Map error: ${e.error?.message || 'Unknown error'}`);
      });

      map.current.on('load', () => {
        console.log('Field map loaded successfully');
        setMapLoaded(true);
        
        if (map.current) {
          // First add both field boundaries (we'll control visibility later)
          addFieldBoundaries();
          
          // Then highlight only the selected field
          updateFieldVisualization(validFarm);
          
          // Fly to the selected field
          map.current.flyTo({
            center: farmData.center,
            zoom: farmData.zoom,
            essential: true
          });
        }
      });
    } catch (err) {
      console.error('Error initializing field map:', err);
      setMapError(`Map initialization error: ${err instanceof Error ? err.message : String(err)}`);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [validFarm]);

  // Add both field boundaries to the map
  const addFieldBoundaries = () => {
    if (!map.current) return;
    
    // Add both field boundaries as sources
    Object.values(farmLocations).forEach(farm => {
      // Add field boundary source
      map.current!.addSource(`field-${farm.id}`, {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {
            'name': farm.id,
            'description': farm.name
          },
          'geometry': {
            'type': 'Polygon',
            'coordinates': [farm.boundary]
          }
        }
      });
      
      // Add field fill layer (initially invisible)
      map.current!.addLayer({
        'id': `field-fill-${farm.id}`,
        'type': 'fill',
        'source': `field-${farm.id}`,
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'fill-color': farm.color,
          'fill-opacity': 0.3
        }
      });
      
      // Add field outline layer (initially invisible)
      map.current!.addLayer({
        'id': `field-outline-${farm.id}`,
        'type': 'line',
        'source': `field-${farm.id}`,
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'line-color': farm.color,
          'line-width': 2
        }
      });
    });
  };

  // Update field visualization to show only the selected farm
  const updateFieldVisualization = (farmId: string) => {
    if (!map.current || !mapLoaded) return;
    
    // Make sure we have a valid farm ID
    const selectedFarmId = farmLocations[farmId] ? farmId : '1B';
    
    // Hide all field layers
    Object.keys(farmLocations).forEach(id => {
      // Hide field visualization
      map.current!.setLayoutProperty(`field-fill-${id}`, 'visibility', 'none');
      map.current!.setLayoutProperty(`field-outline-${id}`, 'visibility', 'none');
    });
    
    // Show selected field layers
    map.current.setLayoutProperty(`field-fill-${selectedFarmId}`, 'visibility', 'visible');
    map.current.setLayoutProperty(`field-outline-${selectedFarmId}`, 'visibility', 'visible');
  };

  return (
    <div className="flex flex-col w-full h-full">
      {mapError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded">
          {mapError}
        </div>
      )}
      <div 
        ref={mapContainer} 
        className="w-full h-full min-h-[688px] bg-gray-100 rounded-lg overflow-hidden"
      />
    </div>
  );
};

export default WeedPressureMap;