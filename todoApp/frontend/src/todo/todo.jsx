import React, { Component } from "React";
import Axios from "axios";

import PageHeader from "../template/page-header";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = "http://localhost:3004/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);

    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending(this);
    this.handleMarkAsDone = this.handleMarkAsDone(this);
    this.refresh();
  }

  handleMarkAsDone(todo) {
    Axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then((resp) =>
      this.refresh()
    );
  }

  handleMarkAsPending(todo) {
    Axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then((resp) =>
      this.refresh()
    );
  }

  handleRemove(todo) {
    Axios.delete(`${URL}/${todo._id}`).then((resp) => this.refresh());
  }

  refresh() {
    Axios.get(`${URL}?sort=createdAt`).then((resp) =>
      this.setState({ ...this.state, description: "", list: resp.data })
    );
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleAdd(todo) {
    const description = this.state.description;
    Axios.post(URL, { description }).then((resp) => this.refresh());
    console.log(todo.id)
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
          <TodoList
            list={this.state.list}
            handleRemove={this.handleRemove}
            handleMarkAsDone={this.handleMarkAsDone}
            handleMarkAsPending={this.handleMarkAsPending}
          ></TodoList>
        </h1>
      </div>
    );
  }
}
