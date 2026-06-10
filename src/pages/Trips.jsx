import { Link } from "react-router-dom";
import { trips } from "../data/trips";

export default function Trips() {
  return (
    <div className="section">
      <h1>My Travel Adventures ✈️</h1>

      <div className="grid">
        {trips.map((trip) => (
          <Link key={trip.id} to={`/trip/${trip.id}`}>
            <div className="card">

              <img
                src={trip.cover}
                alt={trip.name}
                className="trip-image"
              />

              <div style={{ padding: "15px" }}>
                <h3>{trip.name}</h3>
                <p>{trip.location}</p>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}