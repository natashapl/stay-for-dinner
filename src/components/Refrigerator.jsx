/**
 * Refrigerator
 *
 * Far left, tucked under the upper cabinet. Two doors, long vertical handles,
 * and the notes stuck to the freezer door.
 *
 * It sits left of centre, so its RIGHT flank is the visible side face — see
 * the three-face rule in variables.css.
 *
 * The notes are separate elements rather than part of the door's background
 * because Phase 8 makes one of them interactive: it needs to lift a corner on
 * hover and flip to reveal a message, which a background layer can't do.
 */
export default function Refrigerator() {
  return (
    <div className="fridge">
      <div className="fridge__body">
        <div className="fridge__door fridge__door--freezer" />
        <div className="fridge__door fridge__door--fresh" />

        <div className="fridge__handle fridge__handle--freezer" />
        <div className="fridge__handle fridge__handle--fresh" />

        <div className="fridge-note fridge-note--photo" />

        {/* Real text, not painted bars. At this size it sits right on the edge
            of legibility — which is the point: you can tell it says something
            without being able to read it, and that is what makes a person lean
            in and click. Phase 8 turns this note over to reveal the message. */}
        <div className="fridge-note fridge-note--memo">
          <p className="fridge-note__text">
            Eat well
            <br />
            Live well
          </p>
        </div>

        <div className="fridge-magnet magnet-1" />
        <div className="fridge-magnet magnet-2" />
      </div>

      <div className="fridge__side" />
    </div>
  )
}
