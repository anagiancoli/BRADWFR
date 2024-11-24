import React, { useState } from "react";
import { Container } from "./Container";
import { Telafinal } from "./Telafinal";

const pontoinicial = "";
const jogadorx = "X";
const jogadoro = "O";
const combinacaovitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 0]
];




export function Jogo(){
    const[tabuleiro, setTabuleiro] = useState(Array(9).fill(pontoinicial));
    const [jogador, setJogador] = useState(false);
    const [fimdejogo, setFimdeJogo] = useState(false);
    const [empate, setEmpate] = useState(false);
    const [placar, setPlacar] = useState({X: 0, O: 0});


    function GameOver(){
        if(!fimdejogo){

         for(let i = 0; i < 8; i++){
            if(
                tabuleiro[combinacaovitoria[i][0]] === jogadorx &&
                tabuleiro[combinacaovitoria[i][1]] === jogadorx &&
                tabuleiro[combinacaovitoria[i][2]] === jogadorx 

            ) {
                setFimdeJogo(true);
                setPlacar((prev) => ({ ...prev, X: prev.X + 1 }))            
                console.log("JOGADOR X VENCEU!");
                return;
            }
         }

         for(let i = 0; i < 8; i++){
            if(
                tabuleiro[combinacaovitoria[i][0]] === jogadoro &&
                tabuleiro[combinacaovitoria[i][1]] === jogadoro &&
                tabuleiro[combinacaovitoria[i][2]] === jogadoro 

            ) {
                setFimdeJogo(true);
                setPlacar((prev) => ({ ...prev, O: prev.O + 1 }))            
                console.log("JOGADOR O VENCEU!");
                return;
            }
         }


        if(!tabuleiro.includes(pontoinicial)){
            setEmpate(true);
            setFimdeJogo(true);
            console.log("EMPATE!");
        }
      }
    }


  function resetJogo(){
      setTabuleiro(Array(9).fill(pontoinicial));
      setFimdeJogo(false);
      setEmpate(false);
  }

  function limparHistorico(){
    setPlacar({X: 0, O: 0});
    resetJogo();
  }

    GameOver();


    function handleClick(id) {
        setTabuleiro(
            tabuleiro.map((item, index) => {
                if(index === id) {
                if(jogador){
                    return jogadorx;
                } else{
                    return jogadoro;
                }
              } else{
                return item;
              }
            })
        );
        setJogador(!jogador);
    }
    
    return(
        <div>
             <span className="historicotela">
              PLAYER X's: {placar.X}
              <br/>
              PLAYER O's: {placar.O}
            </span>
       {fimdejogo &&
        <Telafinal 
        placar={placar} 
        resetJogo={resetJogo} 
        jogador={jogador} 
        empate={empate}
        limparHistorico={limparHistorico}/>}
        <Container clickedArray={tabuleiro} handleClick={handleClick}/>
        </div>
    )
}