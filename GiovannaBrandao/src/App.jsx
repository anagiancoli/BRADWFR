import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Jogo } from './componentes/Jogo'

function App() {

  return (
    <>
      <h1>Jogo da Velha</h1>
      <div className="app">
        <Jogo/>
       
        
      </div>
     
    </>
  )
}

export default App
