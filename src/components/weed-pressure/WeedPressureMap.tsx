// src/components/weed-pressure/WeedPressureMap.tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Replace with your Mapbox access token - using the one from your existing components
mapboxgl.accessToken = 'pk.eyJ1IjoiaHplbmciLCJhIjoiY202ank2NXg3MDYwcDJyb2JqeXZ5azY3NCJ9.UB53JETtOE63OoMxQFEK8g';

// Add at the top of the file, before farmLocations definition
type FarmLocation = {
  name: string;
  location: string;
  center: [number, number]; // This fixes the LngLatLike error
  zoom: number;
  boundary: number[][];
  weedData: {
    type: 'Feature';  // This fixes the Feature type error
    properties: {
      weedCount: number;
      intensity: number;
    };
    geometry: {
      type: string;
      coordinates: number[];
    };
  }[];
}

type FarmLocations = {
  [key: string]: FarmLocation;
}

// Farm location data
const farmLocations: FarmLocations = {
  farm01: {
    name: "Kragnes_Jacob_Holt",
    location: "Rockstad",
    center: [-96.698, 46.984], // Kragnes_Jacob_Holt coordinates
    zoom: 17,
    boundary: [
      [-96.6982, 46.9842],
      [-96.6978, 46.9842],
      [-96.6978, 46.9840],
      [-96.6982, 46.9840],
      [-96.6982, 46.9842]
    ],
    weedData: [
      {
        'type': 'Feature',
        'properties': {
          'weedCount': 56,
          'intensity': 0.56
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-96.697937, 46.984135]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'weedCount': 43,
          'intensity': 0.43
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-96.697954, 46.984116]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'weedCount': 166,
          'intensity': 0.83
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-96.697981, 46.984135]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'weedCount': 188,
          'intensity': 0.94
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-96.698020, 46.984140]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'weedCount': 73,
          'intensity': 0.73
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-96.698077, 46.984140]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'weedCount': 98,
          'intensity': 0.98
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-96.698122, 46.984140]
        }
      }
    ]
  },
  farm06: {
    name: "Farm 06",
    location: "Eastern Fields",
    center: [-96.20952342335481, 46.003369397341276], // From MinimalMap
    zoom: 14,
    boundary: [
      [-96.2145001049546, 46.0068861185098],  // Top left
      [-96.20454674175502, 46.0068861185098], // Top right
      [-96.20454674175502, 45.99985267617274], // Bottom right
      [-96.2145001049546, 45.99985267617274],  // Bottom left
      [-96.2145001049546, 46.0068861185098]   // Close the polygon
    ],
    weedData: [
      {
        'type': 'Feature',
        'properties': {
          'weedCount': 120,
          'intensity': 0.8
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-96.21000, 46.0040]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'weedCount': 85,
          'intensity': 0.7
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-96.20800, 46.0045]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'weedCount': 210,
          'intensity': 0.9
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-96.20900, 46.0035]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'weedCount': 45,
          'intensity': 0.5
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-96.21100, 46.0050]
        }
      }
    ]
  }
};

interface WeedPressureMapProps {
  selectedFarm: string;
}

