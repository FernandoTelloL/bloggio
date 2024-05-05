import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CategoryProvider } from './context/CategoryProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </React.StrictMode>,
)
