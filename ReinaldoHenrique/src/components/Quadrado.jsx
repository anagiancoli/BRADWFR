import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTimes, FaRegCircle } from 'react-icons/fa'; 

function Quadrado({ value, onSquareClick }) {
  const renderIcon = () => {
    if (value === 'X') return <FaTimes />;
    if (value === 'O') return <FaRegCircle />;
    return null;
  };

  return (
    <Button variant="light" className="square" onClick={onSquareClick}>
      {renderIcon()}
    </Button>
  );
}

export default Quadrado;