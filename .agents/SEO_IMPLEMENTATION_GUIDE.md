# SEO Implementation Guide — Phases 3 to 5

> **Context:** This guide is for AI agents continuing the SEO implementation for **kingofdetailinguk.com** (King of Detailing — a mobile car detailing service in Luton, Bedfordshire, UK). Phases 1 and 2 have already been completed. This document provides everything needed to execute Phases 3, 4, and 5 independently.

---

## Project Architecture

- **Framework:** React + Vite (TypeScript)
- **Routing:** React Router DOM (installed in Phase 2)
- **SEO Meta Tags:** react-helmet-async (installed in Phase 2)
- **Hosting:** Vercel (static SPA with rewrites in `vercel.json`)
- **Styling:** Tailwind CSS + inline styles
- **Brand Colors:** Gold `#C9A84C`, Gold Light `#E2C97A`, Black `#0A0A0A`, Cream `#F5F0E8`

### Key Files
- `src/main.tsx` — Entry point with BrowserRouter and HelmetProvider
- `src/App.tsx` — Main app with routes defined
- `src/components/Layout.tsx` — Shared layout (Navbar + Footer)
- `src/pages/HomePage.tsx` — Homepage (all original sections)
- `src/pages/services/` — Individual service pages (created in Phase 2)
- `src/constants.ts` — Business data, services, testimonials, FAQ
- `index.html` — Base HTML with schema markup
- `vercel.json` — Vercel rewrites/redirects/headers
- `public/sitemap.xml` — XML sitemap
- `public/robots.txt` — Robots directives
- `public/llms.txt` — AI search context file

### Business Details
```
Name: King of Detailing
Phone: 07749 311494
WhatsApp: https://wa.me/447749311494
Booking: https://king-of-detailing.booking.getautomate.io/packages
Instagram: https://www.instagram.com/king.ofdetailing/
Facebook: https://www.facebook.com/profile.php?id=61575679937406
Website: https://www.kingofdetailinguk.com/
Base Location: Luton, Bedfordshire, UK
Coordinates: 51.8787, -0.4200
Hours: Mon-Sun 8am-8pm
```

### Services & Pricing
| Service | Price | Duration | URL |
|---------|-------|----------|-----|
| Deep Clean | From £150 | 5-6 hours | /deep-clean |
| Maintenance Clean | From £100 | 3-4 hours | /maintenance-clean |
| Enhance (Paint Correction + Ceramic Coating) | From £650 | 1-1.5 days | /paint-correction |
| Ceramic Coating | From £650 | 1-1.5 days | /ceramic-coating |

---

## Phase 3: Location Landing Pages ✅ COMPLETE

### Goal
Create 10 dedicated location pages to capture "car detailing [town]" searches. Each page must have **60%+ unique content** (not duplicated from other location pages).

### Target Locations & Keywords

| URL Path | Primary Keyword | Secondary Keywords | Estimated Monthly Searches |
|----------|----------------|-------------------|---------------------------|
| `/mobile-car-detailing-luton` | "car detailing luton" | "mobile car valeting luton", "car cleaning luton" | 200-400 |
| `/car-detailing-bedford` | "car detailing bedford" | "mobile valeting bedford", "car wash bedford" | 100-250 |
| `/car-detailing-dunstable` | "car detailing dunstable" | "mobile valeting dunstable" | 50-120 |
| `/car-detailing-st-albans` | "car detailing st albans" | "mobile car cleaning st albans" | 100-200 |
| `/car-detailing-hitchin` | "car detailing hitchin" | "car valeting hitchin" | 50-100 |
| `/car-detailing-stevenage` | "car detailing stevenage" | "mobile detailing stevenage" | 50-120 |
| `/car-detailing-hemel-hempstead` | "car detailing hemel hempstead" | "mobile valeting hemel" | 80-150 |
| `/car-detailing-watford` | "car detailing watford" | "mobile car cleaning watford" | 100-200 |
| `/car-detailing-milton-keynes` | "car detailing milton keynes" | "mobile detailing mk" | 150-300 |
| `/car-detailing-aylesbury` | "car detailing aylesbury" | "mobile valeting aylesbury" | 50-100 |

### Implementation Steps

1. **Create location page template component** at `src/pages/locations/LocationPage.tsx`
   - Accept props: `locationName`, `county`, `coordinates`, `description`, `nearbyAreas`, `uniqueContent`
   - Include: Hero section with location name, services offered, Google Maps embed for that specific location, testimonials, FAQ, CTA

2. **Create individual location data** at `src/constants/locations.ts`
   - Each location needs unique content blocks:
     - **Local intro paragraph** (mention local landmarks, areas, why this town)
     - **Travel details** ("We typically arrive within X minutes from our Luton base")
     - **Location-specific FAQ** (at least 2 unique questions per location)
     - **Nearby areas** (link to adjacent location pages)

