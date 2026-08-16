/**
 * Shelves
 *
 * Open wooden shelves either side of the window. Phase 5 puts plants, bowls
 * and cookbooks on them; for now they are empty boards.
 *
 * Each board carries its own brackets as pseudo-elements, so a shelf is one
 * element rather than three.
 */

const LEFT_SHELVES = ['18%', '36%', '54%']
const RIGHT_SHELVES = ['18%', '36%', '54%']

export default function Shelves() {
  return (
    <>
      <div className="wall-unit shelves shelves--left">
        {LEFT_SHELVES.map((top) => (
          <div key={top} className="shelf" style={{ top }} />
        ))}
      </div>

      <div className="wall-unit shelves shelves--right">
        {RIGHT_SHELVES.map((top) => (
          <div key={top} className="shelf" style={{ top }} />
        ))}
      </div>
    </>
  )
}
