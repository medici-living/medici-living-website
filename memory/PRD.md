# Medici Living — PRD

## Original Problem Statement
Luxury marketing site for Medici Living (mediciliving.co.uk) — temporary and permanent renovations for rental flats and Airbnbs across London and Lincolnshire. Includes a "Book a Free Consultation" form capturing name, email, property address, etc.

## User Choices
- Dark editorial theme
- All sections: Services, Portfolio, About, Testimonials, FAQ
- Per-borough pages (10 — Kensington, Chelsea, Mayfair, Knightsbridge, Notting Hill, Shoreditch, Hampstead, Canary Wharf, Lincoln, Stamford)
- Form submissions via Formspree (`https://formspree.io/f/mbdegzar`)
- Contact: +44 7767 939630 / hello.mediciliving@gmail.com

## Architecture
- Frontend-only marketing SPA (React + react-router v7 + Tailwind + Shadcn UI + framer-motion + sonner)
- Form posts directly from browser to Formspree (no custom backend logic)
- Backend (FastAPI/Mongo) unchanged template — not currently used

## Implemented (Dec 2025)
- Routes: `/`, `/services`, `/portfolio`, `/about`, `/testimonials`, `/faq`, `/consultation`, `/areas/:slug`
- Navigation with mobile menu + sticky transparent->blurred header
- Footer with full contact + service area links
- Consultation form with validation, Formspree POST, and "Thank you." success state
- Borough pages dynamic from `src/data/content.js`
- Typography: Bodoni Moda + Manrope; gold (#C5A059) on charcoal (#0C0C0C)
- Verified live Formspree submission + success state via Playwright

## Backlog / Future
- P1: Real project photography swap-in (current images from Unsplash/Pexels placeholders)
- P1: Cookie banner & privacy policy page (UK GDPR)
- P2: Blog / journal section for SEO around boroughs
- P2: Lead magnet (e.g. "Rental Yield Guide" PDF download in exchange for email)
- P2: Multi-step form / qualifying questions for higher-intent leads
- P2: Instagram feed embed in About / Footer
- P2: 404 page (currently falls back to Home)
