import React from 'react';
import Quadrado from './Quadrado';
import { FaTimes, FaRegCircle } from 'react-icons/fa';

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

function Mesa({ xIsNext, quadrados, onPlay }) {
  const winner = calculateWinner(quadrados);
  let status;

  if (winner) {
    status = (
      <div>
        Vencedor: {winner === 'X' ? <FaTimes className="winner-icon" /> : <FaRegCircle className="winner-icon" />}
      </div>
    );
  } else {
    status = (
      <div>
        Próximo jogador: {xIsNext ? <FaTimes className="next-icon" /> : <FaRegCircle className="next-icon" />}
      </div>
    );
  }

  function handleClick(i) {
    if (calculateWinner(quadrados) || quadrados[i]) {
      return;
    }
    const nextQuadrados = quadrados.slice();
    nextQuadrados[i] = xIsNext ? 'X' : 'O';
    onPlay(nextQuadrados);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Quadrado value={quadrados[0]} onSquareClick={() => handleClick(0)} />
        <Quadrado value={quadrados[1]} onSquareClick={() => handleClick(1)} />
        <Quadrado value={quadrados[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Quadrado value={quadrados[3]} onSquareClick={() => handleClick(3)} />
        <Quadrado value={quadrados[4]} onSquareClick={() => handleClick(4)} />
        <Quadrado value={quadrados[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Quadrado value={quadrados[6]} onSquareClick={() => handleClick(6)} />
        <Quadrado value={quadrados[7]} onSquareClick={() => handleClick(7)} />
        <Quadrado value={quadrados[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Mesa;