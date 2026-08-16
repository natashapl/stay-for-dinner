/**
 * ShelfDecor
 *
 * Cookbooks, mugs, and two framed pieces.
 *
 * The books lean because a rank of perfectly upright spines reads as a
 * barcode. One book tipped against its neighbours, and a gap where a book has
 * been pulled out, is what makes a shelf look used rather than styled.
 */

const BOOKS = [
  { w: 15, h: 100, r: 2, hue: 'a' },
  { w: 11, h: 94, r: 0, hue: 'b' },
  { w: 17, h: 98, r: 0, hue: 'c' },
  { w: 12, h: 88, r: 0, hue: 'd' },
  { w: 14, h: 96, r: 0, hue: 'b' },
  /* the leaner — its rotation is what the whole row is for */
  { w: 13, h: 92, r: 0, hue: 'a' },
]

export default function ShelfDecor() {
  return (
    <>
      <div className="books">
        {BOOKS.map((b, i) => (
          <div
            key={i}
            className={`book book--${b.hue}`}
            style={{ '--w': `${b.w}%`, '--h': `${b.h}%`, '--rot': `${b.r}deg` }}
          />
        ))}
      </div>

      <div className="mug mug--tall">
        <div className="mug__handle" />
        <div className="mug__body" />
      </div>

      <div className="mug mug--squat">
        <div className="mug__handle" />
        <div className="mug__body" />
      </div>

      {/* Framed lettering — the kitchen motto from the reference. The "text"
          is three bars, because real glyphs at 8% of a shelf turn to mush. */}
      <div className="frame frame--sign">
        <div className="frame__mat">
          <p className="frame__text">
            the kitchen<br />
            is the heart<br />
            of the home
          </p>
          <span className="frame__heart" />
        </div>
      </div>

      {/* Framed landscape, echoing the view through the window. */}
      <div className="frame frame--landscape">
        <div className="frame__mat frame__mat--art" />
      </div>
    </>
  )
}
