import Navegador from "../components/Navegador";
export default function Inicio() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      height: '100vh',
      flexWrap: 'wrap',
    }}>
        <Navegador destino="/estiloso" texto="Estiloso" cor="#670bbd" ></Navegador>
        <Navegador destino="/exemplo" texto="Exemplo" ></Navegador>
        <Navegador destino='/jsx' texto="JSX" cor="dodgerblue" ></Navegador>
        <Navegador destino='/Navegacao' texto="Navegação" cor="green" ></Navegador>
        <Navegador destino='/Cliente/sp-leste/123' texto="Navegação Dinamica" cor="#DAA520" ></Navegador>
        <Navegador destino='/estado' texto="Componente com estado" cor="#898989" ></Navegador>
        <Navegador destino='/integracao_1' texto="Integração com API" cor="brown" ></Navegador>
    </div>
  );
}
