import React from 'react';
import Cell from './Cell';

function Board({ board, handleClick }) {
  return (
    <div className={`board`}>
      {board.map((item, index) => (
        <Cell key={index} value={item} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
}

export default Board;
