import { useState, useRef, useEffect } from 'react'

// Quick reply suggestions shown to the user
const QUICK_REPLIES = [
  'What services do you offer?',
  'How does WhatsApp AI work?',
  'How do I get started?',
  'Where do you operate?',
]

// Fallback FAQ responses (used if backend is unavailable)
const FAQ_RESPONSES = {
  'what services do you offer': `ElfrakAI offers:\n• AI Websites with chatbot support\n• WhatsApp AI Assistants\n• AI Lead Generation Systems\n• Business Automation Workflows\n• AI Website Chatbots\n\nVisit our Services page for full details!`,
  'how does whatsapp ai work': `Our WhatsApp AI automatically responds to customer inquiries, books appointments, sends pricing info, and collects orders — 24/7, without you lifting a finger.`,
  'how do i get started': `Easy! Just reach out via the Contact page or message us on WhatsApp. We'll discuss your business needs and propose the right AI system for you. Most projects are delivered in 2–5 days.`,
  'where do you operate': `We currently serve businesses in Sierra Leone and Botswana, with plans to expand to Ghana and Nigeria. We work remotely, so we can help businesses across Africa!`,
  'pricing': `Our pricing is tailored to each project and market. Contact us for a custom quote — we keep it affordable for African SMEs.`,
}

function getBotResponse(message) {
  const lower = message.toLowerCase()
  for (const [key, val] of Object.entries(FAQ_RESPONSES)) {
    if (lower.includes(key) || key.split(' ').some(w => lower.includes(w))) {
      return val
    }
  }
  return null
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: `👋 Hi! I'm Elfrak, your AI assistant.\n\nI can answer questions about our services, help you get started, or connect you with our team. How can I help?`,
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showNotif, setShowNotif] = useState(true)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (open) {
      setShowNotif(false)
      scrollToBottom()
    }
  }, [open, messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const sendMessage = async (text) => {
    const userMsg = text || input.trim()
    if (!userMsg || loading) return

    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setLoading(true)

    // Check FAQ first (instant response)
    const faqAnswer = getBotResponse(userMsg)
    if (faqAnswer) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', text: faqAnswer }])
        setLoading(false)
      }, 600)
      return
    }

    // Call backend Claude API
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'bot', text: data.reply || 'Sorry, I couldn\'t get a response. Please try again or contact us directly.' }])
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          text: `I'm having trouble connecting right now. You can reach us directly:\n\n📧 hello@elfrakai.africa\n💬 WhatsApp us anytime!`,
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">N</div>
              <div>
                <div className="chat-header-name">Elfrak Assistant</div>
                <div className="chat-header-status">Online</div>
              </div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.role}`} style={{ whiteSpace: 'pre-line' }}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="message bot">
                <div className="typing-indicator">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="chat-quick-btns">
            {QUICK_REPLIES.map((q, i) => (
              <button key={i} className="quick-btn" onClick={() => sendMessage(q)}>
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="chat-input-area">
            <input
              className="chat-input"
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
            />
            <button
              className="chat-send"
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
              aria-label="Send message"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        className="chat-toggle"
        onClick={() => setOpen(prev => !prev)}
        aria-label="Open chat"
      >
        {open ? '✕' : '💬'}
        {showNotif && !open && <span className="chat-notif" />}
      </button>
    </div>
  )
}
