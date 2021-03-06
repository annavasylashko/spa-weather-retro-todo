import React, { Component } from "react";
import TodoItem from "../todoItem/TodoItem";
import "./todos.css";

class Todos extends Component {
  state = {
    todos: [],
  };

  componentDidUpdate(prevProps) {
    if (this.props === prevProps || this.props.userId === undefined) {
      return;
    }

    this.props.apiService.fetchTodos(this.props.userId, (todos) => {
      this.setState(
        {
          todos: todos,
        },
        () => {
          console.log(this.state.todos);
        }
      );
    });
  }

  formatTodoItems = () => {
    return this.state.todos.map((todo, index) => (
      <TodoItem todo={todo} key={index} />
    ));
  };

  render() {
    return <div className="Todos">{this.formatTodoItems()}</div>;
  }
}

export default Todos;
