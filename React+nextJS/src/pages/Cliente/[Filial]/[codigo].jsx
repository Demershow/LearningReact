import Layout from "../../../components/Layout";
import { useRouter } from 'next/router'

export default function ClientePorCodigo(){
    const Router = useRouter()

    console.log(Router.query)
    return (
        <Layout titulo ="Navegação Dinamica ">
            <div>Codigo: {Router.query.codigo}</div>
            <div>Filial: {Router.query.Filial}</div>
        </Layout>

    )

}