3. **Each location page MUST have:**
   - Unique `<title>`: "Mobile Car Detailing in [Town] | King of Detailing"
   - Unique `<meta description>`: Specific to that location
   - `<h1>`: "Mobile Car Detailing in [Town], [County]"
   - 600-800 words of content (minimum 60% unique per page)
   - LocalBusiness schema with that location's geo coordinates
   - BreadcrumbList schema: Home > Areas > [Town]
   - Google Maps embed centered on that specific town
   - Internal links to service pages and other nearby location pages
   - Clear CTA buttons (WhatsApp, Call, Book Online)

4. **Add routes** in `src/App.tsx` for each location page

5. **Update `src/App.tsx` AreasWeCover section** — each location card should link to its dedicated page

6. **Update `public/sitemap.xml`** — add all 10 location URLs with `<priority>0.8</priority>`

7. **Update `vercel.json`** — ensure all location routes are rewritten to `/index.html`

### Content Uniqueness Strategy
To avoid thin/duplicate content penalties:
- **Luton page:** Focus on "base location", "no travel charge", local landmarks (Airport, Town Centre, Luton Hoo)
- **Bedford page:** Mention Bedford River, Bedford town centre, Priory Park area
- **St Albans page:** Reference the cathedral city, Verulamium Park, premium car owners
- **Milton Keynes page:** Reference the modern city, grid road system, CMK area
- Each page should mention specific driving distance/time from Luton

### Schema Template (per location page)
```json
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "King of Detailing — [Town]",
  "description": "Premium mobile car detailing service in [Town], [County]...",
  "url": "https://www.kingofdetailinguk.com/car-detailing-[town]",
  "telephone": "+447749311494",
  "areaServed": {
    "@type": "City",
    "name": "[Town]",
    "containedInPlace": { "@type": "AdministrativeArea", "name": "[County]" }
  },
  "address": { "@type": "PostalAddress", "addressLocality": "[Town]", "addressRegion": "[County]", "addressCountry": "GB" },
  "geo": { "@type": "GeoCoordinates", "latitude": X.XXXX, "longitude": X.XXXX }
}
```

---

## Phase 4: Content Marketing / Blog (Estimated: 2-3 sessions)

### Goal
Create a blog section at `/blog` with 8-10 SEO-optimised articles that target informational search queries and funnel readers to service pages.

### Implementation Steps

1. **Create blog infrastructure:**
   - `src/pages/blog/BlogIndex.tsx` — Blog listing page with article cards
   - `src/pages/blog/BlogPost.tsx` — Individual blog post layout component
   - `src/constants/blog-posts.ts` — Blog post data (title, slug, content, meta, date, author)

2. **Blog listing page (`/blog`):**
   - Title: "Car Detailing Blog | Tips, Guides & Advice | King of Detailing"
   - Grid of article cards with featured image, title, excerpt, date
   - Filter by category (optional)
   - Schema: Blog type

3. **Individual blog posts (`/blog/[slug]`):**
   - Each post needs:
     - Unique title tag and meta description
     - Proper heading hierarchy (single H1, H2s for sections, H3s for sub-sections)
     - 1,500-2,500 words of content
     - Internal links to relevant service pages (minimum 2-3 per article)
     - Internal links to other blog posts (minimum 1-2 per article)
     - Author info (Philip, King of Detailing)
     - Published date
     - Article schema markup
     - FAQ section at the bottom (2-3 questions related to the topic)
     - CTA section linking to booking/WhatsApp

4. **Article Topics & Target Keywords:**

| # | Title | Slug | Target Keyword | Volume |
|---|-------|------|---------------|--------|
| 1 | "Is Ceramic Coating Worth It? A Professional Detailer's Honest Guide" | `is-ceramic-coating-worth-it` | "is ceramic coating worth it" | 1,000-2,500 |
| 2 | "How Much Does Car Detailing Cost in the UK? (2026 Price Guide)" | `car-detailing-cost-uk` | "car detailing cost UK" | 500-1,200 |
| 3 | "Car Detailing vs Car Valeting: What's the Real Difference?" | `car-detailing-vs-valeting` | "car detailing vs valeting" | 300-600 |
| 4 | "How Often Should You Detail Your Car? The Expert Answer" | `how-often-to-detail-car` | "how often to detail car" | 200-500 |
| 5 | "Paint Correction Explained: Everything You Need to Know" | `paint-correction-explained` | "paint correction explained" | 200-400 |
| 6 | "How to Remove Swirl Marks from Car Paint (The Right Way)" | `remove-swirl-marks-car-paint` | "remove swirl marks" | 400-800 |
| 7 | "How Long Does Ceramic Coating Last? Honest Timeline" | `how-long-does-ceramic-coating-last` | "how long does ceramic coating last" | 300-700 |
| 8 | "Mobile Car Detailing in Bedfordshire: The Complete Guide" | `mobile-car-detailing-bedfordshire` | "mobile car detailing bedfordshire" | 100-200 |

