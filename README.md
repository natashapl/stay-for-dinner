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

Components are listed here in the order the scene is built, back to front —
the same order they appear in `Kitchen.jsx` and the same order the depth stack
in `scene.css` assigns z-indexes in.

```text
src/
  components/
    Scene.jsx          # wooden frame + the 4:3 canvas, owns interaction state
    Kitchen.jsx        # scene coordinate space, owns scene state classes

    Room.jsx           # wall, backsplash, floor
    Window.jsx         # frame, panes, night toggle target
    Sky.jsx            # sun, moon, hills, trees, house, stars
    Curtain.jsx
    Shelves.jsx        # open shelving on both walls
    Cabinetry.jsx      # wall units + counter run + base cabinets
    SinkArea.jsx       # basin, faucet, water
    KitchenIsland.jsx  # foreground island and stools

    Refrigerator.jsx   # fresh-food + freezer compartments and interiors
    Stove.jsx
    Toaster.jsx
    Blender.jsx
    DishRack.jsx
    CounterProps.jsx   # cutting board, utensils, cookware
    ShelfItems.jsx     # dishware and pantry items on the shelves
    ShelfDecor.jsx     # cookbooks, frame, timer, towel
    Plants.jsx

    PastaBowl.jsx
    MeatballBowl.jsx
    PlateStack.jsx     # plate stack + the dinner plate being served
    Steam.jsx          # shared by both bowls

    RecipeDrawer.jsx   # native <dialog>, styled as a right-hand drawer

  styles/
    variables.css      # design tokens (page chrome + scene palette)
    reset.css          # reset + global reduced-motion guard
    page.css           # page chrome around the frame
    scene.css          # frame, canvas, and the whole z-index depth stack

    kitchen.css        # room shell: wall, tile, floor
    window.css
    sky.css
    cabinetry.css
    sink.css
    island.css
    appliances.css
    decor.css
    food.css
    animations.css

    depth.css          # scene-wide shadow + light passes
    interactions.css   # hover, focus, prompts, drawer, plating
    responsive.css     # page-level adjustments only

  App.jsx
  main.jsx
```

Stylesheets are imported in [src/main.jsx](src/main.jsx) in the deliberate order
shown above: tokens first so everything below can read them, then the artwork
back to front, then `depth.css` — its passes re-light everything above it —
then interactions, and `responsive.css` last so its overrides land at the end of
the cascade.

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
[IMPLEMENTATION-BRIEF.md](IMPLEMENTATION-BRIEF.md). Current status: **Phases 1–11
complete**, with Phase 12 (final polish) underway — dead CSS removed, the
refrigerator lighting reworked, and the production build measuring 100 on
Lighthouse performance, accessibility, best practices and SEO.

The brief's "Current Implementation Checkpoint and Review Decisions" section
holds the authoritative scope decisions, and takes precedence over any earlier
interaction described in the same file.

## License

[MIT](LICENSE) © 2026 Natasha Pierre-Louis
