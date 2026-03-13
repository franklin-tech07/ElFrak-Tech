# Elfrak Tech– African AI Automation Agency Website

A complete React + Vite website for NexaAI, built with a Claude-powered chatbot backend.

## Project Structure

```
ai-agency/
├── index.html
├── vite.config.js
├── package.json
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── assets/
│   │   └── css/
│   │       ├── style.css          # Main styles + brand system
│   │       └── responsive.css     # Mobile-first responsive styles
│   │
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky nav with hamburger menu
│   │   ├── Footer.jsx             # Footer with links + social
│   │   ├── HeroSection.jsx        # Homepage hero
│   │   ├── ServiceCard.jsx        # Reusable service card
│   │   └── ChatWidget.jsx         # AI-powered chat widget
│   │
│   └── pages/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── Portfolio.jsx
│       └── Contact.jsx
│
└── backend/
    ├── server.js                  # Express + Claude API
    ├── package.json
    └── .env.example               # Copy to .env and add your keys
```

## Quick Start

### 1. Frontend

```bash
# From project root
npm install
npm run dev
```

Frontend runs on: http://localhost:5173

### 2. Backend (Chatbot)

```bash
cd backend
npm install

# Set up environment
cp .env.example .env
# Edit .env and add your ANTHROPIC_API_KEY

node server.js
# or: npx nodemon server.js
```

Backend runs on: http://localhost:3001

The Vite dev server automatically proxies `/api` requests to `localhost:3001`.

### 3. Get Your Claude API Key

1. Go to https://console.anthropic.com
2. Create an account and generate an API key
3. Paste it into `backend/.env` as `ANTHROPIC_API_KEY`

## Deployment

### Frontend → Vercel

```bash
npm run build
# Deploy /dist folder to Vercel
```

### Backend → Railway / Render / Fly.io

- Set environment variables in the platform dashboard
- Point frontend's `/api` proxy to your deployed backend URL

## Customization

- **Colors**: Edit CSS variables in `src/assets/css/style.css`
- **Content**: Update text in page files under `src/pages/`
- **Chatbot personality**: Edit `SYSTEM_PROMPT` in `backend/server.js`
- **Contact info**: Update `Footer.jsx` and `Contact.jsx`
- **WhatsApp number**: Replace `+23278000000` with your real number

## Tech Stack

- **Frontend**: React 18, Vite, React Router 6
- **Styling**: Custom CSS with CSS variables, no framework dependency
- **AI**: Anthropic Claude API (claude-opus-4-5)
- **Backend**: Node.js, Express
- **Deployment**: Vercel (frontend) + Railway/Render (backend)
