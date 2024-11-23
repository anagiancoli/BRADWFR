
export default function Quadrado ({value, cliqueQ}){

    return(
    <>
    <button className="quadrado" onClick={cliqueQ}>{value}</button>
    </>
    );
}

