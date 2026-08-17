import { useState } from 'react'

import Room from './Room.jsx'
import Window from './Window.jsx'
import Cabinetry from './Cabinetry.jsx'
import Shelves from './Shelves.jsx'
import SinkArea from './SinkArea.jsx'
import KitchenIsland from './KitchenIsland.jsx'
import PastaBowl from './PastaBowl.jsx'
import MeatballBowl from './MeatballBowl.jsx'
import PlateStack from './PlateStack.jsx'
import Refrigerator from './Refrigerator.jsx'
import DishRack from './DishRack.jsx'
import Toaster from './Toaster.jsx'
import Blender from './Blender.jsx'
import Stove from './Stove.jsx'
import CounterProps from './CounterProps.jsx'
import ShelfItems from './ShelfItems.jsx'
import Plants from './Plants.jsx'
import ShelfDecor from './ShelfDecor.jsx'

/**
 * Kitchen
 *
 * The scene's coordinate canvas. Every piece of architecture, food and
 * appliance positions itself against this element, never against the
 * viewport.
 *
 * Children are ordered back to front — the same order the depth stack in
 * scene.css assigns z-indexes in — so reading this list is reading the room
 * from the wall forwards.
 *
 * It also owns the scene state classes (is-night, plating, etc.) so the CSS
 * custom properties in variables.css can cascade to the whole illustration
 * from a single place.
 */
export default function Kitchen({
  isNight = false,
  plateReady = false,
  pastaServed = false,
  meatballsServed = false,
  pastaTriggerRef,
  onSelectFood,
  onTogglePlate,
  onToggleNight,
  children,
}) {
  const [leftCompartments, setLeftCompartments] = useState({
    cabinet: false,
    freezer: false,
    fridge: false,
  })

  const leftCabinetOpen = leftCompartments.cabinet
  const freezerOpen = leftCompartments.freezer
  const freshFoodOpen = leftCompartments.fridge

  function toggleLeftCompartment(compartment) {
    setLeftCompartments((current) => {
      const opening = !current[compartment]

      /* The two refrigerator doors may be open together, but neither should
         overlap the upper cabinet. Opening that cabinet closes both doors;
         opening either door closes the cabinet. */
      if (compartment === 'cabinet') {
        return opening
          ? { cabinet: true, freezer: false, fridge: false }
          : { ...current, cabinet: false }
      }

      return {
        ...current,
        cabinet: opening ? false : current.cabinet,
        [compartment]: opening,
      }
    })
  }

  const classes = [
    'kitchen',
    isNight ? 'is-night' : '',
    /* The open fridge throws light into the ROOM, not just into itself, so the
       flag has to live up here where the scene-wide lighting passes can see
       it — same reason night is a class on .kitchen rather than on the sky. */
    freshFoodOpen ? 'is-fridge-open' : '',
    plateReady ? 'is-plating' : '',
    pastaServed ? 'has-plated-pasta' : '',
    meatballsServed ? 'has-plated-meatballs' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <Room />
      <Window isNight={isNight} onToggleNight={onToggleNight} />
      <Shelves />
      <Cabinetry
        leftCabinetOpen={leftCabinetOpen}
        onToggleLeftCabinet={() => toggleLeftCompartment('cabinet')}
      />
      <SinkArea />

      {/* Room-level occlusion, painted behind the island and the food — see
          the depth-split note in depth.css. */}
      <div className="scene-shade--room" />

      {/* Everything standing on the counter or against the back wall. In
          front of the counter run, behind the island. */}
      <div className="objects">
        <ShelfItems />
        <ShelfDecor />
        <Plants />
        <Refrigerator
          freshFoodOpen={freshFoodOpen}
          freezerOpen={freezerOpen}
          onToggleFreshFood={() => toggleLeftCompartment('fridge')}
          onToggleFreezer={() => toggleLeftCompartment('freezer')}
        />
        <CounterProps />
        <DishRack />
        <Toaster />
        <Blender />
        <Stove />
      </div>

      <KitchenIsland />

      <div className="food">
        <PastaBowl
          triggerRef={pastaTriggerRef}
          platingMode={plateReady}
          served={pastaServed}
          onActivate={(event) => onSelectFood('pasta', event)}
        />
        <MeatballBowl
          platingMode={plateReady}
          pastaServed={pastaServed}
          served={meatballsServed}
          onActivate={(event) => onSelectFood('meatballs', event)}
        />
        <PlateStack
          plateReady={plateReady}
          pastaServed={pastaServed}
          meatballsServed={meatballsServed}
          onTogglePlate={onTogglePlate}
        />
      </div>

      {children}

      {/* Lighting passes. These sit above every object and re-light the whole
          room at once, which is why they're here rather than inside any one
          component. Shade first, then light — same order a painter works in. */}
      <div className="scene-shade" />
      <div className="scene-light" />
      <div className="fridge-glow" />
      <div className="sunbeam" />
    </div>
  )
}
