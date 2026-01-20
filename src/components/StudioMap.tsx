import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import conductorBear from '@/assets/conductor-bear.png';

// Custom bear icon
const bearIcon = new L.Icon({
  iconUrl: conductorBear,
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

const StudioMap = () => {
  // Steinway Piano Gallery coordinates
  const position: [number, number] = [39.4897, -119.7657];

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '250px', width: '100%' }}
      className="rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={bearIcon}>
        <Popup>
          <strong>Steinway Piano Gallery</strong>
          <br />
          500 E Moana Ln, Reno, NV 89502
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default StudioMap;
