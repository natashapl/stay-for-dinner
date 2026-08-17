/**
 * Toaster
 *
 * The top is an ELLIPSE sitting proud of the body, not a face inside it, and
 * the slots are thin ellipses cut into that surface. That's what makes a
 * toaster read as a rounded metal box rather than a card with lines on it —
 * see the note in appliances.css.
 *
 * It stays decorative: the scene's interactions are reserved for actions
 * that reveal something useful or create a believable change in the room.
 */
export default function Toaster() {
  return (
    <div className="toaster" aria-hidden="true">
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
