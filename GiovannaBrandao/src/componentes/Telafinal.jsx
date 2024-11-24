import React from "react";


export function Telafinal({limparHistorico, placar,resetJogo, jogador, empate}){
    return(
        <div className="screen">
            {!empate && <span className="texto">{jogador ? "O VENCEU!" : "X VENCEU!"}</span>}
            {empate && <span className="texto">EMPATE!</span>}

            <span className="historico">
              PLAYER X's: {placar.X}
              <br/>
              PLAYER O's: {placar.O}
            </span>

           <button className="bttn" onClick={resetJogo}>
               Jogar Novamente
            </button>
            <button className="bttn" onClick={limparHistorico}>
                Reiniciar Jogo
            </button>
        
        </div>
    )
}