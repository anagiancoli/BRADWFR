import '../styles/Modal.css'

export default function Modal({ winner, reset }) {
  if (winner === null) return null;

  const winnerText = winner === false ? 'Empate' : 'Ganhou:';

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
            {winner && <span>{winner}</span>}
        </header>

        <footer>
          <button onClick={reset}>Jogar de novo</button>
        </footer>
      </div>
    </section>
  );
}
