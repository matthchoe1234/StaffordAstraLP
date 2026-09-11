# Graymatter × Rayshawn Jenkins

A local landing-page concept adapted from the Magic Mind Matthew Stafford campaign page, using Graymatter’s Notion brand system and original brand assets.

Open `index.html` directly in your browser. The page, images, fonts, ingredient disclosures, and flavor selector work locally without installing anything.

For a local web preview, run from this folder:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open http://127.0.0.1:4173.

## What is included

- Responsive campaign page featuring Rayshawn Jenkins.
- Original Graymatter logo, Exposure and ABC Monument Grotesk Mono fonts.
- Original Strawberry Lemon, Tangerine, and Cacao product cutouts from Drive.
- Expandable ingredient descriptions.
- Keyboard-accessible flavor selector with links to the corresponding live product variants.
- A section-by-section breakdown in `research/landing-page-breakdown.md`.

All media and fonts are stored locally. External store, science, contact, and policy links require internet access. No analytics, email capture, checkout, or customer data storage has been added.

## Content status

This is a local concept, not a published campaign. The source brief specifies Rayshawn and no visible Steelers logo. The available original athlete image is historical Seattle imagery already used on Graymatter’s website; it does not depict his current team. No team affiliation is asserted in the copy.

The source campaign has a video and a direct athlete testimonial. No usable Rayshawn podcast file or verified verbatim quote was located in the consulted sources. This version uses an athlete image hero and an editorial partnership section. Neither text is presented as a quote from Rayshawn.

Graymatter’s Notion voice standard identifies outstanding claim-review items. Draft benefit language uses asterisks and the supplied statutory disclaimer; it has not received a compliance reviewer’s approval. The page does not claim a completed product trial, an advisory board, or competitor-specific absorption technology.

Font files came from Graymatter’s existing website. The Notion font register has an unresolved Exposure license field; keep this local and confirm deployment coverage before transferring the font files to another host.

## Editing

- `index.html`: page copy and section order.
- `styles.css`: semantic color tokens, typography, spacing, and responsive layouts.
- `app.js`: flavor metadata and product dialog behavior.
- `assets/`: original images, fonts, and source manifests.

For the next competitor adaptation, repeat the workflow documented in the breakdown: inspect the rendered desktop and mobile page, map each section’s purpose, retrieve current brand rules, match real assets to the required compositions, adapt the copy, then verify locally.
