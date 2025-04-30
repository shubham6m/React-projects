import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lottery from './Lottery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lottery />
  </StrictMode>,
)
