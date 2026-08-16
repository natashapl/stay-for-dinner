/**
 * Window
 *
 * The main visual anchor of the back wall. Phase 2 builds the joinery only —
 * casing, sash, mullions, sill. The sky behind it is a placeholder gradient;
 * Phase 6 adds the sun, clouds and landscape.
 *
 * The four panes are one element. The mullions are drawn as pseudo-elements
 * crossing the glass rather than as a 2x2 grid of pane divs.
 */
export default function Window() {
  return (
    <div className="window">
      <div className="window__glass">
        <div className="window__sky" />
      </div>
      <div className="window__sill" />
    </div>
  )
}
