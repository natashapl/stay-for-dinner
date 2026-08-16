import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/* Load order matters: tokens first so everything below can read them,
   responsive last so its overrides land at the end of the cascade. */
import './styles/variables.css'
import './styles/reset.css'
import './styles/page.css'
import './styles/scene.css'

/* Scene artwork, ordered back to front like the room itself. */
import './styles/kitchen.css'
import './styles/window.css'
import './styles/sky.css'
import './styles/cabinetry.css'
import './styles/sink.css'
import './styles/island.css'
import './styles/appliances.css'
import './styles/decor.css'
import './styles/food.css'
import './styles/animations.css'

/* Lighting passes last — they re-light everything above. */
import './styles/depth.css'

import './styles/responsive.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
