import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>🌍 Nish's Travels</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/map">Map</Link>
      </div>
    </nav>
  );
}