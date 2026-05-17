import { Link } from "react-router-dom";
import { trips } from "../data/trips";

export default function Trips() {
  return (
    <div className="section">
      <h1>My Trips ✈️</h1>

      <div className="grid">
        {trips.map((trip) => (
          <Link key={trip.id} to={`/trip/${trip.id}`}>
            <div className="card">
              <h3>{trip.name}</h3>
              <p>{trip.location}</p>
              <small>{trip.days} days</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}