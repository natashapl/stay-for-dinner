import Scene from './components/Scene.jsx'

export default function App() {
  return (
    <div className="page">
      <header className="page__intro">
        <h1 className="page__title">Stay for Dinner</h1>
        <p className="page__lede">
          Everything you see was made with HTML and CSS. Go ahead. Explore the kitchen.
        </p>
      </header>

      <main className="page__stage">
        <Scene />
      </main>

      <p className="page__hint">Click, tap or tab through the kitchen to explore</p>

      <footer className="page__outro">
        <p>
          Built for the{' '}
          <a
            href="https://dev.to/challenges/frontend-2026-07-29"
            target="_blank"
            rel="noreferrer noopener"
          >
            DEV Frontend Challenge: Comfort Food Edition.
          </a>
        </p>
        <p>No images, canvas or icon fonts - just elements and stylesheets.</p>
      </footer>
    </div>
  )
}
