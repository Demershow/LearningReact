import Layout from "../components/Layout";
import { useState } from "react";

export default function Estado() {
    

    const [numero, setNumero] = useState(0)


    function inc(){
        setNumero(numero + 1)
    }

    return(
        <Layout titulo="Componente com estado">
            <h1>Testando os estados dos componentes</h1>
            <div>{numero}</div>
            <button onClick={inc} >Inc</button>
        </Layout>
    )

}