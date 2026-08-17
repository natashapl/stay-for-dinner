/**
 * Refrigerator
 *
 * The freezer and fresh-food compartments have independent left-hinged doors,
 * but Kitchen coordinates both with the cabinet above: either refrigerator
 * door closes that cabinet, while opening the cabinet closes both doors. Their
 * decorations stay attached to the matching moving door, and each full
 * compartment remains its own toggle target after opening.
 */
export default function Refrigerator({
  freshFoodOpen = false,
  freezerOpen = false,
  onToggleFreshFood,
  onToggleFreezer,
}) {
  const classes = [
    'fridge',
    freshFoodOpen ? 'is-open' : '',
    freezerOpen ? 'is-freezer-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <div className="fridge__body">
        <div
          id="freezer-interior"
          className="fridge__freezer-interior"
          aria-hidden={!freezerOpen}
        >
          <span className="freezer__light" />
          <span className="freezer-item freezer-item--peas" />
          <span className="freezer-item freezer-item--ice-cream" />
          <span className="freezer-item freezer-item--tray" />
          <span className="freezer__shelf" />
        </div>

        <div
          id="fridge-interior"
          className="fridge__interior"
          aria-hidden={!freshFoodOpen}
        >
          <span className="fridge__light" />
          <span className="fridge__shelf fridge__shelf--top" />
          <span className="fridge__shelf fridge__shelf--middle" />

          <span className="fridge-item fridge-item--milk">
            <span className="fridge-item__label" />
          </span>
          <span className="fridge-item fridge-item--jam" />
          <span className="fridge-item fridge-item--covered-dish" />

          <span className="fridge-item fridge-item--bottle" />
          <span className="fridge-item fridge-item--berries" />
          <span className="fridge-item fridge-item--leftovers" />

          <span className="fridge__crisper">
            <span className="fridge__greens" />
            <span className="fridge__tomatoes" />
          </span>
        </div>

        <div className="fridge__door fridge__door--freezer">
          <div className="fridge__handle fridge__handle--freezer" />
          <div className="fridge-note fridge-note--photo" />
          <div className="fridge-magnet magnet-1" />
        </div>

        <div className="fridge__door fridge__door--fresh">
          <div className="fridge__handle fridge__handle--fresh" />

          {/* Painted lettering, not content - a reader announcing "Eat well
              Live well" out of nowhere in the middle of the kitchen is noise. */}
          <div className="fridge-note fridge-note--memo" aria-hidden="true">
            <p className="fridge-note__text">
              Eat well
              <br />
              Live well
            </p>
          </div>

          <div className="fridge-magnet magnet-2" />
        </div>
      </div>

      <div className="fridge__side" />

      <button
        className="fridge__trigger scene-control"
        type="button"
        aria-label={freshFoodOpen ? 'Close the refrigerator' : 'Open the refrigerator'}
        aria-controls="fridge-interior"
        aria-expanded={freshFoodOpen}
        onClick={onToggleFreshFood}
      >
        <span className="scene-control__prompt" aria-hidden="true">
          {freshFoodOpen ? 'Close fridge' : 'Open fridge'}
        </span>
      </button>

      <button
        className="fridge__freezer-trigger scene-control"
        type="button"
        aria-label={freezerOpen ? 'Close the freezer' : 'Open the freezer'}
        aria-controls="freezer-interior"
        aria-expanded={freezerOpen}
        onClick={onToggleFreezer}
      >
        <span className="scene-control__prompt" aria-hidden="true">
          {freezerOpen ? 'Close freezer' : 'Open freezer'}
        </span>
      </button>
    </div>
  )
}
