# TurnosPlus rebrand + launch checklist

Objective: rebrand the landing from DopperCut to TurnosPlus using `../assets` and close the launch checklist.
Branch: `feat/turnosplus-rebrand`. Delivery: ask-on-risk. Test runner: none (no test suite); checks = `pnpm build` + built-output link/meta scan.

## Specs

- S1 Identity: "hay que cambiar la identidad ya que ahora se llamara TurnosPlus, dentro de la carpetas assets, hay imagenes, css, favicon, etc." Name, logos, favicon, palette and tokens from `assets/` (brand system v1).
- S2 Domains/accounts: "A, cambia todo" → `turnosplus.com`, `app.turnosplus.com`, `hola@turnosplus.com`, `@turnosplus`, WhatsApp text.
- S3 Skills: "veas todas las skills dentro de doppercut-landing-page y las USES A TODAS" (applicable ones; non-applicable reported with reason).
- S4 Checklist, verbatim: "Aviso legal", "Política de privacidad", "Aviso de cookies", "Forzar HTTPS", "Meta títulos y descripciones", "Datos estructurados", "Sitemap y robots.txt", "Ficha de Google", "Favicon", "Texto alternativo en las imágenes", "Imágenes comprimidas", "Velocidad de carga optimizada", "Contraste de colores", "Que se vea bien en el móvil", "Página 404 personalizada", "Enlaces rotos arreglados", "Formularios protegidos contra spam", "Botón de WhatsApp visible", "Analítica instalada", "Una sola llamada a la acción (CTA)".

## Tasks

- T1 S1,S2 brand tokens, assets, logos, favicon, manifest, name/domain replacement — inline — done 96fcd3b
- T2 S4 SEO: meta, hreflang/lang, structured data, sitemap/robots, OG image — inline — done 96fcd3b
- T3 S4 legal: aviso legal, privacidad, cookies page + notice — inline — done 6352ca4
- T4 S4 UX: mobile nav, contrast, single CTA, WhatsApp, forms anti-spam, 404, alt, perf, motion — inline — done 96fcd3b
- T5 S4 HTTPS/security headers (vercel.json) — inline — done 82d0ed5
- T6 verify: build + link scan — inline — done (85 pages, 0 problems; desktop + 390px renders checked)

## Log

- L1 (2026-11-06) "Necesito que veas todas las skills dentro de doppercut-landing-page y las USES A TODAS. Tambien revisas todo dentro de la carpeta assets, hay que cambiar la identidad ya que ahora se llamara TurnosPlus, dentro de la carpetas assets, hay imagenes, css, favicon, etc. para este nuevo cambio de identidad"
- L2 (2026-11-06) "A, cambia todo, ya despues comrpo el dominio, lo que si tambien me gustaría mejorar UN MONTON lo maximo posible todo esto" + checklist (S4).
- L3 Route: all inline (no writer trigger: one coherent rebrand, shared files Layout/content.ts).
- L4 (2026-11-07) Verified: pnpm build OK; scan of 85 built pages: no broken internal links, no 'dopper', valid JSON-LD, 1 h1, titles <=70, labelled inputs. Pending user: new product screenshots (images still show DopperCut), legal CUIT/address, domain purchase, Search Console token, Google Business Profile.
