import React, { useState } from 'react';
import './App.css';

const squares = Array(9).fill(null);

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
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
};

const App = () => {
  const [history, setHistory] = useState([{ squares }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [winnerLine, setWinnerLine] = useState([]);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const status = winner ? `Vencedor: ${winner.winner}` : '';

  const handleClick = (i) => {
    const squaresCopy = current.squares.slice();
    if (winner || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    
    const result = calculateWinner(squaresCopy);
    if (result) {
      setWinnerLine(result.line);
    }

    setHistory(history.concat([{ squares: squaresCopy }]));
    setStepNumber(history.length);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    const isWinningSquare = winnerLine.includes(i);
    return (
      <button 
        className={`square ${current.squares[i]} ${isWinningSquare ? 'winning' : ''}`} 
        onClick={() => handleClick(i)}
      >
        {current.squares[i]}
      </button>
    );
  };

  const restartGame = () => {
    setHistory([{ squares }]);
    setStepNumber(0);
    setXIsNext(true);
    setWinnerLine([]);
  };

  return (
    <div className="game">
      <div className="game-board">
        <div className="status">{status}</div>
        <div className="next-player">
          Próximo jogador: {xIsNext ? 'X' : 'O'}
        </div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button className="restart-button" onClick={restartGame}>
          Reiniciar Jogo
        </button>
      </div>
    </div>
  );
};

export default App;
