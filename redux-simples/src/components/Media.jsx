import React from "react";
import Card from "./card";
import { connect } from "react-redux";

function Media(props) {
  const { min, max } = props;
  console.log(props.max);
  console.log(props.min);
  return (
    <Card title="Média dos números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  };
}

export default connect(mapStateToProps)(Media);
