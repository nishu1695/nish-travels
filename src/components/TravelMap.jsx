import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { visitedPlaces } from "../data/visitedPlaces";

export default function TravelMap() {
  return (
    <MapContainer
      center={[25, 0]}
      zoom={2}
      style={{
        height: "650px",
        width: "100%",
        borderRadius: "12px",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {visitedPlaces.map((place) => (
        <Marker
          key={place.name}
          position={[place.lat, place.lng]}
        >
          <Popup>
            <h3>{place.name}</h3>

            <p>{place.country}</p>

            <small>{place.category}</small>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}