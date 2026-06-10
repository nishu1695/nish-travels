import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
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
      {/* Base map layer */}
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Markers */}
      {visitedPlaces.map((place) => (
        <Marker
          key={place.name}
          position={[place.lat, place.lng]}
          icon={L.divIcon({
            className: "custom-icon",
            html: `
              <div style="
                background: ${place.typeColor};
                width: 12px;
                height: 12px;
                border-radius: 50%;
                border: 2px solid white;
                box-shadow: 0 0 6px rgba(0,0,0,0.3);
              "></div>
            `,
          })}
        >
          <Popup>
            <div style={{ minWidth: "180px" }}>
              <h3 style={{ marginBottom: "5px" }}>
                {place.name}
              </h3>

              <p style={{ margin: "0" }}>
                📍 {place.country}
              </p>

              <p style={{ margin: "5px 0", fontSize: "12px" }}>
                {place.category}
              </p>

              <div style={{ marginTop: "8px" }}>
                <button
                  style={{
                    background: "#ff8c42",
                    border: "none",
                    padding: "6px 10px",
                    color: "white",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                  onClick={() =>
                    alert(
                      `You clicked: ${place.name}`
                    )
                  }
                >
                  View Details
                </button>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}