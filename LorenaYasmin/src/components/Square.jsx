import React from 'react';

export default function Square({ value, onSquareClick }) {
  return (
    <button className="square btn btn-light border border-secondary" onClick={onSquareClick} style={{ width: '60px', height: '60px', fontSize: '24px' }}>
      {value === 'X' && <i className="bi bi-x-lg text-primary"></i>}
      {value === 'O' && <i className="bi bi-circle text-danger"></i>}
    </button>
  );
}
