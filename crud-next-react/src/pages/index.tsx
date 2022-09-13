import Botao from "../components/button";
import Formulario from "../components/Formulario";
import Layout from "../components/layout";
import Tabela from "../components/tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,
    novoCliente,
    excluirCliente,
    salvarCliente,
    selecionarCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes();

  return (
    <div
      className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600 
    text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" clasName="mb-4" onClick={novoCliente}>
                Adicionar Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
}
