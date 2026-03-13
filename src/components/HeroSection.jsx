import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="container">
        <div className="hero-content page-fade-in">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Africa's AI Automation Agency
          </div>

          <h1>
            Automate Your Business.
            <br />
            <span className="accent">Grow With AI.</span>
          </h1>

          <p className="hero-description">
            Elfrak Tech builds intelligent chatbots, WhatsApp assistants, and
            automation systems that help African businesses respond faster,
            capture more leads, and operate smarter — 24/7.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Start a Project →
            </Link>
            <Link to="/services" className="btn btn-outline">
              View Services
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">
                48<span>hr</span>
              </div>
              <div className="hero-stat-label">Average Delivery</div>
            </div>
            <div>
              <div className="hero-stat-num">
                5<span>+</span>
              </div>
              <div className="hero-stat-label">AI Services</div>
            </div>
            <div>
              <div className="hero-stat-num">🌍</div>
              <div className="hero-stat-label">Africa-First</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
