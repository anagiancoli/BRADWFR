import React, { useState } from 'react';
import Board from './Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const moves = history.map((_, move) => (
    <li key={move} className="list-group-item p-1">
      <button className="btn btn-link" onClick={() => jumpTo(move)}>
        {move === 0 ? 'Voltar para o inicio do jogo' : `Voltar para o movimento #${move}`}
      </button>
    </li>
  ));

  return (
    <div className="game container text-center mt-5">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info mt-4">
        <h5>Movimentos anteriores</h5>
        <ul className="list-group list-group-flush">{moves}</ul>
      </div>
    </div>
  );
}