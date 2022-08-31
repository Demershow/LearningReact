import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props =>{

    let nome ="?"
    let idade = 0
    let nerd = false

    function fornecerInfos(nomeParam, idadeParam, nerdParam) {
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam
        console.log(nomeParam, idadeParam, nerdParam)
    }

    return (
        <div>
            <div>
            <span>{nome} </span>
            <span> {idade} </span>
            <span>{nerd ? "Verdadeiro" : "falso"}</span>
            </div>
            <IndiretaFilho quandoClicark={fornecerInfos} />
        </div>
    )


}