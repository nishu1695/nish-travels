import { useParams } from "react-router-dom";
import { trips } from "../data/trips";

export default function TripDetail() {
  const { id } = useParams();

  const trip = trips.find((t) => t.id === id);

  if (!trip) {
    return <div className="section">Trip not found.</div>;
  }

  return (
    <div className="section">

      <img
        src={trip.cover}
        alt={trip.name}
        className="trip-image"
      />

      <h1 style={{ marginTop: "20px" }}>
        {trip.name}
      </h1>

      <p>{trip.story}</p>

      <h2 style={{ marginTop: "30px" }}>
        Highlights
      </h2>

      <ul>
        {trip.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    </div>
  );
}