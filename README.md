# Jefrin — Spiritual Healing Portfolio Website

A bespoke, production-ready spiritual healing portfolio website built for **Jefrin**, an authentic spiritual healing practitioner. 

Designed around the creative concept: **“A peaceful journey inward.”**

---

## 🎨 Visual Identity & Colour Palette

The website avoids clinical medical grids and stereotypical mystical cliches. It uses an editorial, tranquil aesthetic combining:

- **Dominant Base (Powder & Pale Blue):** `#DCE8F8` & `#EAF2FC`
- **Atmospheric Layering (Soft Lavender & Lilac):** `#E5D7F4` & `#F0EAF8`
- **Warmth & Grounding (Warm Ivory):** `#FFF8EF`
- **Practitioner Harmony (Muted Coral):** `#E9B9AC`
- **Subtle Luxury Accents (Champagne Gold):** `#D1B477`
- **Natural Serenity (Muted Sage):** `#B9CCBA`
- **Deep Readable Typography (Blue-Grey):** `#34455C`

---

## 🌸 Key Features & Sections

1. **Editorial Hero Section:**
   - Prominently features the authentic practitioner portrait blended seamlessly with an arched golden halo, ambient lotus watercolor gradients, and warm light.
   - Preserves all authentic physical appearance, facial structure, smile, and styling.
   - Interactive singing bowl sound chime button powered by the Web Audio API.

2. **Practitioner Introduction / About Section:**
   - Sincere, compassionate philosophy honoring individual pacing and inner stillness.
   - Clear editable biography placeholder for personal journey details.
   - 4 foundational guiding pillars: *Gentle Presence, Soul Compassion, Innate Wholeness, Sacred Sanctuary*.

3. **Spiritual Offerings Section:**
   - Distinctive asymmetrical editorial layout (not a repetitive corporate grid).
   - Detailed interactive cards with an "Explore This Practice" modal and pre-filled inquiry actions.
   - Includes responsible, ethical practice disclaimer.

4. **The Healing Journey (Philosophy):**
   - Vertical flowing narrative sequence:
     1. *Pause & Reconnect*
     2. *Cultivate Awareness*
     3. *Create Space for Reflection*
     4. *Explore Your Personal Journey*

5. **The Interactive Breathing Sanctuary:**
   - A peaceful 60-second breathing pacer (Inhale → Hold → Exhale) with an expanding celestial lotus visual and rotating soul affirmations.

6. **Client Reflections / Testimonials:**
   - Clearly labeled editable client reflection placeholders with interactive carousel controls.

7. **Functional Contact Workflow:**
   - Fully operational modal allowing visitors to compose inquiries directly into their mail client (`mailto:`) or copy the formatted inquiry with 1 click.
   - Configurable email address placeholder in `src/components/ContactSection.tsx`.

8. **Soundscape Resonance:**
   - Built-in Web Audio API 432Hz ambient resonance toggle (no external audio files required, runs smoothly on any browser).

---

## 🛠️ Stack

- **React 18** with **Vite 6**
- **TypeScript** (Strict mode)
- **Tailwind CSS** with custom spiritual color tokens and font configurations
- **Framer Motion** for refined, calm transitions
- **Lucide React** for clean vector icons
- **Google Fonts:** Cormorant Garamond (Editorial serif) & Manrope (Clean sans-serif)

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Building for Production & Deployment

```bash
# Compile TypeScript and generate production bundle
npm run build
```

The optimized static assets will be created in the `dist/` directory.

### Deploying to Vercel
1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and import the project.
3. Framework Preset: **Vite**.
4. Click **Deploy**.

---

## 📝 Customization Guide

- **Practitioner Email:** Update `PRACTITIONER_CONTACT_EMAIL` in `src/components/ContactSection.tsx` and `src/components/Footer.tsx`.
- **Practitioner Photos:** High-resolution authentic photos are stored in `public/assets/practitioner-main.jpg` and `public/assets/practitioner-portrait.jpg`.
- **Offerings / Services:** Edit the `offerings` list in `src/components/Offerings.tsx` to match specific services, durations, and pricing if desired.
