import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Botao from "../components/button";
import Formulario from "../components/Formulario";
import Layout from "../components/layout";
import Tabela from "../components/tabela";
import Cliente from "../core/cliente";
import ClienteRep from "../core/ClienteRep";


export default function Home() {

  const repo: ClienteRep = new ColecaoCliente()

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente ] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes ] = useState<Cliente[]>([])

useEffect( obterTodos,[])


function obterTodos(){
  
  repo.obterTodos().then(clientes =>{
    setClientes(clientes)
    setVisivel('tabela')
  })
  }

  function clienteSelecionado(cliente:Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  async function clienteExcluido(cliente:Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }
  function novoCliente(){
    setCliente(Cliente.vazio)
    setVisivel('form')
  }


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
            onClick={novoCliente}
          >
            Adicionar Cliente
            </Botao>
          </div>
          <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}/>
          </>

        ) : (

        <Formulario cliente={cliente}
        cancelado={() => setVisivel('tabela')}
        clienteMudou={salvarCliente}
        />
          
        )}
      </Layout>
    </div>
  )
}
