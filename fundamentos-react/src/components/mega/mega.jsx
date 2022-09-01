import React, { useState } from "react";
import './Mega.css'
export default (props) => {
  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);
    return numeros;
  }
  const [numeros, setNumeros] = useState(Array(props.qtde || 6).fill(0));
  const [qtde, setQtde] = useState(props.qtde || 6);

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label>Quantidade de numeros</label>
        <input
          type="number"
          value={qtde}
          onChange={(e) => setQtde(+e.target.value)}
        />
      </div>
      <button onClick={(_) => setNumeros(gerarNumeros(qtde))}>
        Sortear ganhador!
      </button>
    </div>
  );
};
