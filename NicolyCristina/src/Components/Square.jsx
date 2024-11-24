import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Square({ value, onSquareClick }) {
  return (
    //antes dos Bootstrap Icons
    // <button className="square btn btn-primary m-1 p-3" onClick={onSquareClick} style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
    //  {value}
    // </button>
    <button
      className="square btn btn-primary m-1 p-3 d-flex align-items-center justify-content-center"
      onClick={onSquareClick}
      style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}
    > 
      {value === 'X' && <i className="bi bi-x-lg" />} 
      {value === 'O' && <i className="bi bi-circle" />} 
    </button>
  );
}

export default Square;