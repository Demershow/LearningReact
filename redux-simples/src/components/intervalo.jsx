import "./intervalo.css";
import React from "react";
import Card from "./card";
import { connect } from "react-redux";

import {alterarNumeroMinimo, alterarNumeroMaximo} from "./store/actions/numeros"

function Intervalo (props) {

  const {max, min} = props


  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)}/>
        </span>
        <span>
          <strong>Maximo:</strong>
          <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)}/>
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state){
  return {
    max: state.numbers.max,
    min: state.numbers.min
  }
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(novoNumero){
      const action = alterarNumeroMinimo(novoNumero)
      dispatch(action)
    },
    alterarMaximo(novoNumero) {
      const action2 = alterarNumeroMaximo(novoNumero)
      dispatch(action2)
    }
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Intervalo)
