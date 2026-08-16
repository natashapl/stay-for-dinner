/**
 * Plants
 *
 * Four pots around the shelves. One <Plant> recipe drives all of them; the
 * variants differ only in leaf data and pot colour.
 *
 * Leaf data is hand-authored for the same reason the pasta was: a plant needs
 * a silhouette. Real foliage is denser in the middle, reaches furthest at the
 * shoulders, and never has two neighbouring leaves at the same angle. Random
 * rotations give you a starburst, which reads as a firework, not a plant.
 *
 * Angles are measured from straight up, so a leaf past ±90deg hangs BELOW its
 * origin — that's all a trailing pothos is.
 */

function Plant({ variant, pot, leaves, sway = false }) {
  return (
    <div className={`plant plant--${variant}`}>
      <div className={`plant__foliage${sway ? ' plant__foliage--sway' : ''}`}>
        {leaves.map((l, i) => (
          <span
            key={i}
            className="leaf"
            style={{
              '--x': `${l.x}%`,
              '--y': `${l.y}%`,
              '--rot': `${l.r}deg`,
              '--len': `${l.h}`,
              '--tone': l.t ?? 0,
            }}
          />
        ))}
      </div>
      <div className={`plant__pot plant__pot--${pot}`} />
    </div>
  )
}

/* Upright herb: a tight fan, tallest in the middle. */
const BUSHY = [
  { x: 50, y: 0, r: 0, h: 2.7 },
  { x: 42, y: -4, r: -26, h: 2.4, t: 1 },
  { x: 58, y: -4, r: 26, h: 2.4, t: 1 },
  { x: 33, y: -10, r: -52, h: 2, t: 2 },
  { x: 67, y: -10, r: 52, h: 2, t: 2 },
  { x: 46, y: 10, r: -12, h: 2.2 },
  { x: 55, y: 12, r: 14, h: 2.1 },
  { x: 26, y: -16, r: -74, h: 1.6, t: 2 },
  { x: 74, y: -16, r: 74, h: 1.6, t: 2 },
]

/* Trailing pothos: the same fan up top, plus leaves past 90deg that fall down
   either side of the pot. */
const TRAILING = [
  { x: 50, y: 4, r: -6, h: 2.2 },
  { x: 40, y: 0, r: -34, h: 2, t: 1 },
  { x: 61, y: 0, r: 32, h: 2, t: 1 },
  { x: 28, y: -8, r: -68, h: 1.8, t: 1 },
  { x: 73, y: -8, r: 68, h: 1.8, t: 1 },
  { x: 16, y: -24, r: -112, h: 1.9, t: 2 },
  { x: 86, y: -22, r: 116, h: 1.9, t: 2 },
  { x: 16, y: -44, r: -146, h: 1.7, t: 2 },
  { x: 81, y: -40, r: 152, h: 1.6, t: 2 },
  { x: 23, y: -60, r: -168, h: 1.4, t: 2 },
]

/* Small and sparse, for the low shelf where there's less headroom. */
const SPRIG = [
  { x: 50, y: 0, r: -4, h: 2 },
  { x: 40, y: -3, r: -32, h: 1.7, t: 1 },
  { x: 61, y: -3, r: 30, h: 1.7, t: 1 },
  { x: 31, y: -9, r: -62, h: 1.4, t: 2 },
  { x: 70, y: -9, r: 60, h: 1.4, t: 2 },
  { x: 48, y: 8, r: 10, h: 1.5 },
]

export default function Plants() {
  return (
    <>
      {/* Left shelves */}
      <Plant variant="hi-left" pot="cream" leaves={TRAILING} sway />
      <Plant variant="lo-left" pot="cream" leaves={SPRIG} />

      {/* Right shelves */}
      <Plant variant="hi-right" pot="terracotta" leaves={BUSHY} />
      <Plant variant="lo-right" pot="terracotta" leaves={TRAILING} sway />
    </>
  )
}
