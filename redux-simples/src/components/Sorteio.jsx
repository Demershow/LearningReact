import "./intervalo.css";
import React from "react";
import Card from "./card";
import { connect } from "react-redux";

function Sorteio (props) {

  const {max, min} = props

  return (
    <Card title="Sorteio de um numero números" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{Math.random() * (max - min) + min}</strong>
        </span>
      </div>
    </Card>
  );
};


function mapStateToProps(state) {
return {
    min: state.numbers.min,
    max: state.numbers.max
}

}

export default connect(mapStateToProps)(Sorteio)
