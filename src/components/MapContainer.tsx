import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapContainerProps {
  mapboxToken: string;
  type: 'hunger' | 'meals';
  title: string;
}

const MapContainer: React.FC<MapContainerProps> = ({ mapboxToken, type, title }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe' as any,
      zoom: 1.5,
      center: [30, 15],
      pitch: 0,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('style.load', () => {
      if (!map.current) return;

      // Add sample data points based on type
      const data = type === 'hunger' ? getHungerData() : getMealsData();
      
      map.current.addSource('data-points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: data.map(point => ({
            type: 'Feature',
            properties: {
              value: point.value,
              name: point.name
            },
            geometry: {
              type: 'Point',
              coordinates: point.coordinates
            }
          }))
        }
      });

      // Add heatmap layer
      const color = type === 'hunger' ? '#dc2626' : '#16a34a';
      
      map.current.addLayer({
        id: 'heatmap',
        type: 'heatmap',
        source: 'data-points',
        paint: {
          'heatmap-weight': ['get', 'value'],
          'heatmap-intensity': 1,
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(0,0,0,0)',
            0.2, color + '33',
            0.4, color + '66',
            0.6, color + '99',
            0.8, color + 'CC',
            1, color
          ],
          'heatmap-radius': 50,
          'heatmap-opacity': 0.8
        }
      });

      // Add markers for specific points
      data.forEach(point => {
        new mapboxgl.Marker({ color })
          .setLngLat(point.coordinates)
          .setPopup(
            new mapboxgl.Popup().setHTML(
              `<h3>${point.name}</h3><p>${type === 'hunger' ? 'Hungry:' : 'Meals served:'} ${point.value.toLocaleString()}</p>`
            )
          )
          .addTo(map.current!);
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, type]);

  const getHungerData = () => [
    { name: 'Yemen', coordinates: [48.516388, 15.552727] as [number, number], value: 17400000 },
    { name: 'Afghanistan', coordinates: [67.709953, 33.93911] as [number, number], value: 18900000 },
    { name: 'Somalia', coordinates: [46.199616, 5.152149] as [number, number], value: 4100000 },
    { name: 'Syria', coordinates: [38.996815, 34.802075] as [number, number], value: 12400000 },
    { name: 'Madagascar', coordinates: [46.869107, -18.766947] as [number, number], value: 1140000 },
  ];

  const getMealsData = () => [
    { name: 'Brazil', coordinates: [-47.882166, -15.794229] as [number, number], value: 2500000 },
    { name: 'India', coordinates: [78.96288, 20.593684] as [number, number], value: 8900000 },
    { name: 'Nigeria', coordinates: [8.675277, 9.081999] as [number, number], value: 3200000 },
    { name: 'Kenya', coordinates: [37.906193, -0.023559] as [number, number], value: 1800000 },
    { name: 'Philippines', coordinates: [121.774017, 12.879721] as [number, number], value: 2100000 },
  ];

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm rounded-lg p-3">
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export { MapContainer };