import { useState } from "react";
import Tabuleiro from "./Tabuleiro";

export default function Jogo() {
    const [vez, setVez] = useState(true);
    const [historico, setHistorico] = useState([Array(9).fill(null)]);
    const qAtual = historico[historico.length - 1];

    function hPlay(proxQuadrado) {
        setHistorico([...historico, proxQuadrado]);
        setVez(!vez);
    }

    function indo(movimento) {
        const updatedhistorico = historico.slice(0, movimento + 1);
        setHistorico(updatedhistorico);
        setVez(movimento % 2 === 0);
    }

    const movimentos = historico.map((_, movimento) => {
        const desc = movimento > 0 ? "Ir para o movimento #" + movimento : "Reiniciar o jogo";
        return (
            <li key={movimento}>
                <button id="btnMov" onClick={() => indo(movimento)}>{desc}</button>
            </li>
        );
    });

    return (
        <div className="jogo">
            <div className="jogoTabuleiro">
                <Tabuleiro vez={vez} quadrados={qAtual} onPlay={hPlay} />
            </div><br></br>
            <div className="jogoInfo">
                <ol>{movimentos}</ol>
            </div>
        </div>
    );
}