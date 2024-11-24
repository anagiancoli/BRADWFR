import { useState } from "react";
import Quadrado from "./Quadrado";
import CalcularVencedor from "./CalcularVencedor";

export function Tabela( { vezDoX, squares, aoJogar } ) {
  function receberClick(i) {
    if (CalcularVencedor(squares) || squares[i]){
      return;
    }
    const proxQuadrado = squares.slice();
    if (vezDoX){
      proxQuadrado[i] = 'X';
    }else {
      proxQuadrado[i] = 'O';
    }

    aoJogar(proxQuadrado);

  }

  const vencedor = CalcularVencedor(squares);
  let status;
  if (vencedor) {
    status = 'Vencedor: ' + vencedor + '';
  }else {
    status = 'Próximo jogador: ' + (vezDoX ? 'X' : 'O');
  }

  return (

    
      <>
        <div className="status">{status}</div>

        <div className="board-row">
          <Quadrado value={squares[0]} aoClicarQuadrado={() => receberClick(0)}/>
          <Quadrado value={squares[1]} aoClicarQuadrado={() => receberClick(1)}/>
          <Quadrado value={squares[2]} aoClicarQuadrado={() => receberClick(2)}/>
        </div>
        <div className="board-row">
          <Quadrado value={squares[3]} aoClicarQuadrado={() => receberClick(3)}/>
          <Quadrado value={squares[4]} aoClicarQuadrado={() => receberClick(4)}/>
          <Quadrado value={squares[5]} aoClicarQuadrado={() => receberClick(5)}/>
        </div>
        <div className="board-row">
          <Quadrado value={squares[6]} aoClicarQuadrado={() => receberClick(6)}/>
          <Quadrado value={squares[7]} aoClicarQuadrado={() => receberClick(7)}/>
          <Quadrado value={squares[8]} aoClicarQuadrado={() => receberClick(8)}/>
        </div>
      </>
  );
}
  

