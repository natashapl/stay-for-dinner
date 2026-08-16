/**
 * Cabinetry
 *
 * The sage cabinets and the wooden counter that runs across the back wall,
 * plus the two upper cabinets in the top corners.
 *
 * Doors are real elements because each one needs its own shading, but there
 * are only a handful — the shaker panel inside each door is a pseudo-element,
 * not more markup.
 */

function Door({ className = '' }) {
  return <div className={`door ${className}`.trim()} />
}

export default function Cabinetry() {
  return (
    <>
      {/* Upper cabinets, tucked into the corners the way the reference has
          them. The left one is shorter — Phase 4 puts the fridge below it. */}
      <div className="wall-unit wall-unit--upper-left">
        <Door />
        <Door />
      </div>

      <div className="wall-unit wall-unit--upper-right">
        <Door />
        <Door />
      </div>

      <div className="back-counter">
        {/* Two elements, because a counter is two planes: the surface objects
            stand on, and the front edge showing the slab's thickness. */}
        <div className="counter">
          <div className="counter__surface" />
          <div className="counter__edge" />
        </div>

        <div className="base-cabinets">
          <Door className="door--wide" />
          <Door />
          {/* Under the sink: two narrow doors, so the run doesn't read as a
              perfectly even rhythm across the whole wall. */}
          <Door className="door--narrow" />
          <Door className="door--narrow" />
          <Door />
          <Door className="door--wide" />
        </div>

        <div className="toe-kick" />
      </div>
    </>
  )
}
