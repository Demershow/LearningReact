import React, { Component } from "React";
import PageHeader from "../template/page-header";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default class Todo extends Component {
    render(){
        return(
            <div>
                <h1>
                    <PageHeader name='Tarefas' small="Cadastro"></PageHeader>
                    <TodoForm></TodoForm>
                    <TodoList></TodoList>
                </h1>
            </div>
        )
    }
}