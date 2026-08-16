/**
 * ShelfItems
 *
 * Cookware on the open shelves: a stack of bowls and the red dutch oven on
 * the left, a stockpot on the right.
 *
 * Phase 5 adds the plants, mugs, cookbooks and framed art alongside these.
 */

const BOWLS = [0, 1, 2]

export default function ShelfItems() {
  return (
    <>
      <div className="bowl-stack">
        {BOWLS.map((i) => (
          <div key={i} className="bowl-stack__bowl" style={{ '--i': i }} />
        ))}
      </div>

      <div className="dutch-oven">
        <div className="dutch-oven__body" />
        <div className="dutch-oven__lid" />
        <div className="dutch-oven__knob" />
      </div>

      <div className="stockpot">
        <div className="stockpot__body" />
        <div className="stockpot__lid" />
        <div className="stockpot__knob" />
      </div>
    </>
  )
}
