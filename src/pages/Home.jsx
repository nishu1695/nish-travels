export default function Home() {
  return (
    <div>

      {/* HERO */}
      <div className="hero">
        <h1>Explore The World 🌍</h1>
        <p>
          Nish’s personal travel journal — itineraries, adventures,
          photos, and funny travel moments from around the world.
        </p>
      </div>

      {/* STATS */}
      <div className="section">
        <h2>Travel Stats</h2>

        <div className="grid">
          <div className="card">
            <h3>4 Trips</h3>
            <p>Completed journeys</p>
          </div>

          <div className="card">
            <h3>50+ Places</h3>
            <p>Cities explored</p>
          </div>

          <div className="card">
            <h3>1000+ Photos</h3>
            <p>Captured memories</p>
          </div>
        </div>
      </div>

      {/* FEATURED TRIPS */}
      <div className="section">
        <h2>Featured Trips</h2>

        <div className="grid">

          <div className="card">
            <h3>Portugal 2026</h3>
            <p>Lisbon • Porto • Sintra</p>
          </div>

          <div className="card">
            <h3>Utah Mighty 5</h3>
            <p>Zion • Bryce • Arches</p>
          </div>

          <div className="card">
            <h3>Las Vegas</h3>
            <p>The Strip • Nightlife</p>
          </div>

        </div>
      </div>

      {/* FUNNY MOMENTS */}
      <div className="section">
        <h2>Funny Moments 😂</h2>

        <div className="grid">
          <div className="card">
            Got lost inside a Vegas casino for 40 minutes.
          </div>

          <div className="card">
            Ordered “small snack” in Portugal… got a full seafood feast.
          </div>
        </div>
      </div>

    </div>
  );
}