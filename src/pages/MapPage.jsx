import TravelMap from "../components/TravelMap";

export default function MapPage() {
  return (
    <div className="section">
      <h1>Visited Places 🌍</h1>

      <p style={{ marginBottom: "20px" }}>
        Explore all destinations I've visited around the world.
      </p>

      <TravelMap />
    </div>
  );
}