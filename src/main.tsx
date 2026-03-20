import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import favicon from '@/assets/logo.png'
import './index.css'

let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
if (!link) {
  link = document.createElement('link')
  link.rel = 'icon'
  link.type = 'image/png'
  document.head.appendChild(link)
}
link.href = favicon

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
