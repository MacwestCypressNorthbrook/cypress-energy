# Cypress Energy — Design System

## Aesthetic Direction
**Editorial Industrial** — The confidence of a global energy operator, grounded in Ghanaian identity.
Bold, clean, and unapologetically large. Typography does the heavy lifting. Photography provides soul.
Monochrome structure + a single aggressive accent (burnt orange). No decorative clutter.

---

## Color Tokens

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#DC5817` | CTAs, highlights, hover states, accents |
| `--secondary` | `#13642C` | Success states, secondary badges |
| `--background` | `#ffffff` | Default page background |
| `--foreground` | `#000000` | Body text, headings |
| `--muted` | `#f4f4f5` | Section alternating backgrounds |
| `--muted-foreground` | `#71717a` | Descriptive text, labels |
| `--border` | `#e4e4e7` | Dividers, subtle borders |
| Black | `#000000` | Dark hero cards, contrast sections |
| Off-white | `#F8F9FA` | Alternate section bg (Advantage) |

**Rule:** Never use more than 2 of these colors in any single component. Orange + white. Black + orange. Never orange + green + black together.

---

## Typography

### Fonts
- **Display/Headings:** Inter (var(--font-sans)) — used with `font-black` or `font-bold`
- **Body:** Inter — used with `font-medium`
- **Labels/Overlines:** Inter — used with `font-bold uppercase tracking-widest`

### Scale
| Role | Classes | Example use |
|---|---|---|
| Hero H1 | `text-6xl lg:text-8xl font-black uppercase tracking-tight leading-none` | Page hero heading |
| Section H2 | `text-4xl md:text-6xl font-black uppercase tracking-tight` | Section titles |
| Sub-heading H3 | `text-2xl md:text-3xl font-bold` | Card titles, subsections |
| Body large | `text-lg md:text-xl font-medium leading-relaxed` | Introductory paragraphs |
| Body | `text-base font-medium leading-relaxed` | General content |
| Label | `text-xs font-bold uppercase tracking-widest` | Section labels, overlines |
| Caption | `text-sm font-medium text-muted-foreground` | Metadata, captions |

---

## Spacing Rhythm

- **Section padding:** `py-24` (desktop), `py-16` (mobile)
- **Container:** `max-w-7xl mx-auto px-4`
- **Card inner padding:** `p-10` standard, `p-12 md:p-24` for hero cards
- **Grid gaps:** `gap-8` (cards), `gap-12` (sections), `gap-16` (major sections)
- **Component spacing:** `space-y-6` (text stacks), `space-y-12` (section stacks)

---

## Border Radius

| Role | Value |
|---|---|
| Buttons | `rounded-full` |
| Small cards | `rounded-2xl` (1rem) |
| Standard cards | `rounded-3xl` (1.5rem) |
| Large cards / heroes | `rounded-[2.5rem]` or `rounded-[3rem]` |
| Image overlays | `rounded-[3rem]` |

---

## Buttons

### Primary CTA
```
bg-[#DC5817] hover:bg-[#C44D14] text-white font-bold px-8 h-12 rounded-full
shadow-lg shadow-[#DC5817]/20 transition-all hover:scale-105
```

### Outline CTA
```
border border-border text-foreground hover:border-[#DC5817] hover:text-[#DC5817]
px-8 h-12 rounded-full font-bold transition-all
```

### Ghost / Link style
```
text-[#DC5817] font-bold hover:underline transition-colors
```

### Dark background CTAs (used on black sections)
```
bg-[#DC5817] → primary
border-white/20 text-white hover:bg-white/10 → outline on dark
```

---

## Interaction States (Hover)

- **Text:** color transitions to `#DC5817`
- **Images:** `scale-110` zoom, `duration-700`
- **Cards:** `shadow-xl` increase, no background change (except QHSE performance cards → orange)
- **Arrows:** `rotate-45` or `rotate-[-45deg]`
- **Numbers in cards:** opacity 10% → orange 20% tint

---

## Animation Conventions (GSAP)

### Scroll Reveal (standard)
- Initial: `opacity: 0, y: 40`
- Animate to: `opacity: 1, y: 0`
- Duration: `0.8s`
- Ease: `power2.out`
- Trigger: `"top 85%"` (when element top hits 85% of viewport)
- `once: true` — plays once, stays in final state

### Stagger Children
- Stagger: `0.12s` between children
- Same fade-up pattern
- Use `ScrollTrigger.batch()` for card grids

