import Layout from "../components/Layout"

export default function Jsx(){

    const title = <h1>Jsx é um conceito central!</h1>

    function subtitulo () {
        return <h2>{'é legal'.toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Entendendo o JSX    ">
            {title}
            {subtitulo()}
            <p>
            {JSON.stringify({nome: 'joão', idade: '30', amigo: true})}
            </p>
        </Layout>
    )
}