5. **Article Schema Template:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article Title]",
  "description": "[Meta description]",
  "author": { "@type": "Person", "name": "Philip", "jobTitle": "Founder, King of Detailing" },
  "publisher": { "@type": "Organization", "name": "King of Detailing", "logo": { "@type": "ImageObject", "url": "https://www.kingofdetailinguk.com/logo.png" } },
  "datePublished": "2026-08-XX",
  "dateModified": "2026-08-XX",
  "mainEntityOfPage": "https://www.kingofdetailinguk.com/blog/[slug]",
  "image": "https://www.kingofdetailinguk.com/blog/images/[slug].webp"
}
```

6. **Internal Linking Strategy:**
   - Every blog post should link to at least 2 service pages
   - Every service page should link to at least 1 relevant blog post
   - Location pages should link to relevant blog posts
   - Blog posts should cross-link to each other where relevant

7. **Update sitemap** with all blog URLs (`<priority>0.6</priority>`)

8. **Add "Blog" to the navigation** in Navbar and Footer

---

## Phase 5: Technical SEO & Performance (Estimated: 1-2 sessions)

### Goal
Optimise technical performance, improve Core Web Vitals, and potentially migrate to Next.js for server-side rendering.

### Option A: Stay with Vite + React Router (Simpler)

1. **Pre-rendering with vite-plugin-ssr or vite-plugin-prerender:**
   - Install a pre-rendering plugin to generate static HTML for each route at build time
   - This gives Google fully rendered HTML without needing to run JavaScript
   - Much simpler than a full Next.js migration

2. **Core Web Vitals Optimisation:**
   - **LCP (Largest Contentful Paint):** Hero image is already preloaded ✅. Ensure images are WebP, compressed to <200KB
   - **CLS (Cumulative Layout Shift):** Add explicit `width` and `height` to ALL `<img>` tags. Add `aspect-ratio` to image containers
   - **INP (Interaction to Next Paint):** Reduce Framer Motion animation complexity. Use `will-change` CSS hints. Debounce scroll handlers

3. **Image Optimisation:**
   - Rename all image files from Instagram-style names to SEO-friendly kebab-case
   - Convert all PNG/JPG to WebP format
   - Implement responsive images with `srcset` and `sizes`
   - Add `loading="lazy"` to all below-fold images
   - Add `fetchpriority="high"` to the hero image

4. **Breadcrumb Schema:**
   - Add BreadcrumbList schema to every page:
     - Homepage: just "Home"
     - Service pages: Home > Services > [Service Name]
     - Location pages: Home > Areas > [Location]
     - Blog posts: Home > Blog > [Article Title]

5. **Add IndexNow support:**
   - Create `/{key}.txt` verification file
   - Submit new/updated URLs via IndexNow API for instant Bing indexing

### Option B: Migrate to Next.js (More Powerful, More Work)

1. **Create new Next.js project** with App Router
2. **Migrate all components** from current React setup
3. **Use Next.js features:**
   - `generateStaticParams()` for service/location/blog pages
   - `generateMetadata()` for dynamic SEO meta tags
   - `next/image` for automatic image optimisation
   - Static Site Generation (SSG) for all pages
4. **This gives:**
   - Server-rendered HTML (best for SEO)
   - Automatic image optimisation
   - Built-in font optimisation
   - Automatic code splitting
   - Better Core Web Vitals scores

### Recommendation
**Start with Option A** (pre-rendering with Vite) unless the project is planning major feature additions. Option B is better long-term but requires significant migration effort.

### Additional Technical Tasks
- [ ] Submit site to Bing Webmaster Tools
- [ ] Set up Google Analytics 4 (if not already)
- [ ] Set up Google Tag Manager for conversion tracking
- [ ] Create `manifest.json` for PWA support
- [ ] Add structured data testing (use Google Rich Results Test)
- [ ] Run PageSpeed Insights and fix any flagged issues
- [ ] Check mobile-friendliness with Google Mobile-Friendly Test

---

## Important SEO Rules

1. **Never use HowTo schema** — deprecated by Google in Sept 2023
2. **FAQPage schema** — Google retired FAQ rich results on May 7, 2026. Keep existing FAQPage for potential AI/LLM benefit but don't expect SERP features
3. **Core Web Vitals** — Always use INP (Interaction to Next Paint), never FID (deprecated)
4. **Content uniqueness** — Location pages must have 60%+ unique content. WARNING at 30+ location pages, HARD STOP at 50+
5. **Image alt text** — Always include location keywords naturally (e.g., "BMW deep clean car detailing in Luton")
6. **Internal linking** — Every new page should link to and from at least 2 other pages
7. **NAP consistency** — Name, Address, Phone must be identical everywhere: "King of Detailing", "Luton, Bedfordshire", "07749 311494"
