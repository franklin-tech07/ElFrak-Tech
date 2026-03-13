import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";

const SERVICES = [
  {
    icon: "🌐",
    title: "AI Websites",
    description:
      "Modern, mobile-first websites with built-in AI chatbots, WhatsApp integration, and automated lead capture.",
    features: [
      "AI chatbot support",
      "WhatsApp integration",
      "Lead capture forms",
      "Automated responses",
    ],
  },
  {
    icon: "💬",
    title: "WhatsApp AI Assistants",
    description:
      "Deploy an AI that handles your WhatsApp 24/7 — answering questions, booking appointments, and collecting orders.",
    features: [
      "Auto-replies 24/7",
      "Appointment booking",
      "Order collection",
      "Pricing info delivery",
    ],
  },
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
  // {
  //   icon: '🎯',
  //   title: 'AI Lead Generation',
  //   description: 'Intelligent systems that capture, qualify, and follow up with leads automatically so you never miss an opportunity.',
  //   features: ['Smart lead capture', 'Automated follow-ups', 'Owner notifications', 'CRM integration'],
  // },
  // {
  //   icon: "⚙️",
  //   title: "Business Automation",
  //   description:
  //     "Streamline operations with custom workflows that handle bookings, reminders, email replies, and client follow-ups.",
  //   features: [
  //     "Appointment booking",
  //     "Email automation",
  //     "Client follow-ups",
  //     "Reminder systems",
  //   ],
  // },
];

const CLIENTS = [
  { icon: "✂️", label: "Salons" },
  { icon: "🍽️", label: "Restaurants" },
  { icon: "🏥", label: "Clinics" },
  { icon: "🏋️", label: "Gyms" },
  { icon: "🛍️", label: "Retail" },
  { icon: "🏡", label: "Real Estate" },
];

export default function Home() {
  return (
    <div className="page-fade-in">
      <HeroSection />

      {/* Services Preview */}
      <section
        className="section"
        style={{ background: "rgba(255,255,255,0.01)" }}
      >
        <div className="container">
          <span className="section-label">What We Build</span>
          <h2 className="section-title">
            AI Solutions for{" "}
            <span className="text-accent">Real Businesses</span>
          </h2>
          <p className="section-subtitle">
            From WhatsApp chatbots to full automation pipelines — we build the
            systems that let you focus on what matters.
          </p>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link to="/services" className="btn btn-outline">
              See All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="section">
        <div className="container">
          <span className="section-label">Target Market</span>
          <h2 className="section-title">
            Built for African <span className="text-accent">SMEs</span>
          </h2>
          <p className="section-subtitle">
            We work with small and medium businesses that are ready to stop
            answering every message manually and start growing with AI.
          </p>
          <div className="market-cards">
            {CLIENTS.map((c, i) => (
              <div className="market-card" key={i}>
                <div className="market-card-icon">{c.icon}</div>
                <h4>{c.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ElfrakAI */}
      <section
        className="section"
        style={{ background: "rgba(255,255,255,0.01)" }}
      >
        <div className="container">
          <span className="section-label">Why ElfrakAI</span>
          <h2 className="section-title">
            Our Edge in the <span className="text-accent">Market</span>
          </h2>
          <div className="values-grid" style={{ maxWidth: 800 }}>
            {[
              {
                title: "🤖 AI-First",
                desc: "We specialize in AI — not just websites. Every system we build is powered by intelligent automation.",
              },
              {
                title: "⚡ Fast Delivery",
                desc: "Websites in 2–3 days. Automation systems in 3–5 days. We move fast without cutting corners.",
              },
              {
                title: "📱 Mobile-First",
                desc: "All our solutions are optimized for mobile and WhatsApp — where your customers already are.",
              },
              {
                title: "💡 Africa-Focused",
                desc: "We understand the African market. Affordable pricing, local context, global-quality systems.",
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

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div
            className="highlight-box"
            style={{ maxWidth: 640, textAlign: "center", margin: "0 auto" }}
          >
            <h2 style={{ color: "var(--white)", marginBottom: 12 }}>
              Ready to Automate Your Business?
            </h2>
            <p style={{ color: "var(--gray-400)", marginBottom: 28 }}>
              Get in touch and we'll build you a custom AI system in days.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Book a Free Consultation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
