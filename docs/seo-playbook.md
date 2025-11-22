# McKeen Law SEO & AI Playbook

## Overview & KPIs
- Goals: more qualified calls/forms from organic; higher share on “Atlanta DUI lawyer/attorney” + county/city DUI queries; stronger CTR; improved E-E-A-T.
- KPIs: GA4 conversions (calls/forms/chat), GSC clicks/CTR by query, Core Web Vitals (LCP/CLS/INP), GBP actions, rankings for priority terms.

## Phase 0 – Setup (Week 1–2)
- Verify Google Search Console; plan/submit XML sitemap (canonical, 200-status URLs only).
- Set up GA4 in a single Google Tag Manager container.
- Enforce HTTPS, one canonical host, consistent trailing slash convention with 301s.
- robots.txt: allow site, disallow admin, point to XML sitemap.
- Pick clean slugs (`/dui-defense`, `/locations/fulton-county`, `/attorneys/name`).

## Phase 1 – Technical Baseline (Week 2–3)
- Canonical tag on every indexable page; avoid duplicate parameter URLs.
- Fix 4xx/5xx; remove redirect chains; correct status codes.
- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms.
  - Preload hero image; set width/height; lazy-load below-the-fold media.
  - Defer non-critical JS; keep bundles small; minimize third-party tags.
  - Use system/self-hosted fonts with `font-display: swap`.
- Mobile-first: responsive layout, no horizontal scroll, tap targets ≥ 48px.
- Accessibility: single H1, semantic headings, labeled form fields, `tel:` links, focus states, alt text, contrast.
- Breadcrumb navigation + BreadcrumbList schema on all pages.

## Phase 2 – Information Architecture (Week 3)
- Top nav: Home | DUI Defense | Charges/Defenses | Case Results | Reviews | Locations | Attorneys | Contact. Deep links live in footer/sitemap.
- Locations: Metro hub → key counties (Fulton, DeKalb, Cobb, Gwinnett, etc.) → select cities only when unique content is possible. No doorway clones.
- Hubs to build: DUI Defense (core), License/ALS, Refusal, Field/Breath/Blood tests, Less-safe, Under-21, CDL/Commercial, BUI, Drug DUI, Reckless/related offenses.

## Phase 3 – Conversion & Trust (Week 3–4)
- Hero on key pages: 24/7 `tel:` link, bold “Free Consultation” button, short form.
- Sticky mobile bar (call/text/consult); large, high-contrast CTAs.
- Trust blocks: case results stats, review snippets, badges/associations, attorney credentials (bar #, prosecutor background).
- Contact page: NAP, async map embed, directions/parking, hours, short form.

## Phase 4 – Content Build (Month 1–2)
- Home: USP, CTA stack, proof blocks, attorney snippet, locations teaser, FAQ snippet (mirrored in schema).
- DUI Hub: GA statutes, process timeline, defenses, penalties, checklist, FAQ.
- County/City pages (each unique): local intro, courts/judges, local process steps, local case result, local review, map/directions (async), NAP/hours, 2–3 internal links to hub/contact.
- Attorney profiles: bios, bar #, prosecutor angle, media/speaking, linked results/reviews.
- Case Results: filterable by charge/location/year; Reviews page with source snippets.
- Blog/Guides cadence: 2–4 per month on GA DUI updates, court changes, notable cases; each links to relevant hub/locations.
- Formatting for scanners/LLMs: clear intro, bullets, short paragraphs, dated updates, cited sources for legal claims.

## Phase 5 – Structured Data (Month 1–2)
- Base: Organization + LocalBusiness/LegalService (name, NAP, hours) matching GBP.
- BreadcrumbList on all pages.
- FAQPage on FAQ sections.
- Review/AggregateRating where policy-compliant and reviews are visible.
- Article/BlogPosting on posts; Speakable on top FAQs/concise answers.
- Validate routinely; remove schema for content not displayed.

## Phase 6 – Google Business Profile (Week 2–4; weekly upkeep)
- Primary category: DUI/Criminal Defense; add relevant secondary categories.
- Services list, hours/holiday hours, UTM on website/appointment links, description with USP.
- Photos monthly (team, office, signage); weekly posts (wins, tips, updates).
- Q&A: seed real FAQs and answer promptly.
- Review program: request after wins/positive calls; respond naturally (no keyword stuffing).
- NAP consistency across site/schema/citations; async map embed.

## Phase 7 – Tagging & Analytics (Week 2–3)
- GA4 via GTM: events for `tel:` click, form submit, sticky-bar clicks, chat start, map click, video play, outbound to review sites; mark conversions.
- Call tracking: dynamic number only on landing pages; single primary number in footer/schema/GBP.
- Verify events in GA4 DebugView; monitor GSC queries/coverage and CWV (CrUX/PSI).

## Phase 8 – Links & Authority (Month 2–6; ongoing)
- Internal: hubs ↔ subpages; blogs → hubs/locations; descriptive anchors; eliminate orphan pages.
- External: bar associations, chambers, sponsorships, guest columns, podcasts, local media/legal commentary. Mark sponsored/UGC links (`rel="sponsored"`/`ugc"`); avoid schemes.

## Phase 9 – UX & Conversion Refinement (Ongoing)
- Keep pages fast/light; reduce layout shift; minimize popups.
- A/B test CTA copy/color/placement; track conversion rates per template.
- Maintain high-contrast, legible typography; ensure forms are short and clear.

## Phase 10 – Maintenance (Monthly)
- Refresh top pages with new results/reviews/facts; prune/merge thin city pages.
- Audit 404s/redirects; validate schema; trim tag bloat; update sitemap.
- Review GBP (hours, posts, Q&A); respond to all reviews.
- Track rankings/CTR for priority terms; investigate drops via GSC; fix CWV regressions.

## AI Surface Optimization (Gemini, ChatGPT, Grok)
- Write concise, factual summaries up top; clear headings/bullets; FAQ blocks (with matching schema).
- Keep “Last updated” and cite sources for legal/statute claims; include author info where relevant.
- Ensure primary content is server-rendered (not hidden behind JS or interstitials).
- Provide transcripts for videos; alt text and descriptive filenames for images.
- Natural language answers to common queries (e.g., “What happens after a DUI arrest in Atlanta?”); avoid keyword stuffing.
- GBP Q&A kept current and accurate; consistent NAP across site/schema/GBP.

## Biggest Needle Movers (if time-limited)
- Fast, conversion-first hero + sticky CTAs; `tel:` links and short forms.
- Unique, high-quality county/city pages with local proof; no doorway duplicates.
- Optimized GBP with active posts, Q&A, and review responses.
- Strong DUI hub + FAQs with schema for rich results.
- Speed/CWV discipline and lean, unified tagging (single GTM/GA4).
