# Zanema website — redesign handoff

## Gallery pass — October 16
Henry sent scrolltide.co, navbar.gallery, footer.design, cta.gallery, styles.refero.design, supahero.io, and glass.samasante.com as design sources. Applied the useful pattern only: floating glass nav, full-viewport hero, scroll progress, section reveal, dark contact panel, large typographic footer. Did not install Lenis, GSAP, shaders, or liquid-glass. Review on the live dev server, not the older 4323 build.

## Current revision — October 16, Dycom-led reset
- Rebuilt `index.astro` and replaced accumulated CSS with one responsive system. Removed abstract signal art, prior network illustration and service accordions. Full-bleed photographic hero, concise company intro, photo/blue values split, four visible capabilities, map, safety and local draft form.
- Preserved original logo. USDA photos 0219 and 0277 are public-domain industry references, not Zanema work; sources/crop disclosure in the expandable privacy/credits section. AI-generated imagery remains pending, not claimed complete.
- Fixed duplicate desktop Contact, broken footer credit anchor and nonexistent sitemap reference; removed nonexistent `mcp:test` command. Structural test now checks every rendered hash target.
- Build/typecheck pass. Verified NEW browser target with exact headline `The work behind every connection.` before screenshot. Prior screenshots were stale. Current screenshots: `/tmp/zanema-reset-desktop.png`, `/tmp/zanema-reset-mobile.png`.
- Owner review uses BUILD PREVIEW at `http://127.0.0.1:4323/zanema-web-agent-letta/`; existing development server 4321 showed unhydrated React islands during this test. Build preview isolates the redesign from dev reloads. Log `/tmp/zanema-built-preview.log`. No deployment/commit.
- This revision was implemented directly by the parent; delegated worker failed with usage limit and supplied no implementation.

## Why the redesign
Henry rejected earlier generic business templates, including image swaps without composition changes. Current direction is one scroll page with a cinematic field hero, editorial scale and custom asymmetric service stories; avoid default cards/grids and accordion-heavy layouts.

## Implementation
- Implementation/orchestration: Henry AI Mac, active model selected as `openai-codex/gpt-6.1-sol`. Read-only reference/QA research delegated to a general-purpose agent; its exact model was not exposed, so no model attribution is inferred.
- Astro static one-page website; React islands only for shadcn/Radix mobile Sheet and local inquiry draft. Service scope uses native accessible details/summary.
- Read DESIGN.md and PROJECT.md first. All public copy US English.
- No live MCP query or image generation in this session. Website facts from owner-provided master prompt and explicit approvals, not a claimed fresh audit.
- Hero photograph: a public-domain USDA fiber installation photo, credited on the page and clearly identified as not a Zanema project. SVG network illustration is conceptual, not a completed-job photo. Henry also requests generated imagery; image MCP is unavailable in this session and no AI generation is claimed. No invented portfolio. Original logo source untouched; clean derivative removes obsolete descriptor only.
- Previous Flowbite and unused serif/Geist fonts removed. shadcn generator is a development-only dependency.
- No commit/push/deploy performed for the redesign.

## Preview
`npm run dev -- --host 127.0.0.1 --port 4321`
Open `http://127.0.0.1:4321/zanema-web-agent-letta/`.
For owner review, launch detached with logs; ordinary tool background jobs time out and kill the server. Verify HTTP response before sharing.

## Checks
`npm test`: builds all pages and checks internal URLs, local assets, service anchors, H1 and metadata.
Browser QA uses Chrome CDP in an isolated temporary profile. Capture and inspect desktop/mobile; check Sheet open/Escape/focus, accordion, valid local inquiry draft, no overflow and runtime errors.

## Before production
Confirm actual contact, form delivery + spam controls, privacy details, safety credentials/practices, service scope and final original project photos. Current form explicitly prepares a local-only draft; no network submission. Mission/vision not represented as officially adopted. Client names approved; no logos, endorsement, or invented contract hierarchy.

## Tooling security
Run `npm audit --omit=dev` separately from full audit. The shadcn CLI currently brings development-only transitive alerts; do not force-downgrade the generator or claim the entire dependency tree is clear. Static production dependencies were checked separately.
