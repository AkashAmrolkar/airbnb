import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './store/Auth'
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <React.StrictMode>
  <BrowserRouter>
        <App />
  </BrowserRouter>
  </React.StrictMode>,
  </AuthProvider>
)
