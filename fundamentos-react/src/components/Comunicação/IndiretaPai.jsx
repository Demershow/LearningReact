import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props =>{

    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState (false)

    function fornecerInfos(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
        console.log(nome, idade, nerd)
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