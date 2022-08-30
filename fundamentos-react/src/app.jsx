import React from "react";
import "./App.css"
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
export default () => (
  <div className="App">
    <strong>
      <h1>Fundamentos React</h1>
    </strong>

    <div className="Cards">
      <Card titulo="Exercicio #04 - Desafio Aleatório" color="#080">
        <Aleatorio min={1} max={100}></Aleatorio>
      </Card>

      <Card titulo="Exercicio #03 - fragmento" color="#E94C6F">
        <Fragmento></Fragmento>
      </Card>

      <Card titulo="Exercicio #02 - Com Parâmetro" color="#E8B71A">
        <ComParametro
          titulo="situação do aluno"
          NomeDoAluno="Julio"
          nota={2.4}
        ></ComParametro>
      </Card>

      <Card titulo="Exercicio #01 - Primeiro component" color="#588C73">
        <Primeiro></Primeiro>
      </Card>

    </div>
  </div>
);
