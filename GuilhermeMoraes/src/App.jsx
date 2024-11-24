import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Square({ value, onSquareClick }) {
  return (
    <button id="btnJogo"className="square btn btn-outline-primary" onClick={onSquareClick} style={{ width: '100px', height: '100px', fontSize: '24px' }}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status = winner ? `Vencedor: ${winner}` : `Próximo jogador: ${xIsNext ? "X" : "O"}`;

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  return (
    <div className="text-center mt-4">
      <h4 className="mb-3">{status}</h4>
      <div className="d-flex justify-content-center">
        <div>
          {[0, 3, 6].map((row) => (
            <div key={row} className="d-flex">
              {[0, 1, 2].map((col) => (
                <Square key={row + col} value={squares[row + col]} onSquareClick={() => handleClick(row + col)} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    const description = move ? `Vá para jogada #${move}` : "Começar";
    return (
      <li key={move} className="list-group-item">
        <button className="btn btn-secondary btn-sm" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
        </div>
        <div className="col-md-4">
          <h5 className="mb-3">Histórico</h5>
          <ul className="list-group">{moves}</ul>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
