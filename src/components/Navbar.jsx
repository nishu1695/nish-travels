import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">
          Nish's Travels
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/map">Map</Link>
      </div>

    </nav>
  );
}