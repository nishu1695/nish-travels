import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Nish’s Travels</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/map">Map</Link>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {open && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/trips" onClick={() => setOpen(false)}>Trips</Link>
          <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link to="/map" onClick={() => setOpen(false)}>Map</Link>
        </div>
      )}
    </nav>
  );
}