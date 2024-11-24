import React from 'react';
import { Button } from 'react-bootstrap';
import { BsXCircle, BsCircle } from 'react-icons/bs';

function Quadrado({ valor, aoClicar }) {
  const icone = valor === 'X' ? <BsXCircle size={32} color="red" /> : valor === 'O' ? <BsCircle size={32} color="blue" /> : null;

  return (
    <Button variant="outline-primary" className="quadrado" onClick={aoClicar}>
      {icone}
    </Button>
  );
}

export default Quadrado;
