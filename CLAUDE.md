# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kodedit is a Next.js 15 full-stack web application positioned as an **AI-powered development platform** covering the full software lifecycle. The site is designed for both commercial users and SBIR (Small Business Innovation Research) grant credibility.

**Tech Stack:** Next.js 15.4 (App Router), React 19, TypeScript 5, Tailwind CSS 4, Framer Motion, Resend (email), Lucide React (icons)

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

## Architecture

### Key Routes
- `/` - Landing page: developer tool positioning, features, pricing, waitlist (`app/page.tsx`)
- `/about` - Company story, team, federal alignment, mission (`app/about/page.tsx`)
- `/research` - R&D focus, technical approach, market gaps, SBIR alignment (`app/research/page.tsx`)
- `/privacy` - Privacy policy (required for federal grants) (`app/privacy/page.tsx`)
- `/terms` - Terms of service (required for federal grants) (`app/terms/page.tsx`)
- `/intake` - Client intake form (legacy, for consulting services) (`app/intake/page.tsx`)
- `/demo/[slug]` - Dynamic demo site renderer (`app/demo/[slug]/page.tsx`)

### API Routes
- `POST /api/intake` - Processes intake form, sends emails via Resend
- `GET/POST /api/demo/create` - Creates demo links with 7-day expiration

### Data & Utilities
- `lib/demo-data.ts` - Pre-configured demo businesses
- `lib/demo-utils.ts` - Demo link generation, validation

## Patterns

### Component Types
All page components use `"use client"` for client-side interactivity with Framer Motion animations.

### Styling
- Dark theme default: `#171717` background
- Primary brand color: `#fe3641` (Kodedit red)
- Tailwind CSS 4 with `@theme inline` in `globals.css`

### Animation Pattern
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: i * 0.1 }}
>
```

## Environment Variables

Required:
- `RESEND_API_KEY` - Resend email service API key

Optional:
- `NEXT_PUBLIC_BASE_URL` - Base URL for demo links (defaults to localhost:3000)

## Key Positioning (SBIR-aligned)

The site positions Kodedit as differentiated from Copilot/Cursor/Claude Code by:
1. **Full lifecycle coverage** - Not just code writing (25-35% of dev time), but requirements, planning, testing, QA, maintenance
2. **Quality gates** - Built-in code quality assurance addressing the ~9% bug increase in AI-generated code
3. **Explainable AI** - Transparent reasoning to build developer trust (46% don't trust AI outputs)
4. **Developer education** - Learning mode for workforce development (federal priority)

## Important Notes

- Landing page contains structured data: Organization, SoftwareApplication, WebSite, WebPage, BreadcrumbList, FAQPage schemas
- Path alias: `@/*` maps to project root
- Pricing model: Free tier, Pro ($19/mo), Team ($49/user/mo)
- Demo links stored in-memory (reset on server restart, expire after 7 days)
