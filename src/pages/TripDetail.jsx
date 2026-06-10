import { useParams } from "react-router-dom";
import { trips } from "../data/trips";

export default function TripDetail() {
  const { id } = useParams();

  const trip = trips.find((t) => t.id === id);

  if (!trip) {
    return (
      <div className="section">
        <h2>Trip not found</h2>
      </div>
    );
  }

  return (
    <div className="section">

      {/* HERO SECTION */}
      <div
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "12px",
          overflow: "hidden",
          marginBottom: "20px",
          position: "relative"
        }}
      >
        <img
          src={trip.image}
          alt={trip.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        {/* overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: "20px",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
            color: "white"
          }}
        >
          <h1 style={{ margin: 0 }}>{trip.title}</h1>
          <p style={{ margin: 0, opacity: 0.9 }}>
            {trip.country}
          </p>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h2>Overview</h2>
        <p>{trip.description}</p>
      </div>

      {/* HIGHLIGHTS */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h2>Highlights ✨</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px"
          }}
        >
          {trip.highlights.map((item, index) => (
            <span
              key={index}
              style={{
                background: "#ff8c42",
                color: "white",
                padding: "6px 10px",
                borderRadius: "20px",
                fontSize: "13px"
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* STORY / FUN SECTION */}
      <div className="card">
        <h2>Travel Story 📖</h2>

        <p>
          This trip to <b>{trip.title}</b> was a mix of adventure,
          exploration, and unforgettable moments.
        </p>

        <p>
          Every destination had something unique — from scenic views
          to unexpected funny incidents that made the journey memorable.
        </p>

        <p>
          More detailed day-by-day itinerary and photos will be added
          soon in the next upgrade.
        </p>
      </div>

    </div>
  );
}
{/* GALLERY SECTION */}
{trip.gallery && (
  <div className="card" style={{ marginTop: "20px" }}>
    <h2>Photo Gallery 📸</h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "10px"
      }}
    >
      {trip.gallery.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`gallery-${index}`}
          loading="lazy"
          style={{
            width: "100%",
            height: "140px",
            objectFit: "cover",
            borderRadius: "10px",
            transition: "transform 0.2s ease"
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        />
      ))}
    </div>
  </div>
)}