export default function Jsx(){
    const a = 15
    const b = 2
    const title = <h1>Jsx é um conceito central!</h1>

    function subtitulo () {
        return <h2>{'é legal'.toUpperCase()}</h2>
    }

    return (
        <div>
            {title}
            {subtitulo()}
            <p>
            {Math.random()}
            </p>
        </div>
    )
}