### Hero Text Reveal
- Heading: `opacity: 0, y: 60` → `opacity: 1, y: 0` with `duration: 1, ease: "power3.out"`
- Subtext: same but `delay: 0.3`
- CTAs: same but `delay: 0.6`

### Counter Animation (QHSE metrics)
- Count from 0 to target value on scroll enter
- Duration: `2s`, ease: `power2.out`

### Section Number Labels
- Large decorative numbers: fade from `opacity: 0` to `opacity: 0.06` with slight `x` shift

### Marquee (Partners)
- CSS-based: `translateX` keyframe, `20s linear infinite`

---

## Component Patterns

### Section Header Pattern
```
[Orange overline label - uppercase tracking-widest]
[Large black heading - font-black uppercase]
[Optional description - muted-foreground]
[Optional CTA - top right or below heading]
```

### Card Pattern
```
bg-white rounded-[2.5rem] p-10 shadow-sm
hover:shadow-xl transition-all duration-500 group
```

### Dark Contrast Section
```
bg-black rounded-[3rem] p-12 md:p-24
[White heading, white/60 body, orange CTA]
```

### Image Treatment
- Aspect ratio: `aspect-square` or `aspect-video`
- Overflow: hidden with rounded corners
- Hover: `scale-110 transition-transform duration-700`
- Optional overlay: `bg-black/40` gradient

### Page Inner Hero
```
Full-width image with bg-black/50 overlay
H1 white font-black + breadcrumb
min-h-[50vh] flex items-end pb-16
```

---

## Page Structure (Inner Pages)

All inner pages follow this wrapper:
```
<Navbar />
<PageHero title="..." image="..." />
<main content sections>
<ContactSidebar /> (on service pages, contact page)
<Footer />
```

---

## Image Assets Available

Located in `/public/images/`:
- `cp-3.jpeg` — offshore crew, hero use
- `1H6A2307-scaled.jpeg` — operations
- `1H6A2589-scaled.jpeg` (×2) — operations
- `1H6A2631-scaled.jpeg` — operations
- `1H6A2643-scaled.jpeg` — safety/equipment
- `1H6A2856-1-scaled.jpeg` — operations
- `1H6A3259-scaled-newwwwww.jpg` — crew/team
- `1H6A3267-scaled-neeeeeew.jpg` — crew/team
- `1H6A3759-scaled.jpg` — operations
- `1bb29c36ab5595291b975f0e0daafc0c-xlarge.jpg` — vessel/offshore
- `389f3831e643a07448afb80f4dd3b8ad-xlarge.jpg` — operations
- `7258b77a67b56c443499f654e54770f0-xlarge.jpg` — operations
- `73224431b07073688c4d4a54a934121c-xlarge.jpg` — operations
- `82ba594d30689685b54ef85f85c0f870-xlarge.jpg` — operations
- `a0ffdfc3098ae4216a73aa885862cbc1-xlarge.jpg` — operations
- `abd9674e79b5d94da4786412caac4e48-xlarge.jpg` — offshore/marine
- `af27e434f4d0097bf679c40135ed4b23-xlarge.jpg` — operations
- `b0d832026d85ab88e1515a1fccb38c06-xlarge.jpg` — operations
- `b3a19530762e323f6328c70a926d6479-xlarge.jpg` — operations
- `b40b3c0685fc74ac5b8bfaceed4f3af3-xlarge.jpg` — operations
- `WhatsApp-Image-2025-03-07-at-11.06.35-2-reset-6.jpeg` — CEO/management
- `WhatsApp-Image-2026-03-10-at-9.24.59-PM-1-2.jpeg` — operations
- `Screenshot-2023-02-28-at-13.53.31.png` — CEO portrait
- `side-area-img-1.png` — sidebar
- `ISO-9001-C621988-0-en-US-20240910_page-0001-scaled.jpg` — ISO cert

Logos:
- `/public/logo.png` — primary logo (header)
- `/public/LOGO-FOOTER-3.png` — footer logo variant

---

## Key Brand Copy

- **Tagline:** "Values that shape our operations."
- **Booking URL:** `https://outlook.office.com/book/TechnicalConsultation4@cypressenergyghana.com/`
- **Phone:** +233 (0) 244 270797
- **Office Phone:** +233 (0) 302 904525
- **Email:** info@cypressenergyghana.com
- **Address:** No 12 Joseph Richard Asiedu St, Accra-Ghana
