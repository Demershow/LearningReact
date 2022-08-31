import React from "react";
import IF, { Else }from "./if";

export default (props) => {
  const usuario = props.usuario || {};

  return (
    <div>
      {/* <IF test={usuario && usuario.nome}>
        Seja bem vindo <strong> {usuario.nome}</strong>!
      </IF>
      <IF test={!usuario || !usuario.nome}>
        Seja bem vindo <strong>Amigo!</strong>!
      </IF> */}


      <IF test={usuario && usuario.nome}>
        Seja bem vindo <strong> {usuario.nome}</strong>!
        <Else>
             Seja bem vindo <strong>Amigo!</strong>!
        </Else>
      </IF>
    </div>
  );
};
