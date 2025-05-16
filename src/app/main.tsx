import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StyleProvider } from '@ant-design/cssinjs'
import './index.css'

import { Router } from './routes'

const App = () => (
  <StrictMode>
    <StyleProvider layer>
      <Router />
    </StyleProvider>
  </StrictMode>
)

createRoot(document.getElementById('root')!).render(<App />)
