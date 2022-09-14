import React, { Component } from "React";
import PageHeader from "../template/page-header";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state ={description: '', list: []}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        console.log(this.state.description)
    }
    render(){
        return(
            <div>
                <h1>
                    <PageHeader name='Tarefas' small="Cadastro"></PageHeader>
                    <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}></TodoForm>
                    <TodoList></TodoList>
                </h1>
            </div>
        )
    }
}