import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import icones from "./icons/android.svg";

function Quadrado({ value, onQuadradoClick }) {
  return (
    <button className="quadrado" onClick={onQuadradoClick}>
      {value}
    </button>
  );
}

function Tabuleiro({ xIsNext, quadrados, onPlay }) {
  function handleClick(i) {
    if (calcularVencedor(quadrados) || quadrados[i]) {
      return;
    }
    const proximosQuadrados = quadrados.slice();
    if (xIsNext) {
      proximosQuadrados[i] = 'X';
    } else {
      proximosQuadrados[i] = 'O';
    }
    onPlay(proximosQuadrados);
  }

  const vencedor = calcularVencedor(quadrados);
  let status;
  let titulo;
  titulo = <img src={icones} alt="Icones" title="Teste de icones" />;
  if (vencedor) {
    status = "O vencedor é: " + vencedor;
  } else {
    status = "Próximo jogador: " + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="titulo"> {titulo} Desafie seu amigo! {titulo}</div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Quadrado value={quadrados[0]} onQuadradoClick={() => handleClick(0)} />
        <Quadrado value={quadrados[1]} onQuadradoClick={() => handleClick(1)} />
        <Quadrado value={quadrados[2]} onQuadradoClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Quadrado value={quadrados[3]} onQuadradoClick={() => handleClick(3)} />
        <Quadrado value={quadrados[4]} onQuadradoClick={() => handleClick(4)} />
        <Quadrado value={quadrados[5]} onQuadradoClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Quadrado value={quadrados[6]} onQuadradoClick={() => handleClick(6)} />
        <Quadrado value={quadrados[7]} onQuadradoClick={() => handleClick(7)} />
        <Quadrado value={quadrados[8]} onQuadradoClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Jogo() {
  const [historico, setHistorico] = useState([Array(9).fill(null)]);
  const [movimentoAtual, setMovimentoAtual] = useState(0);
  const xIsNext = movimentoAtual % 2 === 0;
  const quadradosAtuais = historico[movimentoAtual];

  function handlePlay(proximosQuadrados) {
    const proximoHistorico = [...historico.slice(0, movimentoAtual + 1), proximosQuadrados];
    setHistorico(proximoHistorico);
    setMovimentoAtual(proximoHistorico.length - 1);
  }

  function irPara(movimento) {
    setMovimentoAtual(movimento);
  }

  const jogadas = historico.map((quadrados, movimento) => {
    let descricao;
    if (movimento > 0) {
      descricao = 'Vá para a jogada #' + movimento;
    } else {
      descricao = 'Reinicie o jogo! ';
    }
    return (
      <li key={movimento}>
        <button class="btn btn-danger custom-buttom" onClick={() => irPara(movimento)}>{descricao}</button>
      </li>
    );
  });

  return (
    <div className="jogo">
      <div className="tabuleiro-jogo">
        <Tabuleiro xIsNext={xIsNext} quadrados={quadradosAtuais} onPlay={handlePlay} />
      </div>
      <div className="info-jogo">
        <ol>{jogadas}</ol>
      </div>
    </div>
  );
}

function calcularVencedor(quadrados) {
  const linhas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < linhas.length; i++) {
    const [a, b, c] = linhas[i];
    if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
      return quadrados[a];
    }
  }
  return null;
}