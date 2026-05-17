import { useParams } from "react-router-dom";
import { trips } from "../data/trips";

export default function TripDetail() {
  const { id } = useParams();

  const trip = trips.find((t) => t.id === id);

  if (!trip) return <h2 className="section">Trip not found</h2>;

  return (
    <div className="section">
      <h1>{trip.name}</h1>

      <p><b>Location:</b> {trip.location}</p>
      <p><b>Duration:</b> {trip.days} days</p>

      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Trip Story</h3>
        <p>{trip.story}</p>
      </div>
    </div>
  );
}