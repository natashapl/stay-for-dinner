/**
 * KitchenIsland
 *
 * The foreground island: butcher-block top, panelled base, three stools.
 * The food in Phase 3 sits on .island__top, so that surface is the one piece
 * of geometry worth keeping stable from here on.
 *
 * Stools are separate from the island because they sit in front of it in the
 * depth stack - they overlap the base rather than belonging to it.
 */

const STOOLS = ['14%', '42.5%', '71%']

export default function KitchenIsland() {
  return (
    <>
      <div className="island">
        <div className="island__top" />
        <div className="island__edge" />
        <div className="island__base" />
      </div>

      <div className="stools">
        {STOOLS.map((left) => (
          /* Back pair first, so they paint behind the seat and the front legs.
             A four-legged stool seen head-on shows its back legs BETWEEN the
             front ones, not outside them - that's the perspective cue. */
          <div key={left} className="stool" style={{ left }}>
            <div className="stool__leg stool__leg--back-left" />
            <div className="stool__leg stool__leg--back-right" />
            <div className="stool__seat" />
            <div className="stool__leg stool__leg--left" />
            <div className="stool__leg stool__leg--right" />
          </div>
        ))}
      </div>
    </>
  )
}
