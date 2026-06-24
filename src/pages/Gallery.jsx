import { trips } from "../data/trips";

export default function Gallery() {
  const tripsWithPhotos = trips.filter(
    (trip) => trip.gallery && trip.gallery.length > 0
  );

  return (
    <div className="section">
      <h1>Photo Gallery 📸</h1>

      <p
        style={{
          opacity: 0.8,
          marginBottom: "30px",
        }}
      >
        A collection of photos from my travels around the world.
      </p>

      {tripsWithPhotos.map((trip) => (
        <div
          key={trip.id}
          className="card"
          style={{
            marginBottom: "30px",
          }}
        >
          <h2>{trip.title}</h2>

          <p
            style={{
              opacity: 0.8,
              marginBottom: "20px",
            }}
          >
            {trip.country}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "15px",
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
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}