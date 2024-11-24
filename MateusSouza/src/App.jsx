import React, { useState, useEffect } from 'react';
import '/src/App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Board from './assets/components/Board';
import WinnerMessage from './assets/components/WinnerMessage';

function TicTacToe() {
  const emptyBoard = Array(9).fill("");

  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index] !== "") {
      return;
    }

    setBoard(
      board.map((item, itemIndex) => (itemIndex === index ? currentPlayer : item))
    );

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = () => {
    const possibleWaysToWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    possibleWaysToWin.forEach((cells) => {
      if (cells.every((index) => board[index] === "O")) setWinner("O");
      if (cells.every((index) => board[index] === "X")) setWinner("X");
    });

    checkDraw();
  };

  const checkDraw = () => {
    if (board.every((item) => item !== "") && !winner) {
      setWinner("E");
    }
  };

  useEffect(() => {
    checkWinner();
  }, [board]);

  const resetGame = () => {
    setCurrentPlayer("O");
    setBoard(emptyBoard);
    setWinner(null);
  };

  return (
    <main>
      <h1 className='tittle'>Jogo da Velha</h1>
      <Board board={board} handleClick={handleClick} />
      {winner && <WinnerMessage winner={winner} resetGame={resetGame} />}
    </main>
  );
}

export default TicTacToe;
