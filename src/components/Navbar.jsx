import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">🎟️ TicketApp</h1>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          <li><Link to="/signup" onClick={closeMenu}>Get Started</Link></li>
        </ul>
      </div>
    </nav>
  );
}
