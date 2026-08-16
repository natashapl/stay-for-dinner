/**
 * SinkArea
 *
 * Sink basin dropped into the counter below the window, plus the gooseneck
 * faucet.
 *
 * The faucet is a pull-down shape: a tall straight riser, a hook over the top,
 * and a short spout coming back down. The hook is a bordered box; the riser
 * and spout are separate so the two sides can be different lengths.
 */
export default function SinkArea() {
  return (
    <div className="sink-area">
      <div className="sink">
        <div className="sink__basin" />
      </div>

      <div className="faucet">
        <div className="faucet__arc" />
        <div className="faucet__riser" />
        <div className="faucet__spout" />
        <div className="faucet__handle" />
      </div>
    </div>
  )
}
