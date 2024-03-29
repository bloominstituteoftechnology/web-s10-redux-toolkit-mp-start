import './styles/reset.css'
import './styles/styles.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

// ✨ wrap <App /> with a provider
root.render(
  <App />
)
