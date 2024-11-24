import React, { useState } from 'react';
import './App.css';

const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(squares);

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXisNext(!xIsNext);
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setXisNext(true);
  };

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <div className="status">
        {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}
      </div>
      <Board squares={squares} onClick={handleClick} />
      <button className="btn" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
};

const calculateWinner = (squares) => {
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
};

export default Game;
