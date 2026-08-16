import Steam from './Steam.jsx'

/**
 * PastaBowl
 *
 * Rigatoni in a wide ceramic bowl.
 *
 * The noodles are hand-authored rather than randomised. Math.random() would
 * reshuffle the pasta on every render — and worse, it removes my ability to
 * compose. A heap of pasta isn't uniform: it needs a dense middle, a couple of
 * pieces breaking the rim line, and no two neighbours at the same angle. Those
 * are decisions, not noise.
 *
 * tone picks one of three pasta shades so the heap doesn't read as one colour.
 */

const BASIL = [
  { x: 38, y: 20, r: -18, s: 1 },
  { x: 52, y: 32, r: 26, s: 0.82 },
  { x: 45, y: 12, r: 8, s: 0.7 },
]

export default function PastaBowl({ triggerRef, platingMode, served, onActivate }) {
  const prompt = platingMode ? (served ? 'Pasta added' : 'Add pasta') : "View recipe"
  const label = platingMode
    ? served
      ? 'Pasta is already on the dinner plate'
      : 'Add pasta to the dinner plate'
    : 'Pasta bowl — open the dinner recipe'

  return (
    <div className={`bowl bowl--pasta${served ? ' is-served' : ''}`}>
      <div className="bowl__vessel" />

      <div className="bowl__inner">
        <div className="bowl__sauce" />

        {/* The entire nest of spaghetti is this one empty div. Every strand is
            a ring-shaped radial-gradient in its background — see food.css. */}
        <div className="noodle-nest" />

        {/* Parmesan is one element, not thirty — see food.css */}
        <div className="parmesan" />

        {BASIL.map((b, i) => (
          <div
            key={i}
            className="basil"
            style={{
              left: `${b.x}%`,
              top: `${b.y}%`,
              '--rot': `${b.r}deg`,
              '--scale': b.s,
            }}
          />
        ))}
      </div>

      <div className="bowl__lip" />

      <Steam count={3} />

      <button
        className="bowl__trigger"
        ref={triggerRef}
        type="button"
        aria-label={label}
        aria-haspopup={platingMode ? undefined : 'dialog'}
        aria-controls={platingMode ? undefined : 'recipe-drawer'}
        onClick={onActivate}
      >
        <span className="bowl__prompt" aria-hidden="true">
          {prompt}
        </span>
      </button>
    </div>
  )
}
