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


  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600 
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
