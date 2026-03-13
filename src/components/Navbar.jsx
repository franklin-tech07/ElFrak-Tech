import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logo} alt="ElfrakAI Logo" />
          <span className="nav-logo-text">
            Elfrak<span>Tech</span>
          </span>
        </Link>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={closeMenu}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            <Link
              to="/contact"
              className="btn btn-primary nav-cta"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
