# Heritage at Stonebridge - Las Vegas 55+ Communities Website

Built with [Next.js](https://nextjs.org/) (App Router), React, TypeScript, and Tailwind CSS.

---

## Project Structure

```
├── public/                # Static assets (fonts, favicon, manifest, etc.)
└── src/
    ├── app/                # Next.js App Router routes, layouts, and route handlers
    │   ├── layout.tsx      # Root layout (header, footer, global <head> tags)
    │   ├── page.tsx        # Homepage
    │   ├── globals.css     # Global styles (Tailwind + custom CSS)
    │   ├── robots.txt/     # Dynamic robots.txt route handler
    │   ├── sitemap*.xml/   # Dynamic XML sitemap route handlers
    │   └── <slug>/page.tsx # One folder per route
    ├── components/         # Reusable React components
    │   ├── real-estate/    # Property/search/RealScout widget components
    │   ├── luxury/         # Luxury-page specific components
    │   ├── seo/            # SEO/structured-data helper components
    │   ├── optimization/   # Image/caching optimization helpers
    │   ├── performance/    # Performance monitoring helpers
    │   ├── footer/
    │   └── starter/header/
    ├── config/             # Static content configuration
    ├── lib/                # Server-side utilities (e.g. AI content generation)
    ├── types/              # Shared TypeScript types (incl. RealScout custom-element JSX typings)
    └── utils/              # Framework-agnostic helper functions
```

- `src/app`: File-based routing via the [Next.js App Router](https://nextjs.org/docs/app). Each folder under `src/app` maps to a URL segment, with `page.tsx` as the page component and `route.ts` for API/route handlers (e.g. `robots.txt`, `sitemap.xml`).
- `src/components`: Shared React components, organized by feature area.
- `public`: Static assets served as-is from the site root.

## Development

```shell
pnpm install
pnpm dev
```

This starts the Next.js dev server at [http://localhost:3000](http://localhost:3000).

## Production Build

```shell
pnpm build
pnpm start
```

`pnpm build` runs Next.js's production build (including type-checking and linting). `pnpm start` serves the compiled production build locally.

## Environment Variables

- `CEREBRAS_API_KEY` — optional. Powers the AI-generated content sections (luxury homes, community guides, market reports, etc. — see `src/lib/ai-content-generator.ts`). When unset, those pages fall back to static placeholder content instead of failing.

## Deployment

This project deploys to [Vercel](https://vercel.com/) using its zero-config Next.js support. See `vercel.json` for custom security headers.
