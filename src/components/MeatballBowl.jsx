import Steam from './Steam.jsx'

/**
 * MeatballBowl
 *
 * Same vessel as the pasta bowl — one .bowl recipe, different contents.
 *
 * Order matters here in a way it doesn't for the noodles: the meatballs are
 * listed back to front, so later ones paint over earlier ones and the pile
 * reads as stacked rather than as a scattered layer. Each row is a little
 * larger and lighter than the one behind it.
 */

const MEATBALLS = [
  // back row, sitting lower and in shade
  { x: 16, y: 14, s: 0.82, tone: 2 },
  { x: 40, y: 8, s: 0.88, tone: 2 },
  { x: 64, y: 12, s: 0.84, tone: 2 },
  { x: 84, y: 20, s: 0.78, tone: 2 },

  // middle
  { x: 27, y: 30, s: 0.98, tone: 1 },
  { x: 52, y: 37, s: 1.02, tone: 1 },
  { x: 74, y: 34, s: 0.94, tone: 1 },

  // front, largest and catching the most light
  { x: 35, y: 50, s: 1.12, tone: 0 },
  { x: 63, y: 52, s: 1.08, tone: 0 },
  { x: 15, y: 46, s: 1 , tone: 0 },
]

const HERBS = [
  { x: 30, y: 24 }, { x: 47, y: 16 }, { x: 58, y: 40 },
  { x: 70, y: 24 }, { x: 22, y: 38 }, { x: 44, y: 44 },
  { x: 66, y: 62 }, { x: 34, y: 64 },
]

export default function MeatballBowl({ platingMode, pastaServed, served, onActivate }) {
  let prompt = "View recipe"
  let label = 'Meatball bowl — open the dinner recipe'

  if (platingMode) {
    prompt = served ? 'Meatballs added' : pastaServed ? 'Add meatballs' : 'Pasta first'
    label = served
      ? 'Meatballs are already on the dinner plate'
      : pastaServed
        ? 'Add meatballs to the dinner plate'
        : 'Add pasta before adding meatballs to the dinner plate'
  }

  return (
    <div className={`bowl bowl--meatball${served ? ' is-served' : ''}`}>
      <div className="bowl__vessel" />

      <div className="bowl__inner">
        <div className="bowl__sauce bowl__sauce--tomato" />

        {MEATBALLS.map((m, i) => (
          <div
            key={i}
            className={`meatball meatball--tone${m.tone}`}
            style={{ left: `${m.x}%`, top: `${m.y}%`, '--scale': m.s }}
          />
        ))}

        {HERBS.map((h, i) => (
          <div
            key={i}
            className="herb-fleck"
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
          />
        ))}
      </div>

      <div className="bowl__lip" />

      <Steam count={2} />

      <button
        className="bowl__trigger"
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
