# Portfolio verification

Updated November 16, 2026.

## Responsive scenes and personal photos

- `npm run typecheck` and `npm run build`: passed.
- Storefront browser checks at 1512×757, 1366×768, 1024×600, 909×695, 768×712, 390×844, and 320×568: full frame and entrance stay in view, with no horizontal overflow.
- Header height is measured so scene sizing accounts for wrapped navigation rather than assuming a fixed header.
- Tree of Thoughts is the leftmost pastry. Desktop Experience has one hotspot spanning the sign and pictures.
- The café table opens a connection note. Desktop and phone checks confirm the links appear, Escape closes the note, and focus returns to its button.
- About desktop layout reviewed with the headshot, revised copy, and home-café photo below its description.
- At 390px, all six magnets switch their stories without leaving About or causing horizontal overflow. Five matching supplied photos appear; Vlogging is intentionally text-only.
- Requested experience labels and the classroom jump link are removed; AppDev copy and “My experiences” capitalization are updated.
- Supplied photos are locally encoded for the web; the original files remain untouched.

The Playwright suite in `tests/` is updated for the responsive flow, connection note, and photos. Test collection is checked; the suite itself has not been executed. The UI checks above used the connected browser. Reduced-motion support is implemented but was not separately exercised in that browser session.

This is a local implementation, not a Vercel deployment. No Git remote, Vercel account, or custom domain has been modified.
