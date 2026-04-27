# ConglomerateIT Next.js Rebuild Status

Updated: 2026-04-28

## Modern Stack Now Present

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion dependency retained for motion storytelling
- Lucide React icons
- FormSubmit contact/application submissions
- Google Tag Manager, GA4, and Google site verification retained

## Preserved Business Information

The rebuild keeps the extracted company information from:

- `01_COMPANY_PROFILE.md`
- `02_SERVICES_CATALOG.md`
- `03_LEGAL_POLICIES.md`
- `04_DESIGN_SYSTEM.md`
- `05_NAVIGATION_STRUCTURE.md`

Core retained data includes:

- CGIT meaning: Creative, Growth, Innovation, Technology
- Tagline: "Transform Your Business with Tomorrow's Technology, Today!"
- AI-first/global delivery positioning from the SRS
- Services, sub-services, and page route structure
- Executive hiring structure
- GCC / Conglomerate Ascend details
- Offices and contact email
- SOC 2 and ISO 27001 trust messaging
- Privacy, terms, legal, compliance, and acceptable-use policy content
- Form endpoint: `https://formsubmit.co/ajax/conglomerate.it@gmail.com`
- Tracking IDs: `GTM-WP665FJ5`, `G-5SSFXDZDT9`, `Oj1iurjqPIavlR5UNIqJlOJudTtHz30QieAaP6b6TSU`

## SRS-Critical Pages Added

- `/services`
- `/solutions`
- `/delivery-models`
- `/case-studies`
- `/insights`
- `/insights/blog`
- `/insights/careers`
- `/legal`
- `/legal/privacy-policy`
- `/legal/terms-of-use`
- `/legal/legal-info`
- `/legal/compliance`
- `/legal/acceptable-use`

## Conversion Improvements Added

- Homepage shifted toward "AI-first global delivery partner" positioning
- Sticky "Talk to an expert" CTA
- Case study preview section
- Differentiation section focused on AI, global delivery, speed, and compliance
- Contact form expanded with budget and use-case fields
- Careers page includes role listings and an application form
- Sitemap and robots metadata routes added
- Google verification file added to `public/`

## Important Content Caveat

The case studies are marked as representative. They are structured around the SRS requirement:

- Problem
- Solution
- Tech stack
- Measurable outcomes

Replace these with approved client case studies, logos, testimonials, and exact metrics before final production launch.

## Current Environment Blocker

Node.js/npm are not installed in the current shell, so the app could not be installed, built, linted, or started locally from this environment.

Once Node is available, run:

```bash
npm install
npm run build
npm run dev
```
