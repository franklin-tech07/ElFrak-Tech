import { useState } from "react";

const WHATSAPP_NUMBER = "23272263135";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build WhatsApp message from form data
    const text = [
      `*New Elfrak Tech Inquiry*`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Business:* ${form.business || "N/A"}`,
      `*Service:* ${form.service || "N/A"}`,
      `*Message:* ${form.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setForm({ name: "", email: "", business: "", service: "", message: "" });
  };

  return (
    <div className="page-fade-in">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="section-label">Get In Touch</span>
          <h1>
            Let's Build Something <span className="text-accent">Smart</span>
          </h1>
          <p style={{ maxWidth: 520, marginTop: 16, fontSize: "1.1rem" }}>
            Ready to automate your business with AI? Reach out and we'll respond
            within 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Info */}
            <div className="contact-info">
              <h2>
                Contact <span className="text-accent">Elfrak Tech</span>
              </h2>
              <p>
                We're based in Freetown, Sierra Leone, but work with clients
                across Africa. Let's chat about your business.
              </p>

              <div className="contact-links">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <div className="contact-link-icon">💬</div>
                  <div>
                    <div
                      style={{
                        color: "var(--white)",
                        fontWeight: 600,
                        marginBottom: 2,
                      }}
                    >
                      WhatsApp
                    </div>
                    <div>+232 72 263 135</div>
                  </div>
                </a>
                <a href="mailto:elfraktech@gmail.com" className="contact-link">
                  <div className="contact-link-icon">✉️</div>
                  <div>
                    <div
                      style={{
                        color: "var(--white)",
                        fontWeight: 600,
                        marginBottom: 2,
                      }}
                    >
                      Email
                    </div>
                    <div>elfraktech@gmail.com</div>
                  </div>
                </a>
                <div className="contact-link">
                  <div className="contact-link-icon">📍</div>
                  <div>
                    <div
                      style={{
                        color: "var(--white)",
                        fontWeight: 600,
                        marginBottom: 2,
                      }}
                    >
                      Location
                    </div>
                    <div>Freetown, Sierra Leone · Remote Across Africa</div>
                  </div>
                </div>
                <div className="contact-link">
                  <div className="contact-link-icon">🕐</div>
                  <div>
                    <div
                      style={{
                        color: "var(--white)",
                        fontWeight: 600,
                        marginBottom: 2,
                      }}
                    >
                      Hours
                    </div>
                    <div>Monday – Saturday, 8am – 8pm WAT</div>
                  </div>
                </div>
              </div>

              <div className="highlight-box" style={{ marginTop: 28 }}>
                <p>
                  ⚡ Most projects start within 24 hours of your first message.
                </p>
              </div>
            </div>

            {/* Right: Form → WhatsApp */}
            <div className="contact-form">
              <h3
                style={{
                  color: "var(--white)",
                  marginBottom: 8,
                  fontFamily: "var(--font-display)",
                }}
              >
                Tell Us About Your Project
              </h3>
              <p style={{ fontSize: "0.85rem", marginBottom: 28 }}>
                Fill in your details and we'll open WhatsApp so you can send us
                the message directly.
              </p>

              {submitted ? (
                <div
                  className="highlight-box"
                  style={{ textAlign: "center", padding: "40px 24px" }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>✅</div>
                  <h3 style={{ color: "var(--white)", marginBottom: 8 }}>
                    WhatsApp Opened!
                  </h3>
                  <p>Your message was pre-filled in WhatsApp. Just hit send!</p>
                  <button
                    className="btn btn-outline"
                    style={{ marginTop: 20 }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Kamara"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Business Name</label>
                    <input
                      type="text"
                      name="business"
                      placeholder="Your Business Name"
                      value={form.business}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Service Interested In</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="AI Website">AI Website</option>
                      <option value="WhatsApp AI Assistant">
                        WhatsApp AI Assistant
                      </option>
                      <option value="AI Website Chatbot">
                        AI Website Chatbot
                      </option>
                      <option value="AI Lead Generation">
                        AI Logo & Branding
                      </option>
                      {/* <option value="Business Automation">
                        Business Automation
                      </option> */}
                      <option value="Not sure – need advice">
                        Not Sure – Need Advice
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Tell Us More</label>
                    <textarea
                      name="message"
                      placeholder="Describe your business and what you'd like to automate..."
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      marginTop: 8,
                    }}
                  >
                    💬 Send via WhatsApp →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
