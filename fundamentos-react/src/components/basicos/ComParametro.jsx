import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovadasso" : "Reprovado";
  const notaInt = Math.ceil(props.nota);

  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        O aluno <strong>{props.NomeDoAluno}</strong>, obteve nota
        <strong> {notaInt} </strong>e foi <strong>{status}</strong>
      </p>
    </div>
  );
}
