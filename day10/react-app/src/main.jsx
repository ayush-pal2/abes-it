import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import DisplayMarks from "./DisplayMarks.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <DisplayMarks />
  </StrictMode>,
)