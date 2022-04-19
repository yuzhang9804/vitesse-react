import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
