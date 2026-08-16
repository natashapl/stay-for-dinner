/**
 * Room
 *
 * The shell everything else sits against: back wall, tiled backsplash, floor.
 *
 * The backsplash is a single element — its running-bond tile pattern is drawn
 * entirely with gradients and two masked pseudo-elements rather than one
 * element per tile.
 */
export default function Room() {
  return (
    <div className="room">
      <div className="room__wall" />
      <div className="room__backsplash" />
      <div className="room__floor" />
    </div>
  )
}
