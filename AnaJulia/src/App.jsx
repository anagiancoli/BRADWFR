import { useState } from 'react';
import Jogo from './assets/components/Jogo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center"
      style={{
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
        flexDirection: 'column',
        margin: '0',
        padding: '0',
      }}
    >
      <h2>JOGO DA VELHA</h2>
      <Jogo />
    </div>
  );
}

export default App;
