import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RoutePages } from './routes/Routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutePages />
  </StrictMode>,
)
