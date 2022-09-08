import styles from "../styles/Estiloso.module.css";
import Layout from "../components/Layout";
export default function Estiloso() {
  return (
    <Layout titulo="CSS modularizado">
      <div className={styles.roxo}>
        <h1>Estiloso Usando CSS modular</h1>
      </div>
    </Layout>
  );
}
