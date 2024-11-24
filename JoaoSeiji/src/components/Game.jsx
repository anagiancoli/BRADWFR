import { Board } from "./Board"
import { useState } from "react"
import { OutlineButtons } from "./OutlineButtons"
import "./Game.css"

export function Game(){

    // const [xIsNext, setXIsNext] = useState(true);          // para alternar entre X e O
    const [history, setHistory] = useState([Array(9).fill(null)]);     // array com o valor de cada quadrado
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares){

        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);

    }

    function jumpTo(nextMove){

        setCurrentMove(nextMove);

    }

    const moves = history.map((squares, move) => {   // mapeamento de cada movimento do jogo

        let description;

        if (move > 0) {

            description = "Go to move #" + move;

        }else {

            description = "Go to game start";

        }

        return(
            <li key={move}>
                <OutlineButtons onClick={() => jumpTo(move)} description={description}/>
            </li> 
        );
    }) 

    return(
        <>
            <div className="game">
                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>      {/* passando o xIsNext e squares q estavam no codigo do board antes */}
                </div>
                <div className="game-info">
                    <ol>{moves}</ol>
                </div>
            </div>
        </>
    )

}