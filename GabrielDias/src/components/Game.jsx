import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { Tabela } from "./Tabela";


export default function Game() {
    const [historico, setHistorico] = useState([Array(9).fill(null)]);
    const [jogadaAtual, setJogadaAtual] = useState(0);
    const vezDoX = jogadaAtual % 2 === 0;
    const quadradosAtuais = historico[jogadaAtual];
  
    function controlarJogo(proxQuadrado) {
        const proxHistorico = [...historico.slice(0, jogadaAtual + 1), proxQuadrado];
        setHistorico(proxHistorico);
        setJogadaAtual(proxHistorico.length - 1);
    }

    function pularPara(proximaJogada) {
        setJogadaAtual(proximaJogada);
    }

    const moves = historico.map((squares, move) => {
        let descricao;
        if (move > 0) {
          descricao = '  Ir para a jogada #' + move;
        } else {
          descricao = '  Ir para o inicio do jogo';
        }
        return (
          <ul key={move}>
            <button className="movimento btn btn-primary" onClick={() => pularPara(move)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rewind-circle-fill" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7.729 5.055A.5.5 0 0 1 8 5.5v1.886l3.21-2.293A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8 8.614V10.5a.5.5 0 0 1-.79.407l-3.5-2.5a.5.5 0 0 1 0-.814l3.5-2.5a.5.5 0 0 1 .519-.038"/>
            </svg>
            {descricao} 
            </button>
          </ul>
        );
      });
  
    return (

       <div className="game">
        <div className='gameTitle'>Jogo da Velha</div>
         <div className="game-board">
           <Tabela vezDoX={vezDoX} squares={quadradosAtuais} aoJogar={controlarJogo} />
         </div>
         <div className="game-info">
          <ol>{moves}</ol>
         </div>
       </div>
    );
   }
  