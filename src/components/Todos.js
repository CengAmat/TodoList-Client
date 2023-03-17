import React, { Component } from "react";
import axios from "axios";
import { variables } from "../api/api";

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  refreshTodos() {
    axios.get(variables.APP_URL).then((resp) => {
      console.log(resp.data);
      this.setState({ todos: resp.data });
    });
  }

  componentDidMount() {
    this.refreshTodos();
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}
