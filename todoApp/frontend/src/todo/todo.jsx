import React, { Component } from "React";
import Axios from "axios";

import PageHeader from "../template/page-header";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleAdd() {
    const description = this.state.description;
    Axios.post(URL, { description }).then((resp) => console.log("funfou"));
  }
  render() {
    return (
      <div>
        <h1>
          <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
          <TodoForm
            description={this.state.description}
            handleChange={this.handleChange}
            handleAdd={this.handleAdd}
          ></TodoForm>
          <TodoList></TodoList>
        </h1>
      </div>
    );
  }
}
