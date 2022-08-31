import React from "react";
import tb from "../../data/produtos";

export default (props) => {
  const PRDTS = tb.map((produto) => {
    return (

        
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td> {produto.preço}</td> 
      </tr>
    );
  });

  return (
    <div>
      <table style={{left: '120px'}} border='1'>
        <tr>
          <td width={'101'}>ID </td>
          <td width={'1066'}> Nome do produto </td>
          <td width={'250'}> Preço (R$)</td>
        </tr>
        {PRDTS}
      </table>
    </div>
  );
};
