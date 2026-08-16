/**
 * Steam
 *
 * A few soft wisps drifting up out of a bowl. Each wisp is one element; the
 * shape and blur are entirely CSS, and the stagger comes from per-wisp custom
 * properties rather than separate keyframes.
 *
 * Wisps start at opacity 0, which matters for reduced motion: the global guard
 * in reset.css collapses animations to a single instant frame, and this way
 * that frame is invisible rather than a frozen blob hanging over the food.
 */
export default function Steam({ count = 3 }) {
  return (
    <div className="steam">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="steam__wisp"
          style={{
            '--i': i,
            left: `${28 + i * 22}%`,
          }}
        />
      ))}
    </div>
  )
}
