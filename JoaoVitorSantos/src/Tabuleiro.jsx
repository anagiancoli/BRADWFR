import React from 'react';
import Quadrado from './Quadrado';
import { calcularVencedor } from './calculador';
import './Tabuleiro.css';

function Tabuleiro({ xEhProximo, quadrados, aoJogar }) {
  function aoClicarQuadrado(i) {
    if (calcularVencedor(quadrados) || quadrados[i]) return;
    const proximosQuadrados = quadrados.slice();
    proximosQuadrados[i] = xEhProximo ? 'X' : 'O';
    aoJogar(proximosQuadrados);
  }

  const vencedor = calcularVencedor(quadrados);
  const status = vencedor ? 'Vencedor: ' + vencedor : 'Próximo jogador: ' + (xEhProximo ? 'X' : 'O');

  return (
    <div className="tabuleiro">
      <div className="status">{status}</div>
      {[0, 3, 6].map(linha => (
        <div className="linha-tabuleiro" key={linha}>
          {[0, 1, 2].map(coluna => (
            <Quadrado key={coluna} valor={quadrados[linha + coluna]} aoClicar={() => aoClicarQuadrado(linha + coluna)} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Tabuleiro;
