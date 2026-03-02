

# Portfolio Landing Page — Francisco Izaguirre

## Overview
A modern, minimalist, single-page portfolio website for a Systems Engineering student, optimized for recruiters. Fully static (no backend), with all data driven from local JSON files for easy customization.

## Design & Style
- **Aesthetic**: Clean, professional, minimalist with generous whitespace
- **Colors**: Dark navy headings (#0f172a), blue accent CTAs (#2563eb), soft neutral backgrounds, turquoise micro-accents
- **Typography**: Inter font family, bold headings, clean body text
- **Cards**: Rounded corners (12px), soft shadows, subtle hover animations
- **Animations**: Fade-in on scroll for sections, micro-hover effects on cards
- **Dark mode toggle** (nice-to-have)
- **Mobile-first responsive** design

## Sections (in order)

### 1. Sticky Header
- Name as logo, anchor navigation links (Proyectos, Certificaciones, Sobre mí, Habilidades, Contacto), contact CTA button

### 2. Hero
- Full name, role, one-line value proposition
- Two CTAs: "Ver proyectos" (anchor scroll) and "Contacto" (mailto link)
- Profile avatar/placeholder illustration

### 3. Proyectos (Projects)
- **Featured Projects** (2-3): Large cards with image, problem/solution description, tech stack badges, repo & demo links
- **Other Projects**: Compact card grid
- Click "Leer más" opens a modal with extended details (challenges, learnings, screenshots)
- Data loaded from `/src/data/projects.json`

### 4. Certificaciones (Certifications)
- Grid of certification cards: name, institution, year, badge icon
- Download button for PDF certificates (from `/src/assets/pdf/`)
- Data from `/src/data/certs.json`

### 5. Sobre mí (About Me)
- 2-4 paragraph bio text
- Optional profile photo
- "Descargar CV" button linking to local PDF

### 6. Habilidades Técnicas (Technical Skills)
- Categorized blocks: Languages, Frameworks/Tools, Databases, Fundamentals
- Visual badges with proficiency level labels (Básico / Intermedio / Avanzado)
- Data from `/src/data/skills.json`

### 7. Habilidades Blandas (Soft Skills)
- Up to 6 items with icons and micro-descriptions

### 8. Idiomas (Languages)
- Language + level display (e.g., Español - Nativo, Inglés - Intermedio B1/B2)

### 9. Contacto (Contact)
- Direct links: LinkedIn, GitHub, Email (mailto with prefilled subject), optional phone
- Prominent "Contactar" CTA opening mailto
- "Ver CV" and "Ver GitHub" buttons

### 10. Footer
- Quick navigation links, copyright, "Hecho con React + Tailwind" note

## Data Architecture
- `/src/data/projects.json` — project entries with id, title, short/long descriptions, tech stack, image, repo/demo URLs
- `/src/data/certs.json` — certification entries with name, issuer, year, file path
- `/src/data/skills.json` — categorized skills with proficiency levels
- All example data pre-filled with Francisco Izaguirre's sample content

## Accessibility & SEO
- Semantic HTML (header, main, section, footer, nav)
- Skip-to-main link, visible focus indicators, keyboard navigable
- Alt text on all images, aria-labels on interactive elements
- `prefers-reduced-motion` support
- Meta tags, Open Graph tags, dynamic document title
- Color contrast ≥ 4.5:1

## Key Components
- `Header` — sticky navigation with smooth scroll anchors
- `Hero` — intro section with CTAs
- `ProjectCard` — reusable card component
- `ProjectModal` — detailed project view in a dialog
- `CertCard` — certification card with download
- `SkillBadge` — categorized skill display
- `ContactSection` — social links and CTAs
- `Footer` — navigation and credits
- `SEOHead` — dynamic meta tags via react-helmet or document.title

