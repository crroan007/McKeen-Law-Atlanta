# Core 30 Page Map (Execution Tracker)

Purpose: build entity relevance for DUI/Criminal Defense + Atlanta metro. Use this to track which URLs are live (via `/app/[slug]`) and which need deeper copy or custom templates.

| Priority | Slug | Target Query | Status | Notes |
| --- | --- | --- | --- | --- |
| 1 | dui-defense | “DUI lawyer Atlanta” | Live (content map) | Primary GBP landing; strong CTA. |
| 1 | als-hearings | “ALS hearing lawyer Atlanta” | Live (content map) | Deadline-focused copy. |
| 1 | refusal-defense | “DUI refusal lawyer Atlanta” | Live (content map) | Implied consent focus. |
| 1 | field-sobriety-tests | “Field sobriety test challenge Atlanta” | Live (content map) | Checkpoints + video. |
| 1 | dui-drugs | “DUI drugs lawyer Atlanta” | Live (content map) | Lab/DRE focus. |
| 1 | cdl-dui | “CDL DUI lawyer Atlanta” | Live (content map) | CDL thresholds; employer impact. |
| 1 | under-21-dui | “Under 21 DUI lawyer Atlanta” | Live (content map) | Youth mitigation. |
| 1 | bui-defense | “BUI lawyer Georgia” | Live (content map) | Boat stops/testing. |
| 1 | dui-alcohol | “Per se DUI Atlanta” | Live (content map) | Breath/blood focus. |
| 1 | emergency-dui | “24/7 DUI lawyer Atlanta” | Live (content map) | Rapid response/ALS. |
| 1 | license-suspension | “License suspension DUI Atlanta” | Live (content map) | ALS + permits. |
| 2 | reckless-driving | “Reckless driving lawyer Atlanta” | Live (content map) | License/insurance angles. |
| 2 | dui-serious-injury | “DUI serious injury lawyer Atlanta” | Live (content map) | High-stakes defense. |
| 2 | dui-child-endangerment | “DUI child endangerment ATL” | Live (content map) | Family-safe mitigation. |
| 3 | locations/fulton | “Fulton County DUI lawyer” | Live (content map) | Add async map embed later. |
| 3 | locations/dekalb | “Dekalb County DUI lawyer” | Live (content map) | Add async map embed later. |
| 3 | locations/cobb | “Cobb County DUI lawyer” | Live (content map) | Add async map embed later. |
| 3 | locations/gwinnett | “Gwinnett County DUI lawyer” | Live (content map) | Add async map embed later. |
| 3 | lesser traffic | “Super speeder lawyer Atlanta” | Generic fallback | Consider content map for top traffic terms. |
| 3 | probation-violation | “Probation violation lawyer Atlanta” | Fallback template | Add tailored content map entry. |

How to extend:
- Add content to `lib/servicePages.ts` for each new slug (title, meta, intro, highlights, steps, FAQs, CTA).
- If creating county pages, use `/locations/[city]` or new static pages under `/locations/` with unique court/judge/process details plus async map embed.
- Re-run sitemap entries in `app/sitemap.ts` when adding new top-priority slugs.
