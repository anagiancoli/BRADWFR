import React from 'react';

function Cell({ value, onClick }) {
  const renderIcon = (value) => {
    if (value === "X") return <i className="bi bi-heart-fill x-icon"></i>;
    if (value === "O") return <i className="bi bi-star-fill o-icon"></i>;
    return null;
  };

  return (
    <div className={`cell ${value}`} onClick={onClick}>
      {renderIcon(value)}
    </div>
  );
}

export default Cell;
