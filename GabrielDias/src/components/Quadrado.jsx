import { useState } from "react"

export default function Quadrado({value, aoClicarQuadrado}){
    return (
        <>
        <button className="quadrado" onClick={aoClicarQuadrado}>
            {value}
        </button> 
        </>
    );
}