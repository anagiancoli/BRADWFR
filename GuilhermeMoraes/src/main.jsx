import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <section>
  <div className='principal'>
  <h1 className='titulo'>Jogo da Velha</h1>
  </div>
  <StrictMode>
    <App />
  </StrictMode>,
  </section>
)
