/**
 * Blender
 *
 * Tapered glass jar, elliptical lid, metal collar, motor base.
 *
 * The collar is the piece I was missing: without an intermediate part the jar
 * and the base read as two shapes stacked on each other rather than as one
 * assembled appliance. Real objects have joins.
 *
 * The jar is EMPTY and stays that way. Nobody leaves the blender full once
 * dinner is cooked, so there is no blender interaction in the brief — this is
 * a clean appliance sitting on a tidy counter, and that's the whole point.
 *
 * An empty vessel puts all the work on the glass itself; see the note in
 * appliances.css about why that needs a tint rather than transparency.
 *
 * Purely decorative as a result: no state, no handlers, nothing in the
 * accessibility tree.
 */
export default function Blender() {
  return (
    <div className="blender">
      <div className="blender__jar" />

      <div className="blender__handle" />
      <div className="blender__lid" />
      <div className="blender__collar" />

      <div className="blender__base">
        <div className="blender__dial" />
      </div>
    </div>
  )
}
