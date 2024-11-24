import React from 'react';
import Square from './Square';
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
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `O Ganhador foi: ${winner}`;
  } else {
    status = `Proximo a jogar: ${xIsNext ? 'X' : 'O'}`;
  }
  return (
    <div className="text-center">
      <div className="mb-3 h4">{status}</div>
      {[0, 1, 2].map((row) => (
        <div className="d-flex justify-content-center" key={row}>
          {[0, 1, 2].map((col) => {
            const index = row * 3 + col;
            return (
              <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
            );
          })}
        </div>
      ))}
    </div>
  );
}
export default Board;