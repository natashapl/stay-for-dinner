/**
 * Toaster
 *
 * The top is an ELLIPSE sitting proud of the body, not a face inside it, and
 * the slots are thin ellipses cut into that surface. That's what makes a
 * toaster read as a rounded metal box rather than a card with lines on it —
 * see the note in appliances.css.
 *
 * .toaster__slot is what Phase 10 pops toast out of.
 */
export default function Toaster() {
  return (
    <div className="toaster">
      <div className="toaster__body" />

      <div className="toaster__top">
        <span className="toaster__slot" />
        <span className="toaster__slot" />
      </div>

      <div className="toaster__lever" />
      <div className="toaster__dial" />
      <div className="toaster__button" />
    </div>
  )
}
