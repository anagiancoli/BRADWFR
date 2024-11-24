import React, { useState } from 'react';
import Mesa from './Mesa';
import { Button } from 'react-bootstrap';

export default function Jogo() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const quadradoAtual = history[currentMove];

  function handlePlay(proxQuadrado) {
    const nextHistory = [...history.slice(0, currentMove + 1), proxQuadrado];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const moves = history.map((quadrados, move) => {
    const description = move > 0 ? `Ir para a jogada #${move}` : 'Ir para o início do jogo';
    return (
      <li key={move}>
        <Button variant="link" onClick={() => jumpTo(move)}>
          {description}
        </Button>
      </li>
    );
  });

  return (
    <div className="game">
      <h1>Jogo da Velha</h1>
      <div className="game-container">
        <div className="game-board">
          <Mesa xIsNext={xIsNext} quadrados={quadradoAtual} onPlay={handlePlay} />
          <Button variant="primary" onClick={resetGame} className="mt-2">
            Resetar Jogo
          </Button>
        </div>
        <div className="game-info">
          <h2>Histórico de Movimentos</h2>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}
