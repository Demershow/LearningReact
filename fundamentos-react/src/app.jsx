import React from "react";
import "./App.css";
import DiretaPai from "./components/Comunicação/DiretaPai";
import UsuarioInfo from "./components/Condicional/UsuarioInfo";
import ParOuImpar from "./components/Condicional/ParOuImpar";
import TabelaProdutos from "./components/Repetição/tabelaProdutos";
import Card from "./components/layout/Card";
import ListaAlunos from "./components/Repetição/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import IndiretaPai from "./components/Comunicação/IndiretaPai"
export default () => (
  <div className="App">
    <strong>
      <h1>Fundamentos React</h1>
    </strong>

    <div className="Cards">
      <Card titulo="Exercicio #09 - Comunicação direta" color="#3a9ad9">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="Exercicio #09 - Comunicação direta" color="#3a9ad9">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="Exercicio #08 - Par ou Impar/Welcome?" color="#982395">
        <ParOuImpar numero={90}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Demerson!" }}></UsuarioInfo>
        {/* <UsuarioInfo usuario={{email: 'dmr@gmail.com'}}></UsuarioInfo> */}
      </Card>

      <Card titulo="Exercicio #07 - Repetição Produtos" color="#3a9ad9">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="Exercicio #06 - Repetição" color="#ff4c65">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="Exercicio #05 - Component com children" color="#00c8f8">
        <Familia sobrenome="Torres"></Familia>
        <FamiliaMembro nome="Demerson"></FamiliaMembro>
        <FamiliaMembro nome="Cintia"></FamiliaMembro>
        <FamiliaMembro nome="Sophia"></FamiliaMembro>
      </Card>

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
