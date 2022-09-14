import React, { Component } from "React";
import PageHeader from "../template/page-header";

export default class Todo extends Component {
    render(){
        return(
            <div>
                <h1>
                    <PageHeader name='Tarefas' small="Cadastro"></PageHeader>
                </h1>
            </div>
        )
    }
}