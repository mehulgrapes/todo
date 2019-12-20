import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.AddTodoItem(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form className="add-todo-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          className="add-input"
          placeholder="Add New item"
          value={this.state.title}
          onChange={this.onChange}
        />
        <button className="add-btn">Add</button>
      </form>
    );
  }
}

export default AddTodo;
