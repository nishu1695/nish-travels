import TravelMap from "../components/TravelMap";

export default function MapPage() {
  return (
    <div className="section">

      {/* HEADER */}
      <h1>Visited Places 🌍</h1>

      <p style={{ marginBottom: "20px", opacity: 0.8 }}>
        A visual map of all the places I’ve explored — cities, national parks,
        islands, and adventures around the world.
      </p>

      {/* LEGEND */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>Map Legend</h3>

        <div style={{ display: "grid", gap: "6px" }}>
          <p>🟢 National Parks</p>
          <p>🔵 Cities</p>
          <p>🟠 State Parks</p>
          <p>🟣 Theme Parks</p>
          <p>🔴 Countries / Islands</p>
          <p>🟢 Waterfalls</p>
        </div>
      </div>

      {/* MAP */}
      <TravelMap />

      {/* STATS (OPTIONAL BUT NICE) */}
      <div className="section" style={{ marginTop: "30px" }}>
        <h2>Travel Snapshot ✈️</h2>

        <div className="grid">

          <div className="card">
            <h3>USA Focus</h3>
            <p>Multiple national parks & road trips across the country</p>
          </div>

          <div className="card">
            <h3>International Travel</h3>
            <p>Asia, Europe, Middle East, and Caribbean destinations</p>
          </div>

          <div className="card">
            <h3>Adventure Style</h3>
            <p>Road trips, nature, cities, and theme parks</p>
          </div>

        </div>
      </div>

    </div>
  );
}