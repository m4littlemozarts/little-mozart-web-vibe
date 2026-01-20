import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import conductorBear from '@/assets/conductor-bear.png';

const StudioMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Steinway Piano Gallery coordinates
    const position: L.LatLngExpression = [39.492507909608555, -119.79086936470239];

    // Create map instance with a lower zoom level (zoomed out)
    const map = L.map(mapRef.current).setView(position, 13); // Changed zoom from 15 to 13
    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Custom bear icon
    const bearIcon = L.icon({
      iconUrl: conductorBear,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -50],
    });

    // Add marker with popup
    L.marker(position, { icon: bearIcon })
      .addTo(map)
      .bindPopup('<strong>Steinway Piano Gallery</strong><br />500 E Moana Ln, Reno, NV 89502');

    // Disable scroll wheel zoom
    map.scrollWheelZoom.disable();

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return <div ref={mapRef} style={{ height: '250px', width: '100%' }} className="rounded-lg" />;
};

export default StudioMap;