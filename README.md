# THE ROYAL ABAAS 👑
## Luxury Unisex Salon Website

A production-ready, premium luxury salon website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 📁 Folder Structure

```
the-royal-abaas/
│
├── 📄 package.json          — Dependencies & scripts
├── 📄 tsconfig.json         — TypeScript config
├── 📄 next.config.js        — Next.js config (image domains)
├── 📄 tailwind.config.js    — Tailwind theme tokens
├── 📄 postcss.config.js     — PostCSS setup
│
├── 📂 public/               — Static assets
│
└── 📂 src/
    │
    ├── 📂 app/                      — Next.js App Router
    │   ├── layout.tsx               — Root layout + SEO metadata
    │   ├── page.tsx                 — Homepage (assembles sections)
    │   ├── globals.css              — Global CSS + design tokens + animations
    │   └── admin/
    │       └── page.tsx             — Admin dashboard page (/admin)
    │
    ├── 📂 components/
    │   │
    │   ├── 📂 layout/               — Site-wide layout components
    │   │   ├── Nav.tsx              — Sticky navigation + mobile menu
    │   │   └── Footer.tsx           — Footer with hours, socials, links
    │   │
    │   ├── 📂 sections/             — Homepage page sections
    │   │   ├── Hero.tsx             — Full-screen hero with ambient orbs
    │   │   ├── About.tsx            — Split-grid about section
    │   │   ├── Services.tsx         — 8-card services grid
    │   │   ├── Team.tsx             — 8-member team grid
    │   │   ├── Gallery.tsx          — Mosaic gallery grid
    │   │   ├── Testimonials.tsx     — 3-column testimonials
    │   │   └── BookingCTA.tsx       — WhatsApp booking CTA
    │   │
    │   ├── 📂 admin/                — Admin dashboard components
    │   │   ├── AdminDashboard.tsx   — Main admin layout + tab router
    │   │   ├── Sidebar.tsx          — Admin sidebar navigation
    │   │   └── tabs/
    │   │       ├── OverviewTab.tsx      — Stats + activity feed
    │   │       ├── ServicesTab.tsx      — Manage services table
    │   │       ├── TeamTab.tsx          — Manage team members
    │   │       ├── GalleryTab.tsx       — Gallery image manager
    │   │       ├── TestimonialsTab.tsx  — Review manager
    │   │       └── SettingsTab.tsx      — Salon settings form
    │   │
    │   └── 📂 ui/                   — Reusable UI primitives
    │       ├── Button.tsx           — Multi-variant button component
    │       └── SectionHeader.tsx    — Eyebrow + heading + gold rule
    │
    ├── 📂 data/
    │   └── index.ts                 — All static content (services, team, etc.)
    │
    ├── 📂 hooks/
    │   ├── useReveal.ts             — IntersectionObserver scroll reveal
    │   └── useScrolled.ts           — Scroll position tracker for nav
    │
    ├── 📂 lib/
    │   └── constants.ts             — WhatsApp URL, site info, hours
    │
    └── 📂 types/
        └── index.ts                 — TypeScript interfaces & types
```

---

## ✏️ Customization

### Change WhatsApp Number
Edit `src/lib/constants.ts`:
```ts
export const WA_URL = "https://wa.me/YOUR_NUMBER?text=...";
```

### Update Services
Edit `src/data/index.ts` → `SERVICES` array.

### Update Team Members
Edit `src/data/index.ts` → `TEAM` array.  
Replace `seed` with real image URLs for production.

### Change Colors
Edit `src/app/globals.css` CSS variables under `:root {}`.

---

## 🌐 Pages

| Route    | Description              |
|----------|--------------------------|
| `/`      | Main luxury salon website |
| `/admin` | Admin dashboard panel    |

---

## 🛠 Tech Stack

| Tool             | Purpose                    |
|-----------------|----------------------------|
| Next.js 14      | React framework + routing  |
| TypeScript      | Type safety                |
| Tailwind CSS    | Utility styling            |
| Framer Motion   | (installed, ready to use)  |
| Lucide React    | Icon library               |
| next/image      | Optimized images           |

---

## 📦 Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel
```

---

*Built for The Royal Abaas — Where Art Meets Elegance* 👑
