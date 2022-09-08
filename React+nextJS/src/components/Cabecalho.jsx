export default function Cabecalho(props) {
    //Props é somente para leitura!
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}