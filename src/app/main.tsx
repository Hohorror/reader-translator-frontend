import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StyleProvider } from '@ant-design/cssinjs'
import './index.css'

import { Router } from './routes'
import { ConfigProvider } from 'antd'

const colorPrimary = '#4f46e5'

const App = () => (
  <StrictMode>
    <StyleProvider layer>
      <ConfigProvider theme={{ token: { colorPrimary, colorLink: colorPrimary }, hashed: false }}>
        <Router />
      </ConfigProvider>
    </StyleProvider>
  </StrictMode>
)

createRoot(document.getElementById('root')!).render(<App />)
