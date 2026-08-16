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

export default function PlateStack() {
  return (
    <div className="plate-stack">
      {PLATES.map((i) => (
        <div key={i} className="plate" style={{ '--i': i }} />
      ))}

      <div className="plate plate--top" style={{ '--i': PLATES.length }} />
    </div>
  )
}
