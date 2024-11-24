import React from 'react';

function WinnerMessage({ winner, resetGame }) {
  return (
    <footer>
      {winner === "E" ? (
        <h2 className='winner-message'>
          <span className={winner}> Deu Velha!</span>
        </h2>
      ) : (
        <h2 className='winner-message'>
          {winner === "O" ? (
            <i className="bi bi-star-fill o-icon"></i>
          ) : (
            <i className="bi bi-heart-fill x-icon"></i>
          )}
           venceu!
        </h2>
      )}
      <button onClick={resetGame}>Recomeçar Jogo</button>
    </footer>
  );
}

export default WinnerMessage;
