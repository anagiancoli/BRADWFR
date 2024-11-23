import Quadrado from "./Quadrado";
import Estrela from "./Estrela";
import Coracao from "./Coracao";


function calculaVencedor(quadrados) {
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
        if (quadrados[a] && quadrados[a].type === quadrados[b]?.type && quadrados[a].type === quadrados[c]?.type) {
            return quadrados[a].type;
        }
    }
    return null;
}

export default function Tabuleiro({ vez, quadrados, onPlay }) {
    function hQlique(i) {
        if (calculaVencedor(quadrados) || quadrados[i]) {
            return;
        }
        const proxQuadrado = quadrados.slice();
        if (vez) {
            proxQuadrado[i] = { type: 'estrela', component: <Estrela /> };
        } else {
            proxQuadrado[i] = { type: 'coracao', component: <Coracao /> };
        }
        onPlay(proxQuadrado);
    }

    const vencedor = calculaVencedor(quadrados);
    let status = vencedor
        ? "O vencedor é: " + (vencedor === "estrela" ? "Estrela" : "Coração")
        : "Próximo jogador: " + (vez ? "Estrela" : "Coração");

    return (
        <>
            <div className="status">{status}</div>
            <div className="linha">
                <Quadrado value={quadrados[0]?.component} cliqueQ={() => hQlique(0)} />
                <Quadrado value={quadrados[1]?.component} cliqueQ={() => hQlique(1)} />
                <Quadrado value={quadrados[2]?.component} cliqueQ={() => hQlique(2)} />
            </div>
            <div className="linha">
                <Quadrado value={quadrados[3]?.component} cliqueQ={() => hQlique(3)} />
                <Quadrado value={quadrados[4]?.component} cliqueQ={() => hQlique(4)} />
                <Quadrado value={quadrados[5]?.component} cliqueQ={() => hQlique(5)} />
            </div>
            <div className="linha">
                <Quadrado value={quadrados[6]?.component} cliqueQ={() => hQlique(6)} />
                <Quadrado value={quadrados[7]?.component} cliqueQ={() => hQlique(7)} />
                <Quadrado value={quadrados[8]?.component} cliqueQ={() => hQlique(8)} />
            </div>
        </>
    );
}