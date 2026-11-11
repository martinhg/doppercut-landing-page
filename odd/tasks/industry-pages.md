# Industry pages

Objective: a strip of industries under the home hero plus one landing page per industry, in es (latam, turno for ar/uy), pt and en.
Branch: feat/turnosplus-rebrand · Delivery: ask-on-risk · Test runner: none (pnpm build + check.py + Playwright captures).

## Specs

- S1. User request (L1): "la tira mas paginas por rubro, pero agrega rubros, tipo nutricion, pscologia, podologia, salon de maquillaje, centro estetica, spa, centro de rehabiltiacion o centro especiales (para chicos con discapacidad), etc no se que mas se te ocurren".
- S2. Strip under the home hero ("tira"): every industry with icon and name, each linking to its page. Icons instead of photos (no own photos; assumption accepted in proposal).
- S3. One page per industry, per country, in the country language: own title, pains, example services, benefits, FAQ (with FAQPage schema), CTA to /contacto. Benefits only describe features the site already promises (online booking 24/7, WhatsApp reminders, cash and commissions, client database, shareable link, setup done for you, 14-day trial). No invented features (no clinical records, payments, inventory).
- S4. Industries (20): barberías, peluquerías, salones de belleza, centros de estética, spa y masajes, uñas, cejas y pestañas, maquillaje, depilación, tatuajes y piercing, nutrición, psicología, kinesiología y fisioterapia, podología, centros de rehabilitación, centros terapéuticos infantiles (chicos con discapacidad), odontología, consultorios médicos, veterinarias y peluquería canina, entrenamiento personal, pilates y yoga.
- S5. Argentina and Uruguay read "turno" instead of "cita" on every new page (existing regional phrase mechanism).
- S6. Footer gets a "Rubros" column; an index page lists all industries.

## Tasks

| ID | Specs | Route | Status | Evidence |
|----|-------|-------|--------|----------|
| T1 | S2 S3 S5 S6 | inline (parent): data model, routes, template, strip, footer, index, es reference copy (2 industries) | done | build OK, localized hreflang/country switch |
| T2 | S3 S4 S5 | delegated writer (es copy, 18 industries); parallel with T3/T4, disjoint file | done | validator OK 20/20; parent removed unpromised claims (manual entry, visit history) |
| T3 | S3 S4 | delegated writer (en copy); parallel | done | validator OK 20/20 |
| T4 | S3 S4 | delegated writer (pt copy); parallel | done | validator OK 20/20; parent removed 'pacotes' and visit history |
| T5 | S1-S6 | inline: build, scan, no "cita" in ar/uy, captures, commit | done | 337 pages no problems; 0 'cita' in ar/uy; captures 1440/390 |

Route evidence: T2-T4 are three independent units with disjoint files (one copy file per language), each ~20 pages of copy, launched together (Writer trigger a); the parent context is also long (backstop b).

## Log

- L1 (2026-11-07, user, verbatim): "la tira mas paginas por rubro, pero agrega rubros, tipo nutricion, pscologia, podologia, salon de maquillaje, centro estetica, spa, centro de rehabiltiacion o centro especiales (para chicos con discapacidad), etc no se que mas se te ocurren"
- L2: Reference studied: agendapro.com/es (14 industry photo cards under hero linking to signup; per-industry pages like /es/barberia/software-para-barberias with features + FAQ). TurnosPlus uses icons and links each card to its own page.
- L3: Writers done. Parent removed claims the product never makes (front desk entering bookings by hand, visit history, packages) and two duplicated FAQs. Titles shortened to `<seoTitle> | TurnosPlus` (country name pushed 40 titles past 70 chars). Mobile strip turned into a swipeable row (20 wrapped chips filled a whole screen under the hero).
- L4: Engram mirror pending: mem_save blocked by the hook identity error all session.
