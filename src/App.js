import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./layout/header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import axios from "axios";

export class App extends Component {
  state = {
    todos: []
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=30")
      .then(res => this.setState({ todos: res.data }));
  }
  markComplite = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }
        return todo;
      })
    });
  };
  doDelete = id => {
    todos: this.state.todos.map(todo => {
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      });
    });
  };
  AddTodoItem = title => {
    const newItem = {
      id: this.state.todos.length + 1,
      title,
      complited: false
    };
    const count = { todos: [...this.state.todos, newItem] };
    this.setState({ todos: [...this.state.todos, newItem] });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo AddTodoItem={this.AddTodoItem} />
        <Todos
          todos={this.state.todos}
          markComplite={this.markComplite}
          doDelete={this.doDelete}
        />
      </div>
    );
  }
}

export default App;
