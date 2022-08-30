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
      <Card titulo="Exercicio #04 - Desafio Aleatório">
        <Aleatorio min={1} max={100}></Aleatorio>
      </Card>

      <Card titulo="Exercicio #03 - fragmento">
        <Fragmento></Fragmento>
      </Card>

      <Card titulo="Exercicio #02 - Com Parâmetro">
        <ComParametro
          titulo="situação do aluno"
          NomeDoAluno="Julio"
          nota={2.4}
        ></ComParametro>
      </Card>

      <Card titulo="Exercicio #01 - Primeiro component">
        <Primeiro></Primeiro>
      </Card>

    </div>
  </div>
);
