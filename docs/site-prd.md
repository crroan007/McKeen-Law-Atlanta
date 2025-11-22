# PRD: McKeen Law Site (SEO & AI-Ready)  
Keep legacy color scheme and hero photo background; maintain familiar landing-page look while upgrading SEO, UX, conversions, and AI surfaces. Aligns with the SEO Optimization Program (`docs/seo-program.md`) for local SEO and AI visibility.

## Objectives
- Increase qualified organic calls/forms for Atlanta DUI and related terms.
- Expand GBP/map-pack coverage radius across Atlanta metro; improve CTR.
- Outperform Lawson on local relevance, E-E-A-T, speed, conversion, and AI overview inclusion.
- Preserve visual brand (colors, hero photo) while modernizing structure and content.

## Scope (MVP)
- Pages/Templates (map to Core 30 and GBP categories/services per `docs/seo-program.md`):
  - Home (hero with legacy photo + colors; CTA stack + short form; H2 blurbs for secondary categories).
  - DUI Hub (core service).
  - Charges/Defenses subpages (Refusal, Breath/Blood/Field tests, Less-safe, Under-21, CDL/Commercial, BUI, Drug DUI, Reckless/Traffic).
  - Service pages to reach Core 30 coverage (e.g., ALS/License hearings, CDL DUI, Under-21 DUI, Refusal defense, Field test challenges, Emergency DUI, etc.).
  - Locations: Metro Atlanta hub → county pages (Fulton, DeKalb, Cobb, Gwinnett, etc.), with selective city pages (only where unique content + local proof exist).
  - Case Results (filterable) and Reviews.
  - Attorneys (individual profiles).
  - Contact.
  - Blog/Articles (for updates/news) focused on service and location support; avoid generic DIY that does not build entity relevance.
- Global:
  - Sticky mobile CTA bar (call/text/consult), header CTA buttons, footer with NAP.
  - Breadcrumbs and footer sitemap.

## Functional Requirements
- Hero: retain legacy photo and color scheme; add 24/7 `tel:` link, “Free Consultation” button, and short form (Name, Phone, Email, Case Details).
- Navigation: top-level (Home | DUI Defense | Charges/Defenses | Case Results | Reviews | Locations | Attorneys | Contact); deeper links in footer; internal links reflect Core 30 structure.
- Locations:
  - Metro hub → county pages; city pages only when unique content provided.
  - Each location page: local intro, courts/judges info, local process steps, local case result, local review, map/directions (async), NAP/hours, 2–3 internal links.
- Case Results: sortable/filterable by charge/location/year; summary cards linking to details.
- Reviews: snippet grid/list with sources; optional filters.
- Attorneys: bios with bar #, experience, prosecutor angle, media/speaking, linked results/reviews.
- Forms: short, mobile-friendly; thank-you/confirmation states; spam protection.
- Sticky mobile bar: call/text/consult buttons using legacy colors.

## Content Requirements
- Home: USP, proof blocks (case results stats, reviews), attorney snippet, locations teaser, FAQ snippet; H2 blurbs for secondary categories linked to their pages.
- DUI Hub: GA statutes, process timeline, defenses, penalties, checklist, FAQ.
- Subpages: clear intros, bullets, FAQ sections; tie to GBP services; add local proof.
- Service pages: one per Core 30 service (see `docs/seo-program.md`); each with Atlanta/county framing, CTA, FAQs, internal links.
- Blog cadence: 2–4/mo GA DUI updates/court changes/notable cases tied to services/locations (no generic DIY).
- Copy style: concise intros, bullets, short paragraphs, dated updates, cited sources for legal claims, “Last updated” and author/credential where relevant.

## SEO & AI Requirements
- Technical: canonical per page; clean slugs; robots/sitemap; fix 4xx/5xx/redirect chains; mobile-first; sitemap submitted in GSC.
- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms; preload hero image; set width/height; lazy-load below-the-fold media; defer non-critical JS; system/self-hosted fonts with `font-display: swap`.
- Structured Data:
  - Organization + LocalBusiness/LegalService (NAP/hours matching GBP).
  - BreadcrumbList on all pages.
  - FAQPage where FAQs exist.
  - Review/AggregateRating where compliant and visible.
  - Article/BlogPosting on posts; Speakable on top FAQs/concise answers.
- On-page: unique title/meta/OG; single H1; semantic headings; alt text; `tel:` links; primary phrase on homepage intro; service/county terms on respective pages.
- Internal linking: homepage H2 blurbs → category hubs → service pages; hubs ↔ subpages; blogs → hubs/locations; no orphan pages.
- AI surface readiness: concise summaries, FAQs, schema alignment, server-rendered primary content, clear author/credential cues, “Last updated”, NAP consistency, and answers in natural language for DUI/Atlanta queries.

## Local SEO & GBP
- NAP consistency across site/footer/schema.
- Contact/location sections align with GBP (address, hours).
- Map embed async; link to GBP with UTM.

## Analytics & Tagging
- Single GTM/GA4: events for `tel:` click, form submit, sticky-bar clicks, chat start (if present), map click, video play, outbound to review sites; mark conversions. Align event names with `docs/seo-program.md`.
- Call tracking (if used): dynamic number only on landing pages; primary number static in header/footer/schema/GBP.
- GA4 DebugView validation checklist before launch; monitor GSC for DUI + county terms.

## UX/Design Constraints
- Preserve legacy hero photo and color palette.
- Maintain familiar landing layout but improve readability (spacing, contrast, mobile tap targets).
- High-contrast CTAs; larger tap targets ≥ 48px.
- Minimal popups; no interstitials blocking content.

## Accessibility
- Single H1; correct heading order.
- Labels on form fields; focus states; sufficient color contrast.
- Alt text on images; transcripts for videos if added.

## Performance
- Image optimization (WebP/AVIF where possible; compress hero responsibly).
- Async/defer for non-critical scripts; minimize third-party tags.
- Cache headers; CDN if available; keep bundles lean per Core 30 rollout.

## AI Surface Optimization
- Clear summaries and FAQs on key pages; concise, factual answers; “Last updated” and source citations for legal claims.
- Ensure primary content is server-rendered; avoid hiding content behind JS/interstitials.
- Consistent NAP and explicit contact info; structured data aligns with visible copy; FAQs in schema.
  
## Alignment with SEO Optimization Program
- Follow `docs/seo-program.md` for Core 30 architecture, GBP program, execution timeline, and KPIs.
- Use home/category/service/location requirements here to build the entity fortress for GBP and AI ranking.
- Treat this PRD as implementation detail; the program doc is the governing SEO blueprint.

## Out of Scope (MVP)
- Dozens of thin city pages; only build where unique content exists.
- Heavy A/B testing framework; may add later after baseline launch.
- New branding or major visual redesign (colors/hero remain legacy).

## Acceptance Criteria
- Pages/templates listed above implemented with preserved hero photo/colors.
- Core Web Vitals in target range on key templates (home, DUI hub, county page, blog).
- Structured data validates (Rich Results Test) for LocalBusiness/LegalService, BreadcrumbList, FAQPage where used.
- GA4 events firing and marked as conversions; GSC submitted with clean index coverage (no critical errors).
- Unique, non-duplicate content on county/city pages with local proof elements.
