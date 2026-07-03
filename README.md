# Fast Group Website

A 5-page Next.js 14 (App Router) + TypeScript + Tailwind CSS website for Fast Group.

## Pages

- `/` — Home: hero, all 10 divisions, featured services, all 6 sectors, closing CTA
- `/services` — All 19 services
- `/services/[slug]` — Individual service detail page (process, deliverables, related services)
- `/sectors` — All 6 industry sectors with linked relevant services
- `/opportunities` — Departments, open roles, and how to enroll
- `/contact` — Contact form (pre-fills department from `?department=` query param) + contact details

## Content included

- **10 Divisions**: Dacor Dice, Fast Real Estate, Fast Hospitality, Fast IT Solutions, Fast Marketing,
  Fast Printing, Fast Education, Fast Travel, Fast Consulting, Fast Logistics — each with its own
  responsive detail modal (bottom-sheet on mobile, centered dialog on desktop).
- **19 Services**: E-commerce Solutions, Software Development, UI/UX Design, Branding & Identity,
  Digital Marketing, Cloud Hosting & Security, SEO & Content Creation, Mobile App Development,
  Web Development, Video & Animation, Lead Generation, Cyber Security, Graphic Designing,
  Data Science, AI & Machine Learning, IoT Solutions, AR & VR Technology, RPA Solutions,
  Metaverse Technology — each with its own dedicated page at `/services/[slug]`.
- **6 Sectors**: Finance & Banking, Healthcare, E-commerce & Retail, Education & Training,
  Manufacturing, Technology & SaaS — each cross-linked to its most relevant services.
- **8 Departments** under Opportunities, each with open roles and an "Enroll" link into the contact form.

## Design

- Deep navy base (`#04070f`) rather than flat black, with **6 rotating accent colors**
  (blue, cyan, amber, violet, emerald, rose) assigned per division/service/sector so no single
  section reads as one flat color block.
- Sora (display) + Inter (body) via `next/font/google` — loaded locally, no layout shift.
- Framer Motion for scroll-reveals and hover states; respects `prefers-reduced-motion`.
- Fully responsive from 360px up; the division modal is a bottom sheet on mobile and a centered
  dialog on desktop/tablet.
- Visible focus rings for keyboard navigation (accessibility).

## Setup

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Project structure

```
app/
  layout.tsx           Root layout, fonts, metadata
  page.tsx              Home
  services/page.tsx      All services
  services/[slug]/page.tsx  Service detail
  sectors/page.tsx        Sectors
  opportunities/page.tsx  Departments + enrollment
  contact/page.tsx        Contact form
components/
  Header.tsx, Footer.tsx
  CompanyCard.tsx, CompanyModal.tsx
  ServiceCard.tsx, SectorCard.tsx, DepartmentCard.tsx
  SectionHeading.tsx
lib/
  data/companies.ts, services.ts, sectors.ts, opportunities.ts
  accent.ts             Static Tailwind class map per accent color
  utils.ts              cn() className helper
```

## Notes

- The contact form is client-side only (no backend wired up yet) — it simulates a submit and
  shows a success state. Wire the `handleSubmit` in `app/contact/page.tsx` to your email/CRM
  provider (e.g. an API route, Formspree, Resend) when ready.
- The "Map view" placeholder in the contact sidebar can be swapped for a Google Maps embed.
- All icons are from `lucide-react`; all colors are Tailwind defaults plus the custom `brand`
  palette in `tailwind.config.ts` — no external image dependencies, so it runs immediately
  without needing image hosting configured.
