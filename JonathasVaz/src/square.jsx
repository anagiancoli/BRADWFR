import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button className="square btn btn-outline-primary" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
