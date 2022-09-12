import { useState } from "react";
import Botao from "../components/button";
import Formulario from "../components/Formulario";
import Layout from "../components/layout";
import Tabela from "../components/tabela";
import Cliente from "../core/cliente";


export default function Home() {

  const clientes = [
    new Cliente('Julia', 23, '1'),
    new Cliente('Marcus', 23, '2'),
    new Cliente('ana', 23, '3'),
    new Cliente('Thomas', 23, '4'),
  ]

  function clienteSelecionado(cliente:Cliente) {
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente:Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
  }
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')


  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600 
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
          <div className="flex justify-end">
  
          <Botao cor ='green' clasName="mb-4"
            onClick={() => setVisivel('form')}
          >
            Adicionar Cliente
            </Botao>
          </div>
          <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}/>
          </>

        ) : (

        <Formulario cliente={clientes[2]}
        cancelado={() => setVisivel('tabela')}
        clienteMudou={salvarCliente}
        />
          
        )}
      </Layout>
    </div>
  )
}
