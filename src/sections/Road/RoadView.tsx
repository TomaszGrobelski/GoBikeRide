'use client';

import { useEffect, useRef, useState } from 'react';

const polylineStyle = {
  color: 'red',
  weight: 5
};

interface UserLocation {
  latitude: number;
  longitude: number;
}

const RoadView = () => {
  const [userLocation, setUserLocation] = useState<UserLocation>({
    latitude: 0,
    longitude: 0
  });
  const [error, setError] = useState<string | null>(null);
  const [map, setMap] = useState<L.Map | null>(null);
  const [polyline, setPolyline] = useState<L.Polyline | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const watchUserLocation = () => {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          setError(error.message);
        }
      );
      return () => navigator.geolocation.clearWatch(watchId);
    };

    watchUserLocation();
  }, []);

  useEffect(() => {
    const initializeMap = async () => {
      if (typeof window !== 'undefined' && mapContainer.current) {
        const L = await import('leaflet');

        if (map) {
          map.remove();
        }

        const leafletMap = L.map(mapContainer.current).setView(
          [userLocation.latitude, userLocation.longitude],
          13
        );
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(leafletMap);

        const newPolyline = L.polyline(
          [
            [userLocation.latitude, userLocation.longitude],
            [userLocation.latitude, userLocation.longitude]
          ],
          polylineStyle
        ).addTo(leafletMap);

        setMap(leafletMap);
        setPolyline(newPolyline);
      }
    };

    initializeMap();

    return () => {
      if (map) map.remove();
      if (polyline) polyline.remove();
    };
  }, [polyline, map]);

  return (
    <div>
      <h1>Mapa Twojej lokalizacji</h1>
      {error && <p>Błąd: {error}</p>}
      {/* <div
        ref={mapContainer}
        id='map'
        style={{ width: '100%', height: '500px' }}
      ></div> */}
    </div>
  );
};

export default RoadView;
