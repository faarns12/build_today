# Build Today — FAARNS Official

A real estate marketing website built with **Next.js 15** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**. The site showcases properties, testimonials, and a quotation request flow.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org) | Framework — App Router, SSR, image optimisation |
| React 19 | UI runtime |
| TypeScript 5 | Type safety |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Page and section animations |
| Shadcn/ui (Radix UI) | Accessible primitive components |
| react-hook-form | Form state management |
| react-slick | Carousels / sliders |
| react-fast-marquee | Scrolling ticker |
| react-countup | Animated number counters |
| lucide-react / react-icons | Icon sets |

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start the dev server (Turbopack enabled)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Type-check & lint
npm run lint

# Production build
npm run build

# Serve the production build locally
npm run start
```

---

## Project Structure

```
build_today/
├── public/                        # Static assets served at the root URL
│   ├── fonts/
│   │   ├── Neue/                  # Neue Haas Grotesk Display Round (headings)
│   │   └── Satoshi/               # Satoshi (body text)
│   └── img/                       # All site images (properties, reviews, sliders…)
│
├── src/
│   ├── app/                       # Next.js App Router — every folder = a URL route
│   │   ├── layout.tsx             # Root layout: wraps every page (fonts, metadata, Navbar, Footer)
│   │   ├── page.tsx               # Home page  →  /
│   │   ├── globals.css            # Global styles + Tailwind base/tokens
│   │   ├── fonts.ts               # Font definitions (next/font) shared across the app
│   │   ├── favicon.ico
│   │   ├── contact-us/
│   │   │   └── page.tsx           # Contact page  →  /contact-us
│   │   ├── properties/
│   │   │   ├── page.tsx           # Properties listing  →  /properties
│   │   │   └── [id]/
│   │   │       └── page.tsx       # Single property detail  →  /properties/:id
│   │   ├── Quotation/
│   │   │   └── page.tsx           # Quote request page  →  /Quotation
│   │   └── testimonials/
│   │       └── page.tsx           # Testimonials page  →  /testimonials
│   │
│   ├── components/                # All UI components, grouped by the page they belong to
│   │   ├── ui/                    # Shared primitives (used across multiple pages)
│   │   │   ├── button.tsx         # Shadcn Button component
│   │   │   └── card.tsx           # Shadcn Card component
│   │   │
│   │   ├── home/                  # Sections that appear on the Home page
│   │   │   ├── Navbar/
│   │   │   │   └── Navbar.tsx
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.tsx
│   │   │   │   └── ProjectsSlider.tsx
│   │   │   ├── StickyFeaturedPropertyCards/
│   │   │   │   └── StickyFeaturedPropertyCards.tsx
│   │   │   ├── LocationsShowcase/
│   │   │   │   └── LocationsShowcase.tsx
│   │   │   ├── MetricsSection/
│   │   │   │   └── MetricsSection.tsx   # Animated counter stats
│   │   │   ├── Value/
│   │   │   │   └── ValueProp.tsx
│   │   │   ├── project/
│   │   │   │   └── Project.tsx
│   │   │   ├── services/
│   │   │   │   └── services.tsx
│   │   │   ├── Build-today/
│   │   │   │   └── BuildToday.tsx       # "Build Today" CTA banner
│   │   │   ├── getInTuch/
│   │   │   │   └── GetInTuch.tsx
│   │   │   ├── FAQSection/
│   │   │   │   └── FAQSection.tsx
│   │   │   └── Footer/
│   │   │       └── Footer.tsx
│   │   │
│   │   ├── properties/            # Sections that appear on the Properties pages
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── BuildToday.tsx
│   │   │
│   │   ├── Contact-us/            # Sections that appear on the Contact page
│   │   │   ├── Hero.tsx
│   │   │   └── BuildToday.tsx
│   │   │
│   │   ├── Quotation/             # Sections that appear on the Quotation page
│   │   │   ├── Hero.tsx
│   │   │   ├── Excellence.tsx
│   │   │   └── QuoteForm.tsx      # react-hook-form quote submission form
│   │   │
│   │   └── Testimonials/          # Sections that appear on the Testimonials page
│   │       ├── Hero.tsx
│   │       └── TestimonialSlider.tsx   # react-slick carousel
│   │
│   └── lib/
│       └── utils.ts               # cn() helper — merges Tailwind classes (clsx + tailwind-merge)
│
├── components.json                # Shadcn/ui configuration
├── next.config.ts                 # Next.js configuration
├── tailwind.config (via postcss)  # Tailwind v4 is configured through postcss.config.mjs
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
└── package.json
```

---

## Page → Component Map

| URL | Page file | Components consumed |
|---|---|---|
| `/` | `app/page.tsx` | `home/Navbar`, `home/Hero`, `home/StickyFeaturedPropertyCards`, `home/LocationsShowcase`, `home/MetricsSection`, `home/Value`, `home/project`, `home/services`, `home/Build-today`, `home/getInTuch`, `home/FAQSection`, `home/Footer` |
| `/properties` | `app/properties/page.tsx` | `properties/Hero`, `properties/Projects`, `properties/BuildToday` |
| `/properties/:id` | `app/properties/[id]/page.tsx` | Property detail sections |
| `/contact-us` | `app/contact-us/page.tsx` | `Contact-us/Hero`, `Contact-us/BuildToday` |
| `/Quotation` | `app/Quotation/page.tsx` | `Quotation/Hero`, `Quotation/Excellence`, `Quotation/QuoteForm` |
| `/testimonials` | `app/testimonials/page.tsx` | `Testimonials/Hero`, `Testimonials/TestimonialSlider` |

---

## Key Conventions

- **Component co-location** — each component lives in its own folder named after the section (e.g. `FAQSection/FAQSection.tsx`). Add new files for sub-components or local hooks in the same folder.
- **Page-scoped components** — components inside `home/`, `properties/`, `Contact-us/`, etc. are only used by their respective page. Anything needed by two or more pages goes in `components/ui/`.
- **`cn()` utility** — always use `cn()` from `src/lib/utils.ts` when conditionally combining Tailwind classes. Never string-concatenate class names.
- **Fonts** — custom fonts are loaded in `src/app/fonts.ts` using `next/font/local` and applied through CSS variables in `globals.css`.
- **Images** — all image files live in `public/img/`. Reference them with `/img/filename.ext` (no import needed for static assets in `public/`).

---

## Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production-ready code — PRs only, no direct commits |
| `<your-name>` | Personal feature/fix branch — branch off `main`, PR back into `main` |

---

## Adding a New Page

1. Create a folder under `src/app/` matching the URL slug (e.g. `src/app/about/`).
2. Add a `page.tsx` file that exports a default React component.
3. Create a matching folder under `src/components/` (e.g. `src/components/about/`) for its sections.
4. Import and compose those section components inside `page.tsx`.

---

## Useful Links

- [Next.js App Router docs](https://nextjs.org/docs/app)
- [Tailwind CSS v4 docs](https://tailwindcss.com/docs)
- [Shadcn/ui components](https://ui.shadcn.com)
- [Framer Motion docs](https://www.framer.com/motion/)