export const WeedPressureMap: React.FC<WeedPressureMapProps> = ({ selectedFarm = 'farm01' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [currentFarm, setCurrentFarm] = useState<string>(selectedFarm);

  // Initialize or update map when selectedFarm changes
  useEffect(() => {
    if (selectedFarm !== currentFarm) {
      setCurrentFarm(selectedFarm);
      
      // If map already exists, fly to new location instead of recreating
      if (map.current && mapLoaded) {
        const farmData = farmLocations[selectedFarm as keyof typeof farmLocations];
        map.current.flyTo({
          center: farmData.center,
          zoom: farmData.zoom,
          essential: true // this animation is considered essential for the seamless UX
        });
        
        // Update weed data sources
        updateWeedData(selectedFarm);
      }
    }
  }, [selectedFarm, currentFarm, mapLoaded]);

  // Initialize map on first render
  useEffect(() => {
    // Skip if container is not ready or map already exists
    if (!mapContainer.current || map.current) return;
    
    console.log('Initializing map with farm:', currentFarm);

    const farmData = farmLocations[currentFarm as keyof typeof farmLocations];
    
    try {
      // Initialize map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: farmData.center,
        zoom: farmData.zoom,
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
        console.log('Weed pressure map loaded successfully');
        setMapLoaded(true);
        
        if (map.current) {
          // Add weed pressure heatmap visualization
          addWeedPressureLayer(currentFarm);
        }
      });
    } catch (err) {
      console.error('Error initializing weed pressure map:', err);
      setMapError(`Map initialization error: ${err instanceof Error ? err.message : String(err)}`);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Function to update weed data when farm changes
  const updateWeedData = (farmId: string) => {
    if (!map.current || !mapLoaded) return;
    
    const farmData = farmLocations[farmId as keyof typeof farmLocations];
    
    // Update weed pressure data
    try {
      if (map.current.getSource('weed-pressure')) {
        (map.current.getSource('weed-pressure') as mapboxgl.GeoJSONSource).setData({
          'type': 'FeatureCollection',
          'features': farmData.weedData
        });
      }
      
      // Update field boundary
      if (map.current.getSource('field-outline')) {
        (map.current.getSource('field-outline') as mapboxgl.GeoJSONSource).setData({
          'type': 'Feature',
          'properties': {
            'name': farmId,
            'description': farmData.name
          },
          'geometry': {
            'type': 'Polygon',
            'coordinates': [farmData.boundary]
          }
        });
      }
      
      // Update field label text
      if (map.current.getLayer('field-label')) {
        map.current.setLayoutProperty(
          'field-label',
          'text-field',
          farmId === 'farm06' ? 'farm06' : farmData.name
        );
      }
    } catch (err) {
      console.error('Error updating weed data:', err);
      setMapError(`Data update error: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  // Function to add weed pressure visualization
  const addWeedPressureLayer = (farmId: string) => {
    if (!map.current || !mapLoaded) return;
    
    const farmData = farmLocations[farmId as keyof typeof farmLocations];

    // Add source for weed pressure data
    map.current.addSource('weed-pressure', {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': farmData.weedData
      }
    });

    // Add field outline
    map.current.addSource('field-outline', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'properties': {
          'name': farmId,
          'description': farmData[farmId as keyof typeof farmLocations].name
        },
        'geometry': {
          'type': 'Polygon',
          'coordinates': [farmData.boundary]
        }
      }
    });

    // Add a fill layer for the highlighted area
    map.current.addLayer({
      'id': 'field-highlight-fill',
      'type': 'fill',
      'source': 'field-outline',
      'layout': {},
      'paint': {
        'fill-color': '#00FF00', // Green highlight like in MinimalMap
        'fill-opacity': 0.3
      }
    });

    // Add field outline layer
    map.current.addLayer({
      'id': 'field-boundary',
      'type': 'line',
      'source': 'field-outline',
      'layout': {},
      'paint': {
        'line-color': '#00FF00',
        'line-width': 2
      }
    });
    
    // Add a text label for the field in the center
    map.current.addLayer({
      'id': 'field-label',
      'type': 'symbol',
      'source': 'field-outline',
      'layout': {
        'text-field': farmId === 'farm06' ? 'farm06' : farmData[farmId as keyof typeof farmLocations].name,
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

    // Add heat map layer
    map.current.addLayer({
      'id': 'weed-pressure-heat',
      'type': 'heatmap',
      'source': 'weed-pressure',
      'paint': {
        // Increase the heatmap weight based on weed count
        'heatmap-weight': [
          'interpolate',
          ['linear'],
          ['get', 'weedCount'],
          0, 0,
          300, 1
        ],
        // Increase the heatmap color weight by zoom level
        'heatmap-intensity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          13, 1,
          17, 3
        ],
        // Color ramp for heatmap from green to yellow to red
        'heatmap-color': [
          'interpolate',
          ['linear'],
          ['heatmap-density'],
          0, 'rgba(0, 255, 0, 0)',
          0.2, 'rgba(0, 255, 0, 0.5)',
          0.4, 'rgba(255, 255, 0, 0.5)',
          0.6, 'rgba(255, 128, 0, 0.7)',
          0.8, 'rgba(255, 0, 0, 0.8)',
          1, 'rgba(255, 0, 0, 1)'
        ],
        // Adjust the heatmap radius by zoom level
        'heatmap-radius': [
          'interpolate',
          ['linear'],
          ['zoom'],
          14, 10,
          17, 25
        ],
        // Transition from heatmap to circle layer by zoom level
        'heatmap-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          14, 1,
          18, 0.5
        ]
      }
    });

    // Add circle layer for detailed view at high zoom
    map.current.addLayer({
      'id': 'weed-pressure-point',
      'type': 'circle',
      'source': 'weed-pressure',
      'minzoom': 16,
      'paint': {
        // Size circle by weed count
        'circle-radius': [
          'interpolate',
          ['linear'],
          ['get', 'weedCount'],
          0, 3,
          300, 15
        ],
        // Color circle by weed count
        'circle-color': [
          'interpolate',
          ['linear'],
          ['get', 'weedCount'],
          0, '#00ff00',
          30, '#ffff00',
          80, '#ff8000',
          300, '#ff0000'
        ],
        'circle-stroke-color': 'white',
        'circle-stroke-width': 1,
        'circle-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          16, 0,
          18, 0.9
        ]
      }
    });

    // Add labels for high weed counts
    map.current.addLayer({
      'id': 'weed-count-labels',
      'type': 'symbol',
      'source': 'weed-pressure',
      'minzoom': 17,
      'layout': {
        'text-field': ['get', 'weedCount'],
        'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
        'text-size': 12,
        'text-allow-overlap': false
      },
      'paint': {
        'text-color': '#ffffff',
        'text-halo-color': '#000000',
        'text-halo-width': 1
      }
    });
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