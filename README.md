# The Culinary Company

Stealth, single-screen landing page for an invitation-only dining society.
[theculinarycompany.com](https://theculinarycompany.com)

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- `next/font/google` — Bodoni Moda · Hanken Grotesk · Fragment Mono
- Plain CSS with OKLCH design tokens (no Tailwind, no UI library)

## Develop

```bash
pnpm install        # or npm / yarn / bun
pnpm dev            # http://localhost:3000
```

## Build

```bash
pnpm build
pnpm start
```

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new).
Add `theculinarycompany.com` as the production domain in project settings.

## Structure

```
app/
  layout.tsx        # fonts, metadata, html shell
  page.tsx          # composes the hero
  globals.css       # design tokens, layout, motion
  icon.svg          # favicon
components/
  Atmosphere.tsx    # warm vignette + film grain
  Mark.tsx          # t·c·c wordmark
  Plaque.tsx        # corner-bracketed calling card
  LiveClock.tsx     # live SF time
  InviteForm.tsx    # email request form
```
