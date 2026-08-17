import { Analytics } from '@vercel/analytics/react'
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

      <p className="page__hint">Hover, click, tap or tab through the kitchen to explore</p>

      <footer className="page__outro">
        <p>
          Built by{' '}<a
            href="https://www.natashasfolio.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Natasha Pierre-Louis
          </a> for the{' '}
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

      <Analytics />
    </div>
  )
}

