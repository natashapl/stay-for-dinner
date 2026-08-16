# Stay for Dinner

## Project Overview

Build an interactive CSS art kitchen scene for the DEV Frontend Challenge: Comfort Food Edition.

The visual concept is a cozy kitchen at dusk centered around a comforting pasta and meatball dinner.

The project should feel like an interactive illustration rather than a traditional website.

The kitchen should be visually rich, warm, inviting, and playful to explore.

The artwork should be created primarily with HTML and CSS. JavaScript should remain light and purposeful, mainly handling interactive state changes.

The project must be deployable to Vercel.

## Primary Goal

Create a polished CSS art experience that demonstrates:

* CSS illustration
* Complex layout and layering
* Gradients
* Shadows
* Pseudo-elements
* Transforms
* CSS animations
* CSS custom properties
* Interactive states
* Responsive scaling
* Accessible interaction patterns

The goal is not photorealism.

The goal is to capture the cozy, comforting feeling of the reference kitchen using shapes that are practical to create with CSS.

## Creative Direction

The scene takes place in a cozy kitchen around sunset.

The viewer looks directly toward the sink and kitchen window.

Warm dusk sunlight enters through the window.

A kitchen island fills much of the foreground.

Dinner is ready.

The atmosphere should feel calm, warm, homey, and inviting.

The scene should encourage the viewer to explore.

## Suggested Title

Stay for Dinner

Suggested intro copy:

"Everything you see was made with HTML and CSS. Go ahead. Explore the kitchen."

Keep introductory UI minimal so the illustration remains the focus.

# Technology

Use:

* React
* Vite
* CSS
* Minimal JavaScript
* Semantic HTML

The project should run with:

```bash
npm install
npm run dev
```

And build with:

```bash
npm run build
```

It should deploy cleanly to Vercel.

Do not add unnecessary frameworks or libraries.

# CSS Art Rules

The artwork itself should be created with CSS.

Prioritize:

* HTML elements
* CSS shapes
* `border-radius`
* borders
* gradients
* box shadows
* pseudo-elements
* transforms
* opacity
* filters
* CSS custom properties
* CSS animations
* CSS transitions

Do not use these for the kitchen artwork unless I explicitly approve them:

* SVG illustrations
* Canvas
* External image assets
* Background image files
* Icon libraries
* Emoji as visual substitutes
* Prebuilt illustration libraries

If an object is difficult to reproduce, simplify the object into recognizable CSS geometry rather than replacing it with an image.

# Code Organization

Keep the project understandable.

Suggested component structure:

```text
src/
  components/
    Kitchen.jsx
    Window.jsx
    SinkArea.jsx
    Refrigerator.jsx
    Shelves.jsx
    DishRack.jsx
    Toaster.jsx
    Blender.jsx
    Stove.jsx
    KitchenIsland.jsx
    PastaBowl.jsx
    MeatballBowl.jsx
    PlateStack.jsx
    RecipeDrawer.jsx
    FridgeNote.jsx

  styles/
    variables.css
    scene.css
    kitchen.css
    food.css
    appliances.css
    decor.css
    animations.css
    interactions.css
    responsive.css

  App.jsx
  main.jsx
```

This structure is flexible.

Do not create tiny React components for every decorative CSS shape.

Use components when they improve organization or manage interaction.

# CSS Commenting Style

I want to learn CSS art while building this.

Add useful comments around techniques that may not be obvious to someone experienced with production CSS but inexperienced with CSS illustration.

Write comments as though I wrote them to myself.

Good:

```css
/* I'm using two overlapping ellipses here so the bowl feels deeper
   without needing another element. */
```

```css
/* Rotating each noodle slightly keeps the pasta from looking like
   a repeated grid of identical shapes. */
```

```css
/* This oversized blurred gradient becomes the beam of sunset light. */
```

Avoid comments like:

```css
/* This code creates an ellipse. */
```

Do not comment every declaration.

Comment:

