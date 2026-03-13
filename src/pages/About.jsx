import { Link } from "react-router-dom";

const SKILLS = [
  "HTML / CSS",
  "Responsive Design",
  "JavaScript",
  "Canva Design",
  "AI Workflows",
  "n8n Automation",
  "Claude AI",
  "Vercel Hosting",
];

export default function About() {
  return (
    <div className="page-fade-in">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="section-label">Our Story</span>
          <h1>
            Built to Bring <span className="text-accent">AI to Africa</span>
          </h1>
          <p style={{ maxWidth: 560, marginTop: 16, fontSize: "1.1rem" }}>
            Elfrak Tech was born from a simple belief: African businesses
            deserve the same cutting-edge AI tools that power companies
            worldwide — at prices that make sense.
          </p>
        </div>
      </section>

      {/* Founder + Mission */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            {/* Founder Card */}
            <div className="about-visual">
              <div className="about-card">
                <div className="founder-avatar">F</div>
                <div className="founder-name">The Founder</div>
                <div className="founder-title">
                  CEO & AI Automation Engineer
                </div>
                <p style={{ marginTop: 16, fontSize: "0.9rem" }}>
                  An 18-year-old developer who builds AI systems to help local
                  businesses compete in the digital economy.
                </p>
                <div className="skills-grid">
                  {SKILLS.map((s, i) => (
                    <span className="skill-tag" key={i}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div>
              <span className="section-label">Mission</span>
              <h2 className="section-title">
                Work Smarter with <span className="text-accent">AI</span>
              </h2>
              <p style={{ marginBottom: 20 }}>
                Our mission is to help African businesses work smarter using AI
                automation — improving customer service, boosting sales, and
                establishing a powerful online presence.
              </p>
              <p>
                We start in Sierra Leone and Botswana, with plans to expand
                across West and Southern Africa. Every system we build is
                mobile-first, WhatsApp-integrated, and built for the realities
                of doing business in Africa.
              </p>

              <div className="highlight-box" style={{ marginTop: 28 }}>
                <p>
                  💡 Most local agencies don't yet offer AI automation — giving
                  Elfrak Tech a strong first-mover advantage in these markets.
                </p>
              </div>

              <div style={{ marginTop: 32 }}>
                <span className="section-label">Vision</span>
                <h3 style={{ color: "var(--white)", marginTop: 8 }}>
                  Africa's leading AI automation agency by 2028.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="section"
        style={{ background: "rgba(255,255,255,0.01)" }}
      >
        <div className="container">
          <span className="section-label">Core Values</span>
          <h2 className="section-title">
            What Drives <span className="text-accent">Us</span>
          </h2>
          <div className="values-grid" style={{ marginTop: 40 }}>
            {[
              {
                title: "Accessibility",
                desc: "AI should be affordable for every African business, not just multinationals.",
              },
              {
                title: "Speed",
                desc: "We deliver working systems in days, not weeks. Time is money.",
              },
              {
                title: "Impact",
                desc: "Every system we deploy frees up hours of manual work and increases business revenue.",
              },
              {
                title: "Transparency",
                desc: "We explain what we build, how it works, and what results to expect.",
              },
            ].map((v, i) => (
              <div className="value-item" key={i}>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth roadmap */}
      <section className="section">
        <div className="container">
          <span className="section-label">Roadmap</span>
          <h2 className="section-title">
            Our Growth <span className="text-accent">Plan</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
              marginTop: 40,
            }}
          >
            {[
              {
                stage: "Stage 1",
                period: "Early 2026",
                label: "Launch in Sierra Leone",
                desc: "First 4–6 clients, build portfolio, establish systems.",
              },
              {
                stage: "Stage 2",
                period: "Late 2026",
                label: "Scale & Expand",
                desc: "Reach 10–15 clients, expand to Botswana market.",
              },
              {
                stage: "Stage 3",
                period: "2027",
                label: "Multi-Market",
                desc: "Ghana & Nigeria entry. 25+ active clients.",
              },
              {
                stage: "Stage 4",
                period: "2028",
                label: "Team & SaaS",
                desc: "Hire freelancers, develop AI SaaS products.",
              },
            ].map((r, i) => (
              <div
                className="service-card"
                key={i}
                style={{ padding: "28px 24px" }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 6,
                  }}
                >
                  {r.stage} · {r.period}
                </div>
                <h3 style={{ fontSize: "1rem", marginBottom: 8 }}>{r.label}</h3>
                <p style={{ fontSize: "0.85rem" }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section"
        style={{ background: "rgba(255,255,255,0.01)" }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2>
            Want to Work <span className="text-accent">With Us?</span>
          </h2>
          <p
            style={{
              marginTop: 12,
              marginBottom: 32,
              color: "var(--gray-400)",
            }}
          >
            Join the growing list of African businesses powered by Elfrak Tech.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get In Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
