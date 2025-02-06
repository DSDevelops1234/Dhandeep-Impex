import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './styles/index.css'
import { ShopProvider } from './contexts/ShopContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ShopProvider>
        <App />
      </ShopProvider>
    </Router>
  </React.StrictMode>,
)