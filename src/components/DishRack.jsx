/**
 * DishRack
 *
 * Wooden rack left of the sink with four plates stood on edge.
 *
 * The plates are elements because they overlap each other and each needs its
 * own shadow; the rack's slats are a repeating-linear-gradient, because they
 * are identical, evenly spaced and never addressed individually.
 */

const PLATES = [0, 1, 2, 3]

export default function DishRack() {
  return (
    <div className="dish-rack">
      {PLATES.map((i) => (
        <div key={i} className="dish-rack__plate" style={{ '--i': i }} />
      ))}

      <div className="dish-rack__frame" />
    </div>
  )
}
