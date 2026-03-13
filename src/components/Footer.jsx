import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="ElfrakAI Logo" />
              <span className="footer-logo-text">
                Elfrak<span>Tech</span>
              </span>
            </div>
            <p>
              Helping African businesses modernize with intelligent AI
              automation, chatbots, and digital systems.
            </p>
            <div className="footer-social">
              <a
                href="https://wa.me/23272263135"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="WhatsApp"
              >
                💬
              </a>
              <a
                href="https://www.instagram.com/elfrak.tech?utm_source=qr&igsh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="Instagram"
              >
                📷
              </a>
              <a
                href="https://tiktok.com/@elfrak.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="TikTok"
              >
                🎵
              </a>
              <a
                href="mailto:elfraktech@gmail.com"
                className="social-btn"
                title="Email"
              >
                ✉
              </a>
            </div>
          </div>

          <div>
            <p className="footer-heading">Company</p>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-heading">Services</p>
            <ul className="footer-links">
              <li>
                <Link to="/services">AI Websites</Link>
              </li>
              <li>
                <Link to="/services">WhatsApp AI Assisstant</Link>
              </li>
              <li>
                <Link to="/services">AI Logo & Branding</Link>
              </li>

              <li>
                <Link to="/services">AI Chatbots</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-heading">Contact</p>
            <ul className="footer-links">
              <li>📍 Freetown, Sierra Leone</li>
              <li>
                <a href="www.elfraktech.com">elfraktech.com</a>
              </li>
              <li>
                <a
                  href="https://wa.me/23272263135"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>Mon – Sat: 8am – 8pm</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Elfrak Tech. All rights reserved.</p>
          <p>Built with AI. Powered by purpose.</p>
        </div>
      </div>
    </footer>
  );
}
