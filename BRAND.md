# Veyra Studio

Brisify's local design has been rebranded as Veyra Studio, a fictional independent
brand and digital design studio. Existing layouts, typography, class names,
media compositions and GSAP timeline timing are retained.

## Editable Identity

`src/data/siteConfig.ts` owns the brand name, metadata, contact placeholders,
logo path and section copy. `src/styles/theme.css` holds the working colour
tokens. `src/styles/brand.css` adds the wordmark layout and surface-specific
mint/coral accents. Internal `brisify` names remain implementation namespaces,
not visible branding.

- Ink: #171E24
- Cool white: #F7F9FA
- Mint: #A6E8CE
- Coral: #F29B86
- Body copy: #57666B

## Demo Content

Team identities, project briefs, testimonials, fees and figures are illustrative,
not verified client claims. Existing portfolio imagery and footage are retained
as design references, not presented as evidence of commissioned Veyra work.
`hello@veyra.example` is a reserved placeholder address; the 202-555-0148 phone
number is fictional. Replace these before publication. Forms remain frontend
only. Search indexing stays disabled. Original design attribution is retained.

## Generated Brand Mark

Asset: `public/brand/veyra-mark.png`. Generated with built-in ImageGen.

Prompt: Create one original transparent website brand symbol for Veyra Studio:
an abstract interlocking ribbon V, suggesting open pages or converging creative
paths. Two broad offset strokes, ingenious negative space, recognisable at 32px.
Ink charcoal #171E24, one mint #A6E8CE inset accent. One tightly framed centred
symbol. Crisp edges; no lettering, mockup, frame, shadows, texture or additional
variations. Transparent background. The output is paired with live text in
`BrandLogo.tsx` so the name remains sharp and editable.
