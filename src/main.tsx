import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Add CSS to render all elements more consistenly in all browsers
import './normalize.css'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
