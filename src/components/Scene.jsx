import { useEffect, useRef, useState } from 'react'
import Kitchen from './Kitchen.jsx'
import RecipeDrawer from './RecipeDrawer.jsx'

/**
 * Scene
 *
 * .scene-frame is the wooden surround and owns the sizing.
 * .scene is the 4:3 opening itself, and the size container that establishes
 * the --u unit every piece of scene artwork is measured in.
 *
 * The figure has an accessible name, but deliberately does not use role=img.
 * An image role would flatten its descendants and hide the real controls now
 * living inside the illustration from some accessibility trees.
 */
export default function Scene() {
  const recipeDrawerRef = useRef(null)
  const recipeTriggerRef = useRef(null)
  const pastaTriggerRef = useRef(null)

  const [plateReady, setPlateReady] = useState(false)
  const [pastaServed, setPastaServed] = useState(false)
  const [meatballsServed, setMeatballsServed] = useState(false)
  const [platingAnnouncement, setPlatingAnnouncement] = useState('')
  const [isNight, setIsNight] = useState(false)
  const [atmosphereAnnouncement, setAtmosphereAnnouncement] = useState('')

  function openRecipe(event) {
    recipeTriggerRef.current = event.currentTarget

    if (!recipeDrawerRef.current?.open) {
      recipeDrawerRef.current?.showModal()
    }
  }

  function returnFocusToRecipeTrigger() {
    if (recipeTriggerRef.current?.isConnected) {
      recipeTriggerRef.current.focus()
    }
  }

  function resetPlating(message) {
    setPlateReady(false)
    setPastaServed(false)
    setMeatballsServed(false)
    setPlatingAnnouncement(message)
  }

  function togglePlate() {
    if (plateReady) {
      resetPlating('Dinner cleared. The plate is back on the stack.')
      return
    }

    setPlateReady(true)
    setPastaServed(false)
    setMeatballsServed(false)
    setPlatingAnnouncement('Plate ready. Choose the pasta bowl first.')

    /* The plate button comes after the bowls in DOM order. Moving focus to
       pasta turns the keyboard path back into the visual path: plate, pasta,
       then one Tab forward to meatballs. */
    requestAnimationFrame(() => pastaTriggerRef.current?.focus())
  }

  function selectFood(kind, event) {
    if (!plateReady) {
      openRecipe(event)
      return
    }

    if (kind === 'pasta') {
      if (pastaServed) {
        setPlatingAnnouncement('The pasta is already on the plate.')
        return
      }

      setPastaServed(true)
      setPlatingAnnouncement('Pasta added. Now choose the meatball bowl.')
      return
    }

    if (!pastaServed) {
      setPlatingAnnouncement('Add the pasta before the meatballs.')
      return
    }

    if (meatballsServed) {
      setPlatingAnnouncement('The meatballs are already on the plate.')
      return
    }

    setMeatballsServed(true)
    setPlatingAnnouncement(
      'Dinner is plated. Click the plate again or press Escape to clear it.',
    )
  }

  function toggleNight() {
    setIsNight((currentIsNight) => {
      setAtmosphereAnnouncement(
        currentIsNight
          ? 'Dusk returns to the kitchen window.'
          : 'Night falls and the kitchen lights glow warmly.',
      )

      return !currentIsNight
    })
  }

  useEffect(() => {
    if (!plateReady) return undefined

    function cancelPlatingOnEscape(event) {
      if (event.key !== 'Escape' || recipeDrawerRef.current?.open) return
      resetPlating('Plating cancelled. The plate is back on the stack.')
    }

    window.addEventListener('keydown', cancelPlatingOnEscape)
    return () => window.removeEventListener('keydown', cancelPlatingOnEscape)
  }, [plateReady])

  return (
    <>
      <figure
        className="scene-frame"
        aria-label={`An interactive illustration of a cozy kitchen at ${isNight ? 'night' : 'dusk'}, with pasta and meatballs ready on the island.`}
      >
        <div className="scene">
          <Kitchen
            isNight={isNight}
            plateReady={plateReady}
            pastaServed={pastaServed}
            meatballsServed={meatballsServed}
            pastaTriggerRef={pastaTriggerRef}
            onSelectFood={selectFood}
            onTogglePlate={togglePlate}
            onToggleNight={toggleNight}
          />
        </div>

        <p className="scene-status" aria-live="polite" aria-atomic="true">
          {platingAnnouncement}
        </p>

        <p className="scene-status" aria-live="polite" aria-atomic="true">
          {atmosphereAnnouncement}
        </p>
      </figure>

      <RecipeDrawer
        dialogRef={recipeDrawerRef}
        onClose={returnFocusToRecipeTrigger}
      />
    </>
  )
}
