import { visitedPlaces } from "../data/visitedPlaces";

export default function TravelStats() {
  const totalPlaces = visitedPlaces.length;

  const countries = new Set(
    visitedPlaces.map((p) => p.country)
  ).size;

  const parks = visitedPlaces.filter(
    (p) => p.category.includes("Park")
  ).length;

  return (
    <div className="grid">
      <div className="card">
        <h2>{totalPlaces}</h2>
        <p>Places Visited</p>
      </div>

      <div className="card">
        <h2>{countries}</h2>
        <p>Countries / Territories</p>
      </div>

      <div className="card">
        <h2>{parks}</h2>
        <p>Parks Visited</p>
      </div>
    </div>
  );
}