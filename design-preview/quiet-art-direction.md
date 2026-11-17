# Quiet bakery redesign

Created with the built-in image generation tool, using the approved four-screen concept as the style reference. Optimized with Sharp as WebP; original earlier artwork is retained.

## Production assets

- `public/art/storefront-quiet.webp`
- `public/art/interior-quiet.webp`

## Prompt set

Both prompts requested standalone landscape 3:2 production website backgrounds, restrained brown ink outlines and pale watercolor on cream paper, no lettering, no browser UI, no screen borders, and deliberately sparse props. Reference: the approved four-screen concept generated November 16, 2026.

### Storefront

Reproduce only the top-left storefront artwork: muted sage double doors, peach-and-cream striped awning with blank center valance for HTML title, one broad pastry window on each side, one olive tree left, one blank chalkboard right. No vines, lamps, shelves, people or extra props. Minimal brickwork, generous cream breathing room. Geometry requested: awning x18–82%, y8–32%; blank cream valance y23–32%; door x41–59%, y33–84%; windows x23–40% and x60–77%, y34–74%; olive tree x6–18%; chalkboard x82–94%; ground y84%; bottom 13% nearly empty for HTML entrance CTA. Natural editorial illustration, selective light watercolor, subtle grain, clean shapes.

### Interior

Reproduce only the top-right bakery interior: friendly young Chinese woman with black bun, cream shirt and sage apron at x28%, head y20%, torso ending y60%; one pendant x47%, y0–24%. Counter x3–73%, y59–100%, glass top y59–82%, sage base y83–100%. Exactly three pastries at x18%,39%,59%, y74%: cinnamon roll, croissant, strawberry tart. Leave room at y82% for HTML project label. Two framed pictures at x65–80% and x82–97%, y25–47%: New York skyline and Cornell tower. Blank wall y8–22% for HTML Experience sign. One cafe chair, round table and coffee cup at x77–99%, y61–98%. No shelves, plants, flowers, jars, bricks, tiles, utensils or extra clutter. Full composition visible, quiet editorial ink and pale watercolor.

## Verification

- TypeScript check and production build passed.
- Manually checked the entrance, project link, experience wall, connection dialog and hobby magnet updates in the connected browser.
- Layout checks at 320px, 768px and 1366px found no horizontal overflow on Storefront, Bakery, About or Experience. Storefront and Bakery fit the viewport height.
- Existing Playwright suite could not run: the installed Playwright Chromium binary is missing and the sandbox could not probe/start the local server. Used the connected browser for visual and interaction verification instead.
- Screenshot: `design-preview/implemented-quiet-bakery.png`.
