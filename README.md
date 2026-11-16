# Lauren's Bakery

An illustrated, interactive portfolio built with Next.js App Router, React, TypeScript, and custom CSS. The bakery includes a Tree of Thoughts project recipe, a framed experience wall, and a single-page About kitchen with interactive fridge magnets.

## Run locally

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. The source is in `src/`; earlier design explorations remain in `design-preview/` and are not part of the deployed app.

## Check the app

```sh
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

The browser suite covers the entrance, project navigation, browser Back, direct links, the About page and fridge magnets, experience and teaching content, research sample sizes, reduced motion, illustration loading, and mobile overflow. Run it against an existing server with `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000 npm run test:e2e`.

## Deploy on Vercel

1. Push this repository to your GitHub account.
2. Import it into Vercel, with this repository root as the Root Directory.
3. Keep the detected **Next.js** preset, `npm run build` build command, and default output directory. Use Node.js 22 LTS (or another version supported by the installed Next.js release).
4. Deploy. No environment variables, database, or external API are needed.

This milestone is configured as a draft with `robots: { index: false, follow: false }` in `src/app/layout.tsx`. Change that before the public portfolio launch. `noindex` is a crawler instruction, not access protection; use Vercel deployment protection if the draft needs restricted access.

## Update the content

- Project copy and ingredients: `src/content/projects.ts`.
- Experience and teaching: `src/content/experience.ts`.
- Biography and fridge-magnet stories: `src/content/about.ts`.
- Professional links and graduation timeline: `src/content/profile.ts`.
- Bakery hotspots and decorative pastries: `src/components/Bakery.tsx`.
- Entrance and door transition: `src/components/Storefront.tsx`.
- Visual styling and responsive layout: `src/app/globals.css`.
- Production scene artwork: `public/art/`.

The Tree of Thoughts recipe credits the three-person course team, links to its verified public repository, and includes the supplied report and poster. The 50-puzzle main experiment and 20-puzzle evaluator ablation are labeled separately. Personal contribution copy follows the supplied résumé; team results are identified as team results.

The collection page and the portfolio case study have been removed from the visitor flow. Their old URLs redirect to the bakery, and Projects navigation leads straight to the counter. Only the Tree of Thoughts pastry is clickable; the other pastries are decorative. There is no site footer. Hobby descriptions are placeholders, editable in `src/content/about.ts`.

The experience wall includes only Rippling, Cornell AppDev, and Psyflo. Teaching is a prominent section within AppDev, with a direct classroom link on the experience wall. The incoming June 2027 New York role is separate from the completed 2026 internship. The 2027 graduation update takes precedence over the résumé’s older date. The original résumé PDF is not served by the app.

The About page opens from the baker and keeps the biography and all six interests on `/about`. The magnets update a shared, keyboard-accessible note without navigating to another page. A full résumé page and any additional project recipes remain future work.

## Artwork and fonts

The storefront, bakery, and kitchen scene art was created with the built-in image-generation tool using Lauren’s selected design as the reference. The scenes contain no interface text: titles, labels, buttons and the entire notebook are HTML. The featured croissant is a separate transparent watercolor image. Other pastries are independent textured vector components, ready for additional project artwork.

Full art prompts and source paths: `design-preview/milestone-art-prompts.md`. Optimized production images are local JPEGs, served through Next.js Image optimization. Fonts are self-hosted, with system fallbacks, so builds make no requests to Google Fonts.
