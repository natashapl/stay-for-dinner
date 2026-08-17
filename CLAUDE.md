# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Instructions

Read IMPLEMENTATION-BRIEF.md for the full product direction.

Important rules:

- Work one implementation phase at a time.
- Do not continue to the next phase until I ask.
- Keep the artwork primarily HTML and CSS.
- Do not use SVG, canvas, external image assets, emoji, or icon libraries for the artwork unless I approve it.
- Keep JavaScript limited to interaction state and accessibility behavior. Only use JavaScript for accessibility behavior if it's not possible with native HTML.
- Add useful CSS-art comments in first person, as though I wrote them to myself.
- Do not over-comment normal frontend code.
- Keep components and CSS organized for readability.
- Run the project after meaningful changes and fix errors before stopping.
- Do not remove working details just to simplify code without asking.

I'm an experienced frontend developer, but CSS art and CSS animation are new to me. Don't
explain React or ordinary CSS. Do explain illustration techniques as they come up — why
overlapping ellipses read as depth, why a gradient beats extra elements for lighting, how
`transform-origin` changes an opening-cabinet animation — briefly, at the end of a phase.

## Commands

```bash
npm install
npm run dev       # Vite dev server; prints its own URL, and picks 5174+ if 5173 is taken
npm run build     # production build into dist/
npm run preview   # serve the production build
```

There is no test suite, linter, or formatter configured. "Verify the change" means run the
dev server (or `npm run build`) and confirm the scene renders without console errors.

Requires Node 20.19+ or 22.12+ (Vite 8). Deploys to Vercel with zero config.

This repo lives in a Dropbox-synced folder, so [vite.config.js](vite.config.js) points
`cacheDir` at the OS temp dir — Dropbox locks `node_modules/.vite` mid-sync and Vite's
optimizer then fails with `EBUSY`, which surfaces as a blank page and `504 Outdated
Optimize Dep`. If it happens anyway: pause Dropbox, delete `node_modules/.vite`, restart.

## Architecture

React + Vite, one page, one illustration. React is a composition tool for the artwork —
almost nothing in `src/components/` holds state; they return nested `div`s that CSS paints.

### The coordinate system (the single most important idea)

`.scene` is a CSS **size container**, so `--u: 1cqw` (declared on `.kitchen` in
[variables.css](src/styles/variables.css)) equals 1% of the frame width at any screen size.
The rule the whole scene is built on: **positions in `%`, sizes in multiples of `--u`.**
That's why the kitchen rescales as one composition and
[responsive.css](src/styles/responsive.css) only touches page chrome. If a scene object
seems to need a media query to stay in place, it was sized in `px` by mistake.

Shared horizontal elevations (`--counter-y`, `--base-cab-y`, `--floor-y`, the island's `y`
values) also live in `variables.css`. Four stylesheets have to agree on where the counter
is; hardcoding a copy is how hairline gaps appear.

### Depth is a layer stack, not per-object shading

[scene.css](src/styles/scene.css) declares every scene layer's `z-index` in one block
(`.room` 1 → `.food` 7 → `.scene-shade` 15 → `.scene-light` 16 → `.sunbeam` 17). Set depth
there, not with local `z-index` values.

[depth.css](src/styles/depth.css) lights the *whole room* in two passes rendered on top of
the finished objects: `.scene-shade` uses `mix-blend-mode: multiply` (each surface darkens
through its own hue), `.scene-light` uses `screen`. `.scene-shade--room` is a deliberate
second shadow pass at z-index 4 — back-wall occlusion must sit *behind* the island and the
food. A shadow's z-index matches the depth of the surface casting it.

Objects follow the three-face rule documented in `variables.css` (`--face-top-lift`,
`--face-side-drop`): lightest top, base-colour front, darker side — and the visible flank is
the one turned toward the centre of the frame.

### Night mode rides on typed custom properties

Scene colour lives on `.kitchen`, never `:root`, so `.kitchen.is-night` can redeclare the
same names and re-light everything downstream. The palette is registered with `@property`
`<color>`/`<number>` so the values *interpolate* — untyped custom properties would snap, and
night would arrive as a palette flash instead of settling in.

### State flows one way

[Scene.jsx](src/components/Scene.jsx) owns interaction state (plating sequence, night,
recipe dialog refs, `aria-live` announcements) and passes it down.
[Kitchen.jsx](src/components/Kitchen.jsx) turns that state into class flags on one element
(`is-night`, `is-plating`, `has-plated-pasta`, …) so CSS cascades it to the whole
illustration from a single place. Kitchen's children are listed back to front, matching the
z-index stack — reading the JSX is reading the room from the wall forward.

Interactive scene objects use a **transparent `button` overlaid on the art** (see
`.bowl__trigger`), not a button wrapping it: buttons may only contain phrasing content,
while the artwork is divs. Hover and `:focus-within` then drive the same visual response.
The recipe drawer is a native `<dialog>` with `showModal()`; focus return is the only part
JS handles.

### Stylesheet load order

[main.jsx](src/main.jsx) imports CSS in a deliberate order — tokens first, then artwork back
to front, then lighting passes (they re-light everything above), then interactions, then
`responsive.css` last so its overrides land at the end of the cascade. Adding a stylesheet
means placing it in that sequence, not appending it.

## Build phases

Development follows the numbered phases in
[IMPLEMENTATION-BRIEF.md](IMPLEMENTATION-BRIEF.md) (1 foundation → 12 final polish).

**"Current Implementation Checkpoint and Review Decisions"** in that file is the authoritative
status and scope record — read it before starting anything. It reflects decisions made during
visual review, and **where it conflicts with an interaction described earlier in the brief, the
checkpoint wins**. Several originally proposed interactions were deliberately dropped there
(the toaster pop-up, the clickable fridge note); don't reinstate them from the earlier sections.
