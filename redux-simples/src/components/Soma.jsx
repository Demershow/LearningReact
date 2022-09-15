import "./intervalo.css";
import React from "react";
import Card from "./card";

export default (props) => {
  return (
    <Card title="Soma dos números"  green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>10</strong>
        </span>
      </div>
    </Card>
  );
};
