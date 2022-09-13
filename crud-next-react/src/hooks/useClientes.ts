import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/cliente"
import ClienteRep from "../core/ClienteRep"
import useTabelaVisivel from "./useTabelaVisivel"
export default function useClientes(){
    const repo: ClienteRep = new ColecaoCliente()

const {tabelaVisivel, formularioVisivel, exibirForm, exibirTabela} = useTabelaVisivel()

  const [cliente, setCliente ] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes ] = useState<Cliente[]>([])

useEffect( obterTodos,[])


function obterTodos(){
  
  repo.obterTodos().then(clientes =>{
    setClientes(clientes)
    exibirTabela()
  })
  }

  function selecionarCliente(cliente:Cliente) {
    setCliente(cliente)
    exibirForm()
  }
  async function excluirCliente(cliente:Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }
  function novoCliente(){
    setCliente(Cliente.vazio)
    exibirForm()
  }

  return {
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    cliente,
    clientes,
    tabelaVisivel,
    formularioVisivel,
    exibirTabela
  }
}