* Interesting CSS art techniques
* Optical illusions
* Layering decisions
* Reusable tricks
* Unusual pseudo-element usage
* Animation techniques
* Places where the CSS intentionally differs from normal application CSS

# Scene Composition

## Page Presentation

The kitchen should not fill the entire browser viewport.

Present it as a large framed interactive scene centered on the page.

The page itself should support the mood without competing with the artwork.

### Page Layout

Use:

* A warm neutral or dark muted page background
* Small title and intro text above the artwork
* A large centered kitchen scene
* A fixed 4:3 aspect ratio for the artwork
* Generous spacing around the scene
* Minimal supporting text below

Suggested intro:

"Everything you see was made with HTML and CSS. Go ahead. Explore the kitchen."

The kitchen should feel like the main destination on the page.

### Scene Size

On desktop, aim for something similar to:

```css
.scene {
  width: min(1200px, calc(100vw - 48px));
  aspect-ratio: 4 / 3;
}
```

The exact values can change during visual review.

The goal is a large, immersive scene that still has breathing room around it.

### Frame Treatment

Give the kitchen a subtle frame rather than an ornate picture-frame effect.

Possible treatment:

* Dark brown or wood-toned border
* Slight inset highlight
* Soft outer shadow
* Small border radius if it suits the final composition

The frame should visually belong with the kitchen.

Avoid anything that makes the page feel like an art gallery.

### Preferred Mood

A strong option is to make the surrounding page slightly darker or more muted than the kitchen.

This can create the feeling of looking through an opening into a warm kitchen at dusk.

The warm interior should naturally draw the viewer's eye.

This contrast should become even more effective when the kitchen transitions into night mode and the interior lighting becomes stronger.

### Scene Coordinate System

Treat the framed kitchen as its own predictable visual canvas.

Use a wrapper similar to:

```css
.kitchen {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
```

Position major scene elements relative to this canvas using percentages or other scalable units.

For example:

```css
.window {
  left: 40%;
  top: 8%;
  width: 20%;
}
```

Avoid positioning major kitchen elements directly against viewport dimensions.

The kitchen should behave like one composed illustration.

### Responsive Behavior

On smaller screens:

* Scale the entire kitchen composition down
* Preserve the same overall layout
* Do not rearrange the kitchen into a conventional vertical mobile layout
* Keep interactive targets usable
* Allow the recipe drawer to use most or all of the available width when needed

The framed scene should remain recognizable as the same artwork at every breakpoint.

### Supporting Page Structure

Preferred page hierarchy:

1. Title
2. One-line invitation to explore
3. Large framed kitchen scene
4. Small interaction hint if needed
5. Minimal challenge/project information below

Once the user begins interacting, the page UI should stay out of the way.

The kitchen should remain the visual focus.


## Back Wall

Create:

* Warm wall color
* White or cream subway tile backsplash
* Sage or muted green cabinetry
* Open wooden shelves
* Window centered on the wall
* Sink directly beneath window

The architecture should roughly follow the reference image without attempting to reproduce every detail.

## Center Window

The window is one of the main visual anchors.

Include:

* Window frame
* Multiple panes
* Dusk sky
* Setting sun
* Simple clouds
* Distant hills or landscape
* Tree silhouettes
* Optional small house silhouette
* Small curtain or valance

Use CSS gradients and simple shapes.

Do not attempt detailed landscape painting.

## Sunset Lighting

Warm light should enter through the window.

Try techniques such as:

* Large translucent pseudo-elements
* Linear gradients
* Blur
* Opacity
* Transforms
* Warm highlights on nearby surfaces

The sunlight should visually connect the window to the island and food.

## Sink Area

Below the window:

* Sink
* Curved faucet
* Soap dispenser

Left of sink:

* Dish rack
* Several plates

Right of sink:

* Toaster
* Blender

## Left Side

Include:

* Refrigerator
* Small fridge notes or magnets
* Open shelves
* Bowls or cookware
* Cutting board
* One or two plants

## Right Side

Include:

* Open shelves
* Cookbooks
* Plant
* Utensil container
* Stove or oven
* Hanging kitchen towel

