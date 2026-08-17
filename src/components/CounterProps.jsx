/**
 * CounterProps
 *
 * The small things standing on the back counter: cutting board leaning on the
 * backsplash, soap dispenser by the sink, and a crock of wooden utensils.
 *
 * Grouped into one component deliberately. None of these has state, none is
 * interactive, and none is large enough to justify its own file - a component
 * per decorative shape would be more files to open than shapes to look at.
 */

/* Fanned by rotation from a shared pivot at the bottom of the crock, so they
   splay like real utensils rather than standing in a rank.
 *
 * Each one gets a DIFFERENT head. Five identical sticks with the same blob on
 * top is a bundle of matches - the whole point of a utensil crock is that it
 * holds a jumble of different tools, and the silhouettes are what say so.
 * They're also ordered short-tall-short so the fan has a profile.
 */
const UTENSILS = [
  { kind: 'spoon', r: -19, h: 74 },
  { kind: 'slotted', r: -8, h: 88 },
  { kind: 'ladle', r: 2, h: 96 },
  { kind: 'spatula', r: 12, h: 82 },
  { kind: 'turner', r: 22, h: 70 },
]

export default function CounterProps() {
  return (
    <>
      <div className="cutting-board" />

      <div className="soap">
        <div className="soap__pump" />
        <div className="soap__bottle" />
      </div>

      <div className="crock">
        <div className="crock__utensils">
          {UTENSILS.map((u) => (
            <div
              key={u.kind}
              className={`utensil utensil--${u.kind}`}
              style={{ '--rot': `${u.r}deg`, '--len': `${u.h}%` }}
            />
          ))}
        </div>

        <div className="crock__pot" />
      </div>
    </>
  )
}
