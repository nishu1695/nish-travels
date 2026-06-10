import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { visitedPlaces } from "../data/visitedPlaces";
import { useNavigate } from "react-router-dom";

export default function TravelMap() {
  const navigate = useNavigate();

  return (
    <MapContainer
      center={[25, 0]}
      zoom={2}
      style={{ height: "650px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {visitedPlaces.map((place) => (
        <Marker
          key={place.name}
          position={[place.lat, place.lng]}
          icon={L.divIcon({
            className: "custom-icon",
            html: `
              <div style="
                background:${place.typeColor};
                width:12px;
                height:12px;
                border-radius:50%;
                border:2px solid white;
              "></div>
            `
          })}
        >
          <Popup>
            <div style={{ minWidth: "180px" }}>
              <h3>{place.name}</h3>
              <p>{place.country}</p>
              <small>{place.category}</small>

              <button
                style={{
                  marginTop: "8px",
                  background: "#ff8c42",
                  border: "none",
                  padding: "6px 10px",
                  color: "white",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
                onClick={() => navigate(`/trip/${place.tripId}`)}
              >
                View Trip
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}