## Foreground Island

Large kitchen island with:

* Wooden countertop
* Paneled base
* Approximately three stools

The food should be the visual focus.

# Food

## Pasta Bowl

Create a large bowl filled with pasta.

The pasta does not need dozens of pieces.

Use enough individual CSS noodles to make it feel full.

Approximately 15 to 25 pieces is fine.

Use variation in:

* Rotation
* Position
* Scale
* Color
* Layering

Include:

* Sauce
* Parmesan suggestion
* Basil garnish
* Serving utensil if feasible

## Meatball Bowl

Create:

* Large bowl
* Several overlapping meatballs
* Tomato sauce
* Herb flecks

The meatballs can use circular CSS shapes with gradients and shadows.

## Plate Stack

Create a recognizable stack of dinner plates to the right of the meatballs.

The top plate should eventually participate in the plating interaction.

# Ambient Animation

Animations should be subtle.

The kitchen should feel alive without becoming busy.

Include where practical:

## Steam

Animated steam rising from:

* Pasta
* Meatballs

Use pseudo-elements or small elements with:

* Opacity
* Translate
* Scale
* Blur

Steam should loop slowly.

## Curtain

Very subtle movement.

## Plants

Optional slow leaf movement.

Only a few leaves need to animate.

## Sunset

The sun may have a very subtle glow.

## General Motion Rule

Avoid bouncing UI-style animations.

Use slow easing and small movements.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Disable or greatly reduce decorative motion when requested.

# Interactive Experience

Hover provides discovery.

Click, Enter, or Space performs the action.

Do not make important interactions hover-only.

Interactive objects should receive:

* Subtle hover reaction
* Keyboard focus state
* Appropriate cursor
* Accessible label

# Interaction 1: Pasta and Meatballs Recipe

Hovering over the pasta or meatballs should subtly lift or highlight the bowl.

A small contextual label may appear:

"What's cooking?"

Clicking either food item opens a recipe drawer.

## Recipe Drawer

Use a panel that slides in from the right.

Do not use a traditional centered modal unless there is a strong technical reason.

The kitchen should remain visible behind the panel.

Working recipe title:

Weeknight Pasta & Chicken Meatballs

The eventual recipe will use accessible ingredients such as:

* Dried pasta
* Store-bought chicken meatballs
* Jarred pasta sauce
* Parmesan
* Basil
* Garlic
* Olive oil
* Optional red pepper flakes

For now, placeholder recipe content is acceptable.

Build the drawer so recipe text can easily be replaced later.

Drawer should contain:

* Recipe title
* Brief description
* Prep/cook time
* Ingredients
* Instructions
* Close control
* Future source-credit area

It must be keyboard accessible.

Escape should close the drawer.

Focus behavior should be handled responsibly.

# Interaction 2: Plate Dinner

The plates should be interactive.

Desired sequence:

1. Click the plate stack.
2. One plate slides forward or becomes the active dinner plate.
3. Click pasta.
4. Pasta appears on the plate.
5. Click meatballs.
6. Meatballs appear on the pasta or beside it.

This can use lightweight JavaScript state.

Example state concept:

```js
{
  plateReady: false,
  pastaServed: false,
  meatballsServed: false
}
```

Do not create complicated drag-and-drop behavior.

Use CSS transitions to make the food appear as though it is being served.

The recipe drawer and plating interaction should not conflict.

Determine a sensible click behavior.

For example:

* Normal food click opens recipe
* When plating mode is active, clicking food serves it instead

Or create a clear "Plate dinner" interaction state.

Choose whichever feels more intuitive during implementation.

# Interaction 3: Dusk to Night

The window should be interactive.

Clicking the sun or another subtle window target transitions the kitchen from dusk to evening.

Use a state class such as:

```css
.is-night
```

Prefer CSS custom properties for scene colors.

Example concept:

