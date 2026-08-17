import { useState } from 'react'

/**
 * Cabinetry
 *
 * The sage cabinets and the wooden counter that runs across the back wall,
 * plus the two independently opening upper cabinets in the top corners.
 */

const BOWLS = [0, 1, 2]
const PLATES = [0, 1, 2, 3]

function Door({ className = '' }) {
  return <div className={`door ${className}`.trim()} />
}

function CabinetPantry() {
  return (
    <span className="cabinet-pantry">
      <span className="pantry-honey">
        <span className="pantry-honey__label" />
      </span>

      <span className="pantry-grains">
        <span className="pantry-grains__label" />
      </span>

      <span className="pantry-spices">
        <span className="pantry-spice pantry-spice--paprika" />
        <span className="pantry-spice pantry-spice--turmeric" />
        <span className="pantry-spice pantry-spice--herbs" />
      </span>
    </span>
  )
}

/** Reuse the scene's existing ceramic and mug drawing recipes at cabinet scale. */
function CabinetDishware({ side }) {
  return (
    <>
      <span className="cabinet__shelf cabinet__shelf--middle" />
      <span className="cabinet__shelf cabinet__shelf--base" />

      <span className="cabinet-dishes__plates">
        {PLATES.map((i) => (
          <span key={i} className="plate" style={{ '--i': i }} />
        ))}
      </span>

      <span className="cabinet-dishes__mugs">
        <span className="cabinet-dishes__mug cabinet-dishes__mug--sage">
          <span className="mug__handle" />
          <span className="mug__body" />
        </span>
        <span className="cabinet-dishes__mug cabinet-dishes__mug--cream">
          <span className="mug__handle" />
          <span className="mug__body" />
        </span>
      </span>

      {side === 'right' ? (
        <CabinetPantry />
      ) : (
        <span className="cabinet-dishes__bowls">
          {BOWLS.map((i) => (
            <span key={i} className="bowl-stack__bowl" style={{ '--i': i }} />
          ))}
        </span>
      )}
    </>
  )
}

function WallUnit({ side, isOpen, onToggle }) {
  const position = side === 'left' ? 'upper-left' : 'upper-right'
  const interiorId = `${position}-cabinet-interior`
  const sideLabel = side === 'left' ? 'upper-left' : 'upper-right'

  return (
    <div className={`wall-unit wall-unit--${position}${isOpen ? ' is-open' : ''}`}>
      <div id={interiorId} className="cabinet__interior" aria-hidden={!isOpen}>
        <CabinetDishware side={side} />
      </div>

      <div className="wall-unit__doors">
        <Door />
        <Door />
      </div>

      {/* This covers the complete cabinet footprint in both states, so either
          door or any exposed interior space toggles the same compartment. */}
      <button
        className={`cabinet__trigger cabinet__trigger--${side} scene-control`}
        type="button"
        aria-label={`${isOpen ? 'Close' : 'Open'} the ${sideLabel} cabinet`}
        aria-controls={interiorId}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="scene-control__prompt" aria-hidden="true">
          {isOpen ? 'Close cabinet' : 'Open cabinet'}
        </span>
      </button>
    </div>
  )
}

export default function Cabinetry({ leftCabinetOpen = false, onToggleLeftCabinet }) {
  const [rightCabinetOpen, setRightCabinetOpen] = useState(false)

  return (
    <>
      <WallUnit
        side="left"
        isOpen={leftCabinetOpen}
        onToggle={onToggleLeftCabinet}
      />

      <WallUnit
        side="right"
        isOpen={rightCabinetOpen}
        onToggle={() => setRightCabinetOpen((current) => !current)}
      />

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
