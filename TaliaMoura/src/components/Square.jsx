function Square({ value, onSquareClick, isWinner, isDraw }) {
    return (
      <button
        className={`square ${isWinner ? 'winner' : ''} ${isDraw ? 'draw' : ''}`}
        onClick={onSquareClick}
      >
        {value}
      </button>
    );
  }
  
  export default Square;
  