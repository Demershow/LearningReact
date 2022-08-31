import React from "react";
import tb from "../../data/produtos";

export default (props) => {
  const PRDTS = tb.map((produto) => {
    return (

        
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td> R$ {produto.preço}</td> 
      </tr>
    );
  });

  return (
    <div>
      <table style={{left: '120px'}} border='1' width='100%'>
        <tr>
          <td >ID </td>
          <td > Nome do produto </td>
          <td > Preço</td>
        </tr>
        {PRDTS}
      </table>
    </div>
  );
};
