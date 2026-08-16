# Stay for Dinner

An interactive CSS art kitchen scene, built for the DEV Frontend Challenge:
Comfort Food Edition.

A cozy kitchen at dusk, centered on a pasta and meatball dinner. Everything in
the scene is made with HTML and CSS — no SVG, no canvas, no image assets, no
icon fonts. JavaScript handles interaction state and accessibility only.

## Requirements

- Node.js 20.19+ or 22.12+ (Vite 8 requirement)
- npm

## Running locally

```bash
npm install
npm run dev
```

The dev server prints the local URL when it starts — usually
<http://localhost:5173/>. If that port is already in use, Vite automatically
picks the next free one (5174, 5175, …), so check the terminal output rather
than assuming 5173.

## Other commands

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Deploying

The project deploys to Vercel with no configuration. Vercel detects Vite
automatically:

- Build command: `npm run build`
- Output directory: `dist`

## Project structure

```text
src/
  components/
    Scene.jsx        # wooden frame + the 4:3 canvas
    Kitchen.jsx      # scene coordinate space, owns scene state classes
  styles/
    variables.css    # design tokens (page chrome + scene palette)
    reset.css        # reset + global reduced-motion guard
    page.css         # page chrome around the frame
    scene.css        # frame, canvas, vignette
    responsive.css   # page-level adjustments only
  App.jsx
  main.jsx
```

Stylesheets are imported in [src/main.jsx](src/main.jsx) in a deliberate order:
tokens first so everything below can read them, `responsive.css` last so its
overrides land at the end of the cascade.

### How the scene scales

The artwork is one composition, not a responsive layout. `.scene` is a CSS size
container, so `--u` (`1cqw`) equals 1% of the frame's width at any screen size.
Scene objects are positioned in `%` and sized in multiples of `--u`, which means
the whole kitchen rescales proportionally without breakpoints. If a scene object
ever needs a media query to stay in place, it should have been sized in `--u`
instead.

## A note on Dropbox

This repo lives inside a Dropbox-synced folder. Dropbox holds file locks on
`node_modules/.vite` while it syncs, which makes Vite's dependency optimizer
fail its temp-folder rename (`EBUSY`, surfacing in the browser as
`504 Outdated Optimize Dep` and a blank page).

[vite.config.js](vite.config.js) works around this by pointing `cacheDir` at the
OS temp directory. If you hit the error anyway, pause Dropbox syncing, delete
`node_modules/.vite`, and restart the dev server.

## Build phases

Development follows the phases in
[IMPLEMENTATION-BRIEF.md](IMPLEMENTATION-BRIEF.md). Current status: **Phase 1
complete** — project foundation, scene wrapper, design tokens, and page
structure. Kitchen artwork begins in Phase 2.
