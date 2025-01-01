import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portafolio from './pages/portafolio'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portafolio />
  </StrictMode>,
)
