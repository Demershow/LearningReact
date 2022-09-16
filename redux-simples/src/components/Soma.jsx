import "./intervalo.css";
import React from "react";
import Card from "./card";
import { connect } from "react-redux";

function Soma(props){

  const {min, max} = props

  return (
    <Card title="Soma dos números"  green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{min + max}</strong>
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  };
}

export default connect(mapStateToProps)(Soma)
