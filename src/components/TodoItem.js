import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.complited ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <li>
        <input
          type="checkbox"
          onChange={this.props.markComplite.bind(this, id)}
        />{" "}
        <span className="list-text" style={this.getStyle()}>
          {title}
        </span>
        <button
          className="btn-delete"
          onClick={this.props.doDelete.bind(this, id)}
        >
          X
        </button>
      </li>
    );
  }
}

export default TodoItem;
