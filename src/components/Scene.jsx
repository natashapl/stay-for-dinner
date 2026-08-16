import Kitchen from './Kitchen.jsx'

/**
 * Scene
 *
 * .scene-frame is the wooden surround and owns the sizing.
 * .scene is the 4:3 opening itself, and the size container that establishes
 * the --u unit every piece of scene artwork is measured in.
 *
 * The whole illustration is decorative, so it's exposed to assistive tech as
 * a single labelled image rather than as hundreds of nested shapes.
 * Interactive objects added in later phases will be real <button>s inside,
 * which stay reachable regardless.
 */
export default function Scene() {
  return (
    <figure
      className="scene-frame"
      role="img"
      aria-label="A cozy kitchen at dusk: a window above the sink with the sun setting behind distant hills, sage green cabinets, and a wooden island set with pasta and meatballs."
    >
      <div className="scene">
        <Kitchen />
      </div>
    </figure>
  )
}
