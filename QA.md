# One-page redesign QA

## Verified October 16 — field reset (supersedes prior browser notes)
- `npm run check`: 18 files, zero errors/warnings/hints. `npm test`: build and all hash-target/asset checks pass.
- Fresh dedicated Chrome target on BUILD preview `http://127.0.0.1:4323/zanema-web-agent-letta/`, matched current headline and capability DOM before testing.
- 320, 390, 768, 1024, 1440, 1920 widths: no horizontal overflow, no broken images. Desktop/mobile full screenshots inspected. Lazy images forced eager only in QA DOM for capture. Animations disabled only in QA DOM for deterministic clicks; click waits for two layout frames.
- Mobile Sheet opens; Escape closes and returns focus; Services anchor navigates/closes; valid local inquiry produces a not-sent draft; credits link opens disclosure. No captured runtime exceptions.
- Evidence: `/tmp/zanema-reset-qa.json`, `/tmp/zanema-reset-desktop.png`, `/tmp/zanema-reset-mobile.png`, test driver `/tmp/zanema-reset-qa.mjs`.
- Development server 4321 failed hydration readiness; use compiled preview 4323 for this review. No claim that the old development server is fixed.

Local preview only; not approved for production.

## Automated checks
- `npm run check`: Astro/React type checks, including zero errors, zero warnings and zero hints on last pass before this one-page revision.
- `npm test`: build plus one-page semantic, section, image and asset checks. Run after changes.
- Production dependency audit (`npm audit --omit=dev`) previously showed zero findings. Full development audit had seven high-severity transitive issues under the shadcn generator; generator is dev-only.

## Browser checks (prior build)
Chrome desktop and 390px/320px mobile; old multi-page navigation, keyboard menu focus, accordion, local inquiry draft. No JS exceptions or horizontal overflow in those checked pages.

## Browser checks (single-page revision)
Six widths from 320–1920px, no horizontal overflow; mobile section links navigate, close the Sheet, and restore trigger focus. The hero and US map render; USDA photo is credited and not presented as Zanema work. Type check/build and section checks pass.

## Launch blockers
User-requested AI-generated art is still pending: no Azure image MCP tool/credential was exposed in this conversation. Current hero photo is an authentic public-domain USDA field image, not AI-generated and not a Zanema case study. Approved contact and secure form delivery/spam handling/privacy notice, final service scope and safety practices, production domain/SEO review, user approval are also required.
