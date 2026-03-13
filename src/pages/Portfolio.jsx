import { Link } from "react-router-dom";

const PROJECTS = [
  // {
  //   emoji: '✂️',
  //   tag: 'WhatsApp AI + Website',
  //   title: 'Glam Studio Freetown',
  //   desc: 'A beauty salon now books appointments and answers WhatsApp inquiries automatically, reducing manual replies by 90%.',
  //   tech: ['WhatsApp AI', 'AI Website', 'Lead Capture'],
  // },
  // {
  //   emoji: '🍽️',
  //   tag: 'AI Chatbot',
  //   title: 'Harvest Kitchen',
  //   desc: 'A restaurant chatbot that handles menu inquiries, table reservations, and takeaway orders around the clock.',
  //   tech: ['AI Chatbot', 'Order System', 'WhatsApp'],
  // },
  // {
  //   emoji: '🏥',
  //   tag: 'Automation System',
  //   title: 'PrimeCare Clinic',
  //   desc: 'Appointment booking, patient reminders, and follow-up messages — all automated. Staff focus on care, not admin.',
  //   tech: ['Booking Automation', 'Reminders', 'Lead Gen'],
  // },
  // {
  //   emoji: '🏋️',
  //   tag: 'Lead Generation',
  //   title: 'Iron Edge Gym',
  //   desc: 'An AI lead gen system that captures prospects from Instagram DMs and WhatsApp and follows up automatically.',
  //   tech: ['Lead Generation', 'WhatsApp AI', 'CRM'],
  // },
  // {
  //   emoji: '🏡',
  //   tag: 'AI Website',
  //   title: 'Keystone Properties',
  //   desc: 'A property listing site with an AI assistant that qualifies buyer and tenant leads instantly, 24/7.',
  //   tech: ['AI Website', 'Lead Capture', 'Chatbot'],
  // },
  // {
  //   emoji: '🛍️',
  //   tag: 'Business Automation',
  //   title: 'Zara Boutique',
  //   desc: 'Automated inventory inquiry responses, order follow-ups, and repeat customer re-engagement on WhatsApp.',
  //   tech: ['WhatsApp AI', 'Automation', 'Re-engagement'],
  // },
];

export default function Portfolio() {
  return (
    <div className="page-fade-in">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="section-label">Our Work</span>
          <h1>
            AI Systems We've <span className="text-accent">Built</span>
          </h1>
          <p style={{ maxWidth: 560, marginTop: 16, fontSize: "1.1rem" }}>
            Demo projects and case studies showcasing what Elfrak Tech builds
            for African businesses across different industries.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {PROJECTS.map((p, i) => (
              <div className="portfolio-card" key={i}>
                <div className="portfolio-thumb">{p.emoji}</div>
                <div className="portfolio-body">
                  <div className="portfolio-tag">{p.tag}</div>
                  <h3>{p.title}</h3>
                  <p style={{ marginTop: 8 }}>{p.desc}</p>
                  <div
                    className="skills-grid"
                    style={{ marginTop: 16, justifyContent: "flex-start" }}
                  >
                    {p.tech.map((t, j) => (
                      <span className="skill-tag" key={j}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section"
        style={{ background: "rgba(255,255,255,0.01)", textAlign: "center" }}
      >
        <div className="container">
          <h2>
            Want a System <span className="text-accent">Like These?</span>
          </h2>
          <p
            style={{
              marginTop: 12,
              marginBottom: 32,
              color: "var(--gray-400)",
            }}
          >
            We build custom AI systems for businesses of all sizes. Let's talk
            about yours.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Start Your Project →
          </Link>
        </div>
      </section>
    </div>
  );
}
