/**
 * PlateStack
 *
 * Five dinner plates. Each is one element; the rim, the well and the green
 * band are all drawn with gradients on it rather than with child elements.
 *
 * The top plate is deliberately its own element rather than the last item of
 * the loop, because Phase 8 lifts it out of the stack as the dinner plate. It
 * needs to be addressable on its own.
 */

const PLATES = [0, 1, 2, 3]

export default function PlateStack({
  plateReady,
  pastaServed,
  meatballsServed,
  onTogglePlate,
}) {
  const dinnerComplete = pastaServed && meatballsServed
  const classes = [
    'plate-stack',
    plateReady ? 'is-ready' : '',
    pastaServed ? 'has-pasta' : '',
    meatballsServed ? 'has-meatballs' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const prompt = dinnerComplete ? 'Clear plate' : plateReady ? 'Cancel plating' : 'Make a plate'
  const label = dinnerComplete
    ? 'Clear the plated dinner and return the plate to the stack'
    : plateReady
      ? 'Cancel plating and return the plate to the stack'
      : 'Start plating dinner'

  return (
    <div className={classes}>
      {PLATES.map((i) => (
        <div key={i} className="plate" style={{ '--i': i }} />
      ))}

      <div className="plate plate--top" style={{ '--i': PLATES.length }}>
        <div className="plated-serving plated-serving--pasta" />
        <div className="plated-serving plated-serving--meatballs">
          <span className="plated-meatball plated-meatball--back" />
          <span className="plated-meatball plated-meatball--left" />
          <span className="plated-meatball plated-meatball--right" />
        </div>
      </div>

      <button
        className="plate-stack__trigger"
        type="button"
        aria-label={label}
        aria-pressed={plateReady}
        onClick={onTogglePlate}
      >
        <span className="plate-stack__prompt" aria-hidden="true">
          {prompt}
        </span>
      </button>
    </div>
  )
}
