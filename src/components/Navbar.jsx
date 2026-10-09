import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        StayVista
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/hotels" onClick={() => setMenuOpen(false)}>
          Hotels
        </NavLink>

        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>

        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>

      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

    </nav>
  );
}

export default Navbar;