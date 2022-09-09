import Link from "next/link";
import Styles from "./../styles/Navegador.module.css"

export default function Navegador (props) {
  return (
    <Link href={props.destino}>
      <div className={Styles.Texto}  style={{
        backgroundColor: props.cor ??  '#000'
      }}>
        {props.texto}
        </div>
    </Link>
  );
}
