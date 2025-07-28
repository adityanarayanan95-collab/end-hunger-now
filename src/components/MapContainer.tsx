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
    { name: 'South Sudan', coordinates: [31.3069788, 6.876991900000001] as [number, number], value: 7740000 },
    { name: 'Haiti', coordinates: [-72.285215, 18.971187] as [number, number], value: 4500000 },
    { name: 'Chad', coordinates: [18.732207, 15.454166] as [number, number], value: 5400000 },
    { name: 'Central African Republic', coordinates: [20.939444, 6.611110999999999] as [number, number], value: 2800000 },
    { name: 'Democratic Republic of Congo', coordinates: [21.758664, -4.038333] as [number, number], value: 27300000 },
    { name: 'Ethiopia', coordinates: [40.489673, 9.145000000000001] as [number, number], value: 20400000 },
    { name: 'Sudan', coordinates: [30.217636, 12.862807] as [number, number], value: 11700000 },
    { name: 'Nigeria', coordinates: [8.675277, 9.081999] as [number, number], value: 25000000 },
    { name: 'Pakistan', coordinates: [69.34511599999999, 30.3753] as [number, number], value: 43000000 },
    { name: 'Bangladesh', coordinates: [90.356331, 23.684994] as [number, number], value: 21000000 },
  ];

  const getMealsData = () => [
    { name: 'Brazil', coordinates: [-47.882166, -15.794229] as [number, number], value: 15400000 },
    { name: 'India', coordinates: [78.96288, 20.593684] as [number, number], value: 28900000 },
    { name: 'Nigeria', coordinates: [8.675277, 9.081999] as [number, number], value: 8200000 },
    { name: 'Kenya', coordinates: [37.906193, -0.023559] as [number, number], value: 4800000 },
    { name: 'Philippines', coordinates: [121.774017, 12.879721] as [number, number], value: 6100000 },
    { name: 'Indonesia', coordinates: [113.921327, -0.789275] as [number, number], value: 12500000 },
    { name: 'Mexico', coordinates: [-102.552784, 23.634501] as [number, number], value: 9200000 },
    { name: 'United States', coordinates: [-95.712891, 37.09024] as [number, number], value: 18700000 },
    { name: 'Turkey', coordinates: [35.243322, 38.963745] as [number, number], value: 7300000 },
    { name: 'Ethiopia', coordinates: [40.489673, 9.145000000000001] as [number, number], value: 5600000 },
    { name: 'Egypt', coordinates: [30.802498, 26.820553] as [number, number], value: 4200000 },
    { name: 'South Africa', coordinates: [22.937506, -30.559482] as [number, number], value: 3800000 },
    { name: 'Thailand', coordinates: [100.992541, 15.870032] as [number, number], value: 2900000 },
    { name: 'Bangladesh', coordinates: [90.356331, 23.684994] as [number, number], value: 6700000 },
    { name: 'Pakistan', coordinates: [69.34511599999999, 30.3753] as [number, number], value: 5100000 },
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