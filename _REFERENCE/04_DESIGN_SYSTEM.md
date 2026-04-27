# ConglomerateIT — Design System & Brand Guide

## Color Palette

| Name | Hex | Usage |
|---|---|---|
| Primary Blue | `#214daa` | Buttons, links, accents, gradients |
| Primary Red | `#f40000` | Accents, CTA buttons, gradients, borders |
| Dark Red (hover) | `#c30000` | Button hover states |
| Dark Blue (hover) | `#1a3e88` | Button hover states |
| Secondary Blue | `#2f328b` | Wave items, circles, decoration |
| Deep Blue | `#283c9d` | Ring/circle decorations |
| Black | `#000000` | Background |
| Dark Surface | `#080d18` | Card backgrounds |
| Card Background | `#0d1524` | Contact page cards |
| White | `#ffffff` | Text, nav dropdowns |
| Light Gray | `#d0d0d0` | Muted body text |
| Muted | `rgba(255,255,255,0.55)` | Secondary text on dark |
| Footer Background | `#0a0a0a` | Footer |
| Footer Heading Red | `#cc0000` | Footer section headings |

### Brand Gradient (Primary)
```css
background: linear-gradient(to right, #214daa, #f40000);
```

### Brand Gradient (135deg — buttons)
```css
background: linear-gradient(135deg, #214daa, #f40000);
```

### Brand Gradient (hover reverse)
```css
background: linear-gradient(to right, #c30000, #1a3e88);
```

