/**
 * Stove
 *
 * A FULL range, deliberately wider than the gap it sits in, pushed off the
 * right edge so the frame crops it. Only its left ~37% is on screen.
 *
 * The first version squeezed an entire stove into the visible 9% and read as
 * a doll's-house appliance. Nothing here is scaled down — the burners, knobs
 * and door are at true proportion, and the parts past the frame simply aren't
 * seen. See the note in appliances.css: crop it, don't shrink it.
 *
 * The right-hand burners are rendered even though they're off-frame. The
 * stove is one object being cropped, not a half-stove, and if the crop ever
 * moves they're already correct.
 */

const KNOBS = [0, 1, 2, 3, 4]

export default function Stove() {
  return (
    <div className="stove">
      <div className="stove__side" />

      <div className="stove__body">
        <div className="stove__cooktop">
          <span className="stove__burner stove__burner--bl" />
          <span className="stove__burner stove__burner--br" />
          <span className="stove__burner stove__burner--fl" />
          <span className="stove__burner stove__burner--fr" />
        </div>

        <div className="stove__controls">
          {KNOBS.map((i) => (
            <div key={i} className="stove__knob" />
          ))}
        </div>

        <div className="stove__door">
          <div className="stove__window" />
        </div>

        <div className="stove__handle" />
        <div className="towel" />
      </div>
    </div>
  )
}