```css
.kitchen {
  --sky-top: #ef9c75;
  --sky-bottom: #f7c776;
  --room-light: #f5c47a;
}

.kitchen.is-night {
  --sky-top: #29294d;
  --sky-bottom: #594061;
  --room-light: #e7a64d;
}
```

Night transition may include:

* Sun moves below horizon
* Sky becomes plum/navy
* Stars appear
* Outdoor landscape darkens
* Kitchen ambient light changes
* Interior lamp glow becomes stronger
* Countertop highlights change
* Window reflection becomes visible

Make the transition slow and atmospheric.

# Interaction 4: Faucet

Click faucet handle or faucet area.

Toggle water.

Create water using CSS:

* Narrow translucent gradient
* Slight highlight
* Small splash or ripple if practical

Second click turns water off.

Include keyboard support.

# Interaction 5: Toaster

Click toaster.

Sequence:

1. Toaster depresses slightly.
2. Optional subtle warm glow.
3. Short delay.
4. Toast pops upward.

Toast should also be CSS art.

Keep the animation playful but restrained.

Allow it to repeat after resetting.

# Interaction 6: Blender

Click blender.

Briefly animate:

* Blade suggestion
* Contents swirl
* Blender vibration

The whole blender should move only a tiny amount.

Automatically stop after a short animation.

Do not loop continuously.

# Interaction 7: Refrigerator

Allow the refrigerator door to open.

Inside can be simplified.

Possible contents:

* Bottle shapes
* Carton
* Containers
* Produce

Do not spend excessive time building detailed refrigerator contents.

Opening should create a small interior-light effect.

Closing reverses it.

# Interaction 8: Refrigerator Note

Make one fridge note interactive.

Hover makes one corner lift slightly.

Click reveals a small message.

Possible message:

"Good food. Good company. No rush."

The message can appear directly on the note, through a flip animation, or through another subtle reveal.

Do not use a large modal.

# Interaction 9: Cabinet

One cabinet may open on click.

Inside:

* Plates
* Bowls
* Mug
* Optional surprise

Keep this lightweight.

# Interaction 10: Hidden Surprise

Add one small Easter egg if there is enough time.

Possible ideas:

* Tiny CSS cat hiding in a cabinet
* Small mouse near the floor
* Plant leaf falls
* Fridge magnet changes
* Toast lands somewhere unexpected
* Cookbook reveals a silly title

Choose only one.

Do not let the Easter egg delay core polish.

# Responsive Behavior

The illustration should scale as one composition rather than completely rearranging like a conventional webpage.

Prefer establishing a designed canvas size and scaling it proportionally.

Possible strategy:

```css
.scene-wrapper {
  width: min(100%, 1200px);
  aspect-ratio: 4 / 3;
}
```

Use relative units where helpful.

The scene should remain usable on:

* Desktop
* Tablet
* Mobile

On small screens:

* Preserve the scene composition
* Scale it down
* Allow recipe drawer to become nearly full-width
* Maintain usable interaction targets

Do not rebuild the kitchen into a vertical mobile layout.

# Accessibility

Even though this is CSS art, treat the interactive elements like a real frontend project.

Include:

* Semantic buttons where appropriate
* Keyboard interaction
* Visible focus treatment
* Accessible labels
* Escape behavior for recipe drawer
* Reduced motion support
* Sufficient contrast for UI text
* No interaction dependent solely on color
* No interaction dependent solely on hover

Decorative pieces should not clutter the accessibility tree.

# Performance

Avoid creating hundreds of unnecessary DOM nodes.

Prefer:

* Pseudo-elements
* Reusable CSS classes
* Shared custom properties
* Limited animated elements

Animate mostly:

* `transform`
* `opacity`

Avoid animations that continuously trigger expensive layout work.

# Build Process

Do not attempt to build the entire project in one pass.

Work in phases.

After each major phase:

1. Run the app.
2. Confirm there are no console errors.
3. Review the visual result.
4. Tell me what was completed.
5. Tell me what CSS-art techniques were used.
6. Stop so I can review before proceeding.

Do not automatically start the next major phase unless I ask you to continue.

