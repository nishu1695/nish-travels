import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <div className="hero">
        <h1>🌍 Nish's Travels</h1>

        <p>
          Exploring National Parks, Cities, Beaches, Road Trips,
          and Adventures Around The World.
        </p>

        <div style={{ marginTop: "20px" }}>
          <Link to="/trips" className="hero-btn">
            Explore Trips →
          </Link>
        </div>
      </div>

      {/* STATS */}
      <div className="section">
        <h2>Travel Stats ✈️</h2>

        <div className="grid">

          <div className="card">
            <h3>🌎 8</h3>
            <p>Countries Visited</p>
          </div>

          <div className="card">
            <h3>📍 20 / 50</h3>
            <p>US States Explored</p>
          </div>

          <div className="card">
            <h3>🏞 13 / 63</h3>
            <p>National Parks Visited</p>
          </div>

          <div className="card">
            <h3>📸 Thousands</h3>
            <p>Photos Shared</p>
          </div>

          <div className="card">
            <h3>✈ 62,623</h3>
            <p>Flight Miles Flown</p>
          </div>

        </div>
      </div>

      {/* FEATURED TRIPS */}
      <div className="section">
        <h2>Featured Adventures 🗺️</h2>

        <div className="grid">

          <div className="card">
            <h3>Utah Mighty 5</h3>
            <p>
              Zion • Bryce • Capitol Reef • Canyonlands • Arches
            </p>
          </div>

          <div className="card">
            <h3>Portugal</h3>
            <p>
              Porto • Douro Valley • Algarve • Lisbon • Sintra
            </p>
          </div>

          <div className="card">
            <h3>Acadia National Park</h3>
            <p>
              Cadillac Mountain • Jordan Pond • Bar Harbor
            </p>
          </div>

        </div>
      </div>

      {/* RECENT HIGHLIGHTS */}
      <div className="section">
        <h2>Recent Highlights ⭐</h2>

        <div className="grid">

          <div className="card">
            🌅 Mesa Arch sunrise in Canyonlands
          </div>

          <div className="card">
            🏰 Pena Palace in Sintra, Portugal
          </div>

          <div className="card">
            🥾 Angels Landing hike in Zion
          </div>

          <div className="card">
            🌊 Cadillac Mountain sunrise in Acadia
          </div>

        </div>
      </div>

    </div>
  );
}