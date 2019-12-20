import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class Todos extends Component {
  state = {};
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            markComplite={this.props.markComplite}
            doDelete={this.props.doDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Todos;