### Text Gradient
```css
background: linear-gradient(to right, #214daa 0%, #f40000 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## Typography

### Primary Fonts

| Font | Weights | Usage |
|---|---|---|
| **Teko** | 300, 400, 500, 600, 700 | Display headings, hero text, section titles, nav |
| **Roboto** | 100, 300, 400, 500, 700, 900 | Body text, paragraphs, nav items |
| **Open Sans** | 300, 400, 500, 600, 700 | Body text (contact page), general |
| **Inter** | 400, 500, 600, 700 | Supplementary |
| **Poppins** | 400, 600, 700 | Supplementary |

### Font Scale

| Element | Size | Weight | Font |
|---|---|---|---|
| Hero Heading | 4rem (desktop) / 2.5rem (mobile) | 700 | Teko |
| Section Heading (Teko) | 3–4rem | 700 | Teko |
| Nav Links | 1.05rem | 400–500 | Roboto |
| Body Text | 1.1–1.2rem | 400 | Roboto |
| Small Text | 0.78–0.82rem | 400–500 | Open Sans / Segoe UI |
| Footer Headings | 0.72rem | 700 | Segoe UI |
| Footer Links | 0.78rem | 500 | Segoe UI |
| CTA Button | 1.1–1.4rem | 600 | Teko |
| Badge / Tag | 0.7–0.8rem | 600 | Teko |

---

## Key UI Components

### CTA Button (Primary)
```css
background: linear-gradient(to right, #214daa, #f40000);
color: white;
border: none;
padding: 14px 46px;
border-radius: 50px;
font-size: 1.4rem;
font-weight: 600;
```
**Hover:**
```css
background: linear-gradient(to right, #c30000, #1a3e88);
transform: translateY(-3px);
```

### Navbar
- Fixed top, `z-index: 9995`
- Background: `#000`
- Height: 78px desktop (82px at 1400px+, 86px at 1600px+, 90px at 1920px+)
- Mobile breakpoint: 991px → hamburger menu
- Gradient underline on hover: `linear-gradient(to right, #214daa, #f40000)`
- Contact Us button: pill shape with gradient border, black fill

### Mega Menu
- White background with blue→red gradient top border (3px)
- `border-radius: 0 0 20px 20px`
- Box shadow: `0 12px 48px rgba(0,0,0,0.22)`
- Sidebar: `#f7f8fc` background, 260px wide
- Active sidebar item: blue left border `#214daa`

### Cards (Service/Content)
- Background: `rgba(255,255,255,0.02–0.04)`
- Border: `1px solid rgba(255,255,255,0.07–0.1)`
- Border-radius: 16–24px
- Hover: `translateY(-6px)` + gradient top border appears

### Footer
- Background: `#0a0a0a`
- Border-top: `1px solid #cc0000`
- Section headings: `#cc0000`, font-size `0.72rem`, letter-spacing `2.5px`
- Links: `#d0d0d0` → hover `#cc0000`

### Wave Items (Homepage CGIT Letters)
- Background: `#2f328b`
- `border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%`
- Animation: morph between blob shapes (waveMotion 6s infinite)

### Counter Section
- Animated number count-up on scroll
- Stats: Countries (4), Projects (500), Years (12), Client Retention (95%)

---

## Animations

| Animation | Usage |
|---|---|
| `fadeUp` | Scroll reveal for cards, hero text |
| `gradientFlow` | Animated background gradient |
| `waveMotion` | Morphing blob shapes for C-G-I-T letters |
| `rotateCW / rotateCCW` | Orbiting service cards |
| `floatUpDown` | Hero visual floating effect |
| `spinRing` | Conic gradient rotating ring (contact page) |
| `pulse` | Pulsing dot markers on map |
| `ripple` | Ripple effect on location markers |
| `gridDrift` | Subtle grid background drift |
| `glow` | Radial glow background element |

---

## Logo Files

| File | Usage |
|---|---|
| `images/CGIT_LLC horizontal.png` | Main navbar logo (horizontal) |
| `assets/images/black-logo.png` | Favicon, alternate logo (dark bg) |
| `assets/images/white-logo.png` | Light background variant |
| `favicon.png` | Browser favicon |
| `images/LOGO CGIT.mp4` | Animated logo video (contact page hero) |

---

## Key Images (assets/images/)

| File | Usage |
|---|---|
| `banner-bg.jpg` | OG image / social sharing background |
| `black-logo.png` | Brand logo (dark theme) |
| `white-logo.png` | Brand logo (light theme) |
| `functional testing.jpg` | QA service image |
| `heading-bg.jpg` | Page heading backgrounds |
| `listing-01.jpg` through `listing-06.jpg` | Service listing images |
| `tabs-image-01.jpg` through `tabs-image-05.jpg` | Tab section images |
| `listing-icon-01.png` through `listing-icon-03.png` | Service icons |
| `search-icon-01.png` through `search-icon-05.png` | Search/filter icons |

### Other Key Image Files (root images/ folder)
| File | Usage |
|---|---|
| `images/CGIT_LLC horizontal.png` | Navbar logo |
| `images/LOGO CGIT.mp4` | Contact page hero video |
| `images/gradientmap.png` | World map with gradient (contact / presence section) |
| `images/mapp.png` / `mapp.png` | Map image |
| `images/SOCC .png` | SOC 2 Compliance badge |
| `images/ISO logo.png` | ISO 27001 Certification badge |
| `images/aboutus_images/` | About page section images |

---

## Certification Badge Images

| Badge | File |
|---|---|
| SOC 2 Compliant (AICPA) | `images/SOCC .png` |
| ISO 27001:2013 | `images/ISO logo.png` |

### Previously referenced certification logos (commented out in index.php)
- `assets/images/comptia.png` — CompTIA
- `assets/images/Everify.png` — E-Verify
- `assets/images/cisco.png` — Cisco
- `assets/images/ms-partner.png` — Microsoft Partner
- `assets/images/Google_partner.png` — Google Partner
- `assets/images/icons8-sap-logo-480.png` — SAP
- `assets/images/ISO.png` — ISO (alternate)

---

## Service Page Image References
| Service | Image |
|---|---|
| QA & QE | `assets/images/services/QAA.webp` |
| Infrastructure | `assets/images/services/infrastructure.png` |
| Software Development | `assets/images/services/software development.jpeg` |
| ERP Platform | `assets/images/services/erp platform.png` |
| Data Analytics | `assets/images/services/data analytics.png` |

---

## About Page Images (images/aboutus_images/)
| Image | Core Value |
|---|---|
| `timemachine.jpg` | TimeMachine value |
| `Stratagic thinking.jpg` | Strategic Thinking value |
| `process excellence.jpg` | Process Excellence value |
| `quality.jpg` | Quality value |

---

## External Libraries Used

| Library | Version / CDN |
|---|---|
| Bootstrap | 5.3.0 (JS) / 4.5.2 (CSS) |
| Font Awesome | 6.6.0 |
| AOS (Animate on Scroll) | 2.3.1 |
| Owl Carousel 2 | 2.3.4 |
| jQuery | 3.5.1 / 3.6.0 |
| Popper.js | 2.9.1 |
| Google Fonts | Teko, Roboto, Inter, Open Sans, Poppins |
