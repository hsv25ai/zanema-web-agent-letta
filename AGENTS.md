Read DESIGN.md before any UI work.

Read PROJECT.md for approved claims and launch blockers. The website is US English; owner communication is Spanish. The corporate site is a SINGLE LONG-SCROLL PAGE: main navigation links are section anchors, not internal marketing pages. Keep it mobile-first at 320–1920px. Never publish confidential operational data. Do not deploy without Henry's approval. Use URL helpers only for static assets; nav points to sections. Never claim the form sends inquiries: it is explicitly a local draft preview until backend and contact details are approved.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