# Phase 1: Project Foundation

Create:

* Vite + React project
* Basic component structure
* Global CSS reset
* Scene wrapper
* Responsive 4:3 canvas
* CSS custom properties
* Basic page title and intro

Do not add detailed kitchen artwork yet.

# Phase 2: Kitchen Architecture

Build:

* Wall
* Floor
* Cabinetry
* Counters
* Shelves
* Window frame
* Sink
* Kitchen island
* Stools

Focus on composition and proportions.

No detailed decor yet.

# Phase 3: Main Food

Build:

* Pasta bowl
* Meatball bowl
* Plate stack

Make these visually strong before moving on.

Add steam animation.

# Phase 4: Kitchen Objects

Add:

* Dish rack
* Toaster
* Blender
* Stove
* Cutting board
* Utensils
* Cookware
* Shelf items

# Phase 5: Plants and Decor

Add:

* Several plants
* Curtain
* Cookbooks
* Mugs
* Framed kitchen decoration
* Small visual accents

Avoid over-detailing.

# Phase 6: Sunset Atmosphere

Build:

* Dusk sky
* Sun
* Clouds
* Landscape silhouettes
* Warm light beam
* Scene highlights
* Soft shadows
* Overall color polish

This phase should establish the cozy emotional tone.

# Phase 7: Recipe Drawer

Build accessible recipe drawer and food hover states.

Use placeholder recipe content until final recipe copy is supplied.

# Phase 8: Plating Interaction

Build plate dinner sequence.

Polish transitions.

# Phase 9: Night Mode

Create interactive dusk-to-night scene transition.

Use CSS variables where possible.

# Phase 10: Kitchen Interactions

Implement in roughly this priority:

1. Faucet
2. Toaster
3. Refrigerator
4. Blender
5. Fridge note
6. Cabinet
7. Easter egg

Complete as many as time allows.

# Phase 11: Accessibility and Responsive Review

Test:

* Keyboard navigation
* Focus states
* Reduced motion
* Mobile interaction
* Drawer behavior
* Interaction targets

# Phase 12: Final Polish

Review the entire scene.

Look for:

* Awkward proportions
* Objects that do not read clearly
* Inconsistent shadows
* Excessive animation
* Poor layering
* Clashing colors
* Misaligned items
* Interactions that are hard to discover
* Console errors
* Unnecessary code

Clean up CSS without removing helpful learning comments.

# Important Development Behavior

When solving CSS-art problems, do not immediately choose the most complicated implementation.

Start with recognizable simple geometry.

Ask:

"Can this object be suggested convincingly with fewer shapes?"

Reuse shapes where possible.

The goal is not pixel-perfect imitation of the generated reference.

The goal is a strong CSS interpretation of the same scene and feeling.

# Working With Me

I am an experienced frontend developer, but CSS art and CSS animation are new areas for me.

Do not over-explain React, basic CSS syntax, or normal frontend concepts.

Do explain unfamiliar illustration techniques as they arise.

When you finish each phase, briefly tell me things like:

* Why overlapping ellipses make the bowl appear three-dimensional
* How pseudo-elements reduce markup
* Why a gradient works better than several elements for lighting
* How transform-origin changes an opening cabinet animation
* Why a particular animation uses transform instead of positional properties

Keep explanations practical.

The goal is for me to understand enough that I can modify and reuse these techniques in future CSS art projects.

# Definition of Done

The project is complete when:

* The kitchen reads clearly as a cozy kitchen at dusk.
* The pasta and meatballs are obvious focal points.
* The artwork is overwhelmingly HTML and CSS.
* The scene feels polished without requiring photorealistic detail.
* The food opens an accessible recipe experience.
* The dinner can be plated interactively.
* The kitchen can transition from dusk to night.
* Several kitchen objects respond to exploration.
* The experience works with mouse and keyboard.
* Reduced motion is supported.
* The page scales appropriately across screen sizes.
* The build succeeds.
* The project can deploy to Vercel.
* The source code remains understandable enough for me to learn from it.
