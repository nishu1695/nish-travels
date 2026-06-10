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

      {/* HERO */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "450px",
          borderRadius: "16px",
          overflow: "hidden",
          marginBottom: "30px"
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

        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: "30px",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            color: "white"
          }}
        >
          <h1 style={{ margin: 0 }}>
            {trip.title}
          </h1>

          <p style={{ marginTop: "8px" }}>
            {trip.country}
          </p>

          {trip.duration && (
            <p>
              ⏳ {trip.duration}
            </p>
          )}
        </div>
      </div>

      {/* OVERVIEW */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h2>Overview</h2>

        <p>{trip.description}</p>

        {trip.tripType && (
          <p>
            <b>Trip Type:</b> {trip.tripType}
          </p>
        )}
      </div>

      {/* HIGHLIGHTS */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h2>Trip Highlights ✨</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px"
          }}
        >
          {(trip.highlights || []).map((item, index) => (
            <span
              key={index}
              style={{
                background: "#ff8c42",
                color: "white",
                padding: "8px 12px",
                borderRadius: "20px",
                fontSize: "14px"
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* STORY */}
      {trip.story && (
        <div className="card" style={{ marginBottom: "20px" }}>
          <h2>Travel Story 📖</h2>

          <p
            style={{
              whiteSpace: "pre-line",
              lineHeight: "1.8"
            }}
          >
            {trip.story}
          </p>
        </div>
      )}

      {/* FAVORITE MOMENT */}
      {trip.favoriteMoment && (
        <div className="card" style={{ marginBottom: "20px" }}>
          <h2>Favorite Moment ⭐</h2>

          <p>{trip.favoriteMoment}</p>
        </div>
      )}

      {/* FUNNIEST MOMENT */}
      {trip.funniestMoment && (
        <div className="card" style={{ marginBottom: "20px" }}>
          <h2>Funniest Moment 😂</h2>

          <p>{trip.funniestMoment}</p>
        </div>
      )}

      {/* ITINERARY */}
      {trip.itinerary?.length > 0 && (
        <div
          className="card"
          style={{ marginBottom: "20px" }}
        >
          <h2>Day-by-Day Itinerary 🗺️</h2>

          {trip.itinerary.map((day) => (
            <div
              key={day.day}
              style={{
                marginBottom: "25px",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <h3>
                Day {day.day}: {day.title}
              </h3>

              <ul>
                {day.details.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "8px"
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* PHOTO GALLERY */}
      {trip.gallery?.length > 0 && (
        <div className="card">
          <h2>Photo Gallery 📸</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "15px"
            }}
          >
            {trip.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${trip.title}-${index}`}
                loading="lazy"
                onClick={() => window.open(img, "_blank")}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "0.2s"
                }}
              />
            ))}
          </div>

          <p
            style={{
              marginTop: "15px",
              opacity: 0.7
            }}
          >
            Click any image to view full size.
          </p>
        </div>
      )}

    </div>
  );
}