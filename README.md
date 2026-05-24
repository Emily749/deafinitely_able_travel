# Deafinitely Able Travel

High-end travel platform for deaf and hard-of-hearing travellers. Built with Next.js 14, deployed on Vercel.

## Stack

- Next.js 14 (App Router)
- TypeScript
- CSS Modules
- Google Fonts (Cormorant Garamond + Montserrat)
- Unsplash for placeholder imagery

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js. No environment variables required.
4. Deploy.

## Project Structure

```
app/
  page.tsx               # Homepage
  layout.tsx             # Root layout with Nav + Footer
  globals.css            # Design system tokens and base styles
  journal/
    page.tsx             # Journal index with filter
    [slug]/page.tsx      # Individual post
  concierge/
    page.tsx             # City directory index
    [city]/page.tsx      # Individual city guide
  privacy/page.tsx
  terms/page.tsx
  not-found.tsx
```

components/
  Nav.tsx / Nav.module.css
  Footer.tsx / Footer.module.css
  Hero.tsx / Hero.module.css
  Manifesto.tsx / Manifesto.module.css
  FeaturedJournal.tsx / FeaturedJournal.module.css
  ConciergeTeaser.tsx / ConciergeTeaser.module.css
  ToolkitTeaser.tsx / ToolkitTeaser.module.css

lib/
  data.ts                # All posts, cities, flashcards, and tech items
```

## Extending Content

All content lives in `lib/data.ts`. To add:

- A journal post: add an object to the `posts` array
- A city: add an object to the `cities` array with `dining` and `selfGuided` venue arrays
- A flashcard: add to `flashCards` with a language, situation, text, and optional phonetic
- A tech item: add to `techItems` with a category and rating

## Replacing Unsplash Images

Images use Unsplash URLs. For production, replace with your own hosted imagery.
Update `next.config.js` `remotePatterns` if you change image hosts.

## Accessibility

- All images include `alt` text
- Navigation includes `aria-label` on the burger button
- Color contrast meets WCAG AA across all text sizes
- Keyboard navigation is fully supported
- Copy-to-clipboard on flashcards uses `navigator.clipboard` with visual feedback
