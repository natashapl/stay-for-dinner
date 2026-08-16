/**
 * Sky
 *
 * Everything seen through the window: dusk gradient, sun, clouds, hills,
 * treeline, one small house.
 *
 * Rendered inside .window__glass, which is overflow:hidden — so nothing here
 * needs to know how big the window is. Elements can overhang freely and the
 * glass crops them, which is what lets the hills run past both edges instead
 * of stopping neatly inside the frame.
 *
 * Order is back to front: glow, sun, clouds, far hills, near hills, house,
 * treeline. That's also the order the eye reads distance in.
 */
export default function Sky() {
  return (
    <div className="window__sky">
      <div className="sky__glow" />
      <div className="sky__stars" />
      <div className="sky__sun" />

      <div className="sky__cloud sky__cloud--high" />
      <div className="sky__cloud sky__cloud--mid" />
      <div className="sky__cloud sky__cloud--low" />

      <div className="sky__hills sky__hills--far" />
      <div className="sky__hills sky__hills--near" />

      <div className="sky__house" />
      <div className="sky__trees" />
    </div>
  )
}
