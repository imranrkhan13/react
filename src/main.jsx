import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TemporaryName from './scrimba/index.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TemporaryName />
    <App />
  </StrictMode>,
)

