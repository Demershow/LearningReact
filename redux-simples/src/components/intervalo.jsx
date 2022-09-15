import "./intervalo.css";
import React from "react";
import Card from "./card";

export default (props) => {
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={0} />
        </span>
        <span>
          <strong>Maximo:</strong>
          <input type="number" value={10} />
        </span>
      </div>
    </Card>
  );
};
