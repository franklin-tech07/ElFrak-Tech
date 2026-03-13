import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const SERVICES = [
  {
    icon: "🌐",
    title: "AI Websites",
    description:
      "Modern, fast-loading websites built with AI chatbot support, WhatsApp integration, and automated lead capture — designed mobile-first for African audiences.",
    features: [
      "Integrated AI chatbot",
      "WhatsApp click-to-chat",
      "Automated lead capture forms",
      "Mobile-responsive design",
      "Fast delivery (2–3 days)",
    ],
  },
  {
    icon: "🤖",
    title: "AI Website Chatbots",
    description:
      "Embed a smart AI on your website that answers FAQs, explains your services, handles customer queries, and captures leads — even while you sleep.",
    features: [
      "Answer FAQs instantly",
      "Provide business hours",
      "Explain services",
      "Capture visitor info",
      "Seamless handoff to WhatsApp",
    ],
  },
  {
    icon: "💬",
    title: "WhatsApp AI Assistants",
    description:
      "Let AI handle your WhatsApp inbox 24/7. It responds to customers, books appointments, sends pricing, and collects orders automatically.",
    features: [
      "24/7 auto-responses",
      "Appointment scheduling",
      "Pricing delivery",
      "Order collection",
      "Customer qualification",
    ],
  },
  // {
  //   icon: "🎯",
  //   title: "AI Lead Generation Systems",
  //   description:
  //     "Intelligent funnels that attract, capture, and follow up with potential clients automatically — so you always have fresh leads to work with.",
  //   features: [
  //     "Smart lead capture",
  //     "Automated follow-up sequences",
  //     "Instant owner notifications",
  //     "Lead scoring",
  //     "CRM-ready data",
  //   ],
  // },
  // {
  //   icon: "⚙️",
  //   title: "Business Automation Systems",
  //   description:
  //     "Connect your tools and workflows with custom automations that handle repetitive tasks — from appointment reminders to client follow-ups.",
  //   features: [
  //     "Appointment booking automation",
  //     "Email response automation",
  //     "Client follow-up sequences",
  //     "Calendar & reminder systems",
  //     "Custom n8n workflows",
  //   ],
  // },
  {
    icon: "🎨",
    title: "AI Logo & Branding",
    description:
      "Get a professional brand identity designed with the help of AI — fast, affordable, and tailored to your business personality and target audience.",
    features: [
      "Custom logo design",
      "Brand color palette",
      "Typography selection",
      "Business card design",
      "Social media kit",
      "Brand style guide",
    ],
  },
];

const TOOLS = [
  "Claude AI",
  "n8n",
  "Supabase",
  "WhatsApp API",
  "Vercel",
  "VS Code",
  "GitHub",
  "Canva",
];

export default function Services() {
  return (
    <div className="page-fade-in">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="section-label">What We Offer</span>
          <h1>
            AI Services for <span className="text-accent">Modern Business</span>
          </h1>
          <p style={{ maxWidth: 560, marginTop: 16, fontSize: "1.1rem" }}>
            Every service we offer is built to save time, generate leads, and
            help your business operate smarter — with real AI, not just
            buzzwords.
          </p>
        </div>
      </section>

      {/* All Services */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section
        className="section"
        style={{ background: "rgba(255,255,255,0.01)" }}
      >
        <div className="container">
          <span className="section-label">Our Tech Stack</span>
          <h2 className="section-title">
            Built With the <span className="text-accent">Best Tools</span>
          </h2>
          <div
            className="skills-grid"
            style={{ marginTop: 32, justifyContent: "flex-start" }}
          >
            {TOOLS.map((t, i) => (
              <span
                className="skill-tag"
                key={i}
                style={{ fontSize: "0.88rem", padding: "8px 18px" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <span className="section-label">Process</span>
          <h2 className="section-title">
            How It <span className="text-accent">Works</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 20,
              marginTop: 40,
            }}
          >
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We discuss your business, current challenges, and what automation would help most.",
              },
              {
                step: "02",
                title: "System Design",
                desc: "We plan your custom AI system, from chatbot flows to automation logic.",
              },
              {
                step: "03",
                title: "Build & Test",
                desc: "We build, configure, and thoroughly test your AI before launch.",
              },
              {
                step: "04",
                title: "Launch & Support",
                desc: "We deploy, walk you through everything, and provide ongoing support.",
              },
            ].map((s, i) => (
              <div
                className="service-card"
                key={i}
                style={{ padding: "28px 24px" }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-display)",
                    color: "rgba(0,229,255,0.2)",
                    marginBottom: 12,
                  }}
                >
                  {s.step}
                </div>
                <h3 style={{ fontSize: "1rem", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: "0.85rem" }}>{s.desc}</p>
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
            Not Sure Which Service{" "}
            <span className="text-accent">You Need?</span>
          </h2>
          <p
            style={{
              marginTop: 12,
              marginBottom: 32,
              color: "var(--gray-400)",
            }}
          >
            Tell us about your business and we'll recommend the right AI
            solution.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Talk to Us →
          </Link>
        </div>
      </section>
    </div>
  );
}
