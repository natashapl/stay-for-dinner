/**
 * Curtain
 *
 * A short gingham valance across the top of the window, on a rod with rings.
 *
 * Rendered inside <Window> so it inherits the window's position - the one
 * place in the scene where nesting beats the flattened coordinate convention,
 * because a curtain that didn't move with its window would be a bug waiting
 * to happen.
 *
 * The scalloped hem is a mask, not geometry; see window.css.
 */
export default function Curtain() {
  return (
    <div className="curtain">
      <div className="curtain__rod" />
      <div className="curtain__rings">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="curtain__ring" />
        ))}
      </div>
      <div className="curtain__cloth" />
    </div>
  )
}
