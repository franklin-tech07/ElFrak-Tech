/**
 * ElfrakAI Backend Server
 * =====================
 * Node.js + Express server that powers the AI chatbot.
 *
 * SETUP INSTRUCTIONS:
 * -------------------
 * 1. Install dependencies:
 *    cd backend && npm install
 *
 * 2. Create a .env file in the /backend folder:
 *    ANTHROPIC_API_KEY=your_claude_api_key_here
 *    PORT=3001
 *    WHATSAPP_NUMBER=+23272263135
 *
 * 3. Get your Claude API key at: https://console.anthropic.com
 *
 * 4. Run the server:
 *    node server.js
 *    (or: npx nodemon server.js for auto-reload)
 *
 * 5. The frontend Vite dev server proxies /api → http://localhost:3001
 *    so requests to /api/chat reach this server automatically.
 */

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Anthropic = require("@anthropic-ai/sdk");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Anthropic client
// IMPORTANT: Set ANTHROPIC_API_KEY in your .env file
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Middleware
app.use(cors({ origin: ["http://localhost:5173", "https://yourdomain.com"] }));
app.use(express.json());

// ── SYSTEM PROMPT ──────────────────────────────────────────────
// This defines ElfrakAI's personality and knowledge for the chatbot
const SYSTEM_PROMPT = `You are Nexa, the AI assistant for Elfrak Tech — an AI automation agency based in Freetown, Sierra Leone, serving African businesses.

Your role:
- Answer questions about Elfrak Tech's services and capabilities
- Help potential clients understand how AI can benefit their business
- Capture lead information (name, business type, contact)
- Direct people to WhatsApp (+232 72 263 135) or email (elfraktech@gmail.com) for detailed discussions

About Elfrak Tech:
- Founded in 2026 in Sierra Leone, expanding to other African markets
- Services: AI Websites, AI Chatbots, WhatsApp AI Assistants, Logo & Branding
- Target clients: Salons, restaurants, clinics, gyms, retail shops, real estate agents
- Tools: Claude AI, n8n, Supabase, Vercel, WhatsApp API
- Delivery: Websites in 2–3 days, automation systems in 3–5 days

Key selling points:
- Affordable pricing for African SMEs
- Mobile-first and WhatsApp-integrated solutions
- Fast delivery
- First-mover advantage in AI automation in West/Southern Africa

Tone: Friendly, professional, confident, knowledgeable. Use short paragraphs. Be helpful, not salesy.

If someone asks about pricing, say it's customized per project and invite them to reach out directly.

If someone seems ready to start, ask for their name, business type, and what they want to automate — then provide the WhatsApp number.

Always respond in plain text (no markdown). Keep responses under 150 words unless detail is needed.`;

// ── CHAT ENDPOINT ───────────────────────────────────────────────
app.post("/api/chat", async (req, res) => {
  const { message, history = [] } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    // Build conversation history (for multi-turn)
    const messages = [
      ...history.slice(-10), // Keep last 10 exchanges to stay within context
      { role: "user", content: message },
    ];

    const response = await anthropic.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages,
    });

    const reply =
      response.content[0]?.text ||
      "I'm sorry, I couldn't generate a response. Please contact us directly on WhatsApp.";

    res.json({ reply, success: true });
  } catch (error) {
    console.error("Claude API error:", error.message);

    // Graceful fallback
    res.json({
      reply:
        "I'm having a bit of trouble right now. You can reach our team directly on WhatsApp: +232 72 263 135, or email us at hello@elfrakai.africa.",
      success: false,
    });
  }
});

// ── LEAD CAPTURE ENDPOINT ───────────────────────────────────────
// Optional: Save leads to a database or send to WhatsApp/email
app.post("/api/lead", async (req, res) => {
  const { name, email, phone, business, service, message } = req.body;

  // TODO: Integrate with Supabase, Airtable, or email service
  // Example Supabase integration:
  // const { data, error } = await supabase.from('leads').insert([{ name, email, ... }])

  // Example: Send WhatsApp notification via WhatsApp Business API
  // (Requires WhatsApp Business API setup — see docs.elfrakai.africa)

  console.log("New lead received:", { name, email, phone, business, service });

  res.json({ success: true, message: "Lead captured successfully" });
});

// ── HEALTH CHECK ────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "Elfrak Tech Backend",
    timestamp: new Date().toISOString(),
  });
});

// ── START SERVER ────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Elfrak Tech backend running on http://localhost:${PORT}`);
  console.log(`📡 Chat endpoint: POST http://localhost:${PORT}/api/chat`);
  console.log(
    `🔑 API key set: ${process.env.ANTHROPIC_API_KEY ? "YES ✅" : "NO ❌ — Set ANTHROPIC_API_KEY in .env"}\n`,
  );
});
