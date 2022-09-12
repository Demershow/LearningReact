import { useState } from "react";
import Cliente from "../core/cliente";
import Botao from "./button";
import Entrada from "./Input";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void
  cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? '');
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
  return (
    <div>
      {id ? <Entrada somenteLeitura texto="Codigo: " valor={id} className='mb-4'></Entrada> : false}
      <Entrada texto="Nome: " valor={nome} valorMudou={setNome} className='mb-4'></Entrada>
      <Entrada texto="Idade: " valor={idade} tipo="number" valorMudou={setIdade}></Entrada>
      <div className="flex justify-end mt-7">
        <Botao cor="blue" clasName="mr-2"
            onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))}>
                {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao cor ='green' onClick={props.cancelado}>
                Cancelar
        </Botao>
      </div>
    </div>
  );
}
