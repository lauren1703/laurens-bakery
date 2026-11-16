# Portfolio verification

Updated November 16, 2026.

## Latest design simplification

- `npm run typecheck` and `npm run build`: passed.
- Storefront: “Lauren's Bakery” is centered within the awning; only one unboxed “Enter bakery” call to action remains. “View my work” is absent.
- All footer elements are removed.
- Bakery: updated baker illustration is served as `interior-v2.jpg`; Experience has a visible white sign. Only Tree of Thoughts is a clickable pastry. There are no dialogs or placeholder pop-ups.
- Portfolio case study is removed. `/projects/boulangerie` redirects to `/bakery`, and `/projects` redirects to the counter.
- Experience: subtitle is “my experiences”; the picture-wall eyebrow, three frame captions, and deep-learning CTA are removed.
- Tree of Thoughts: poster is full-width above the text (1030px in a 1128px book at the tested desktop size). Its full-resolution link remains available. The selected redundant contribution note is removed, while team names remain credited.
- About: requested welcome sentence and fridge-jump link are removed. All hobby descriptions are placeholders. Desktop fridge layout is inset; at 390px all magnet bounds fit inside the fridge with no horizontal page overflow.
- The revised storefront, bakery, poster, experience page, and fridge were checked in the connected browser.

The Playwright suite in `tests/` is updated for the simplified flow and content. Test collection is checked; the suite itself has not been executed. Reduced-motion support is implemented but was not separately exercised in the connected browser.

This is a local implementation, not a Vercel deployment. Vercel setup steps are in README.md. No Git remote, Vercel account, or custom domain has been modified.
