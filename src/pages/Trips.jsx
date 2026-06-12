import { trips } from "../data/trips";
import { Link } from "react-router-dom";

export default function Trips() {
  if (!Array.isArray(trips)) {
    return (
      <div className="section">
        <h1>My Trips ✈️</h1>
        <p>Trip data unavailable.</p>
      </div>
    );
  }

  return (
    <div className="section">
      <h1>My Trips ✈️</h1>

      <div className="grid">
        {trips.map((trip) => {
          if (!trip?.id) return null;

          return (
            <Link
              key={trip.id}
              to={`/trip/${trip.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                className="card"
                style={{
                  overflow: "hidden",
                }}
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    display: "block",
                  }}
                />

                <h3 style={{ marginTop: "10px" }}>
                  {trip.title}
                </h3>

                <p style={{ opacity: 0.8 }}>
                  {trip.description}
                </p>

                <small>{trip.country}</small>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}