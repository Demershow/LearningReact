import Layout from "../components/layout";


export default function Home() {
  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-purple-500 to-blue-600 
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <span>content</span>
      </Layout>
    </div>
  )
}
