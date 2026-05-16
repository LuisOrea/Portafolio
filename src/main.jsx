import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RoutePages } from './Routes/Routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutePages />
  </StrictMode>,
)
