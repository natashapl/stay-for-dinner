import { useState } from 'react'

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
  const [waterOn, setWaterOn] = useState(false)

  return (
    <div className={`sink-area${waterOn ? ' is-running' : ''}`}>
      <div className="sink">
        <div className="sink__basin" />
        <div className="sink__ripple" />
      </div>

      <div className="faucet">
        <div className="faucet__arc" />
        <div className="faucet__riser" />
        <div className="faucet__spout" />
        <div className="faucet__handle" />
        <div className="faucet__water" />

        <button
          className="faucet__trigger scene-control"
          type="button"
          aria-label={waterOn ? 'Turn off the faucet' : 'Turn on the faucet'}
          aria-pressed={waterOn}
          onClick={() => setWaterOn((current) => !current)}
        >
          <span className="scene-control__prompt" aria-hidden="true">
            {waterOn ? 'Turn off water' : 'Turn on water'}
          </span>
        </button>
      </div>
    </div>
  )
}
