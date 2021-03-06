import React, { Component } from "react";
import ApiService from "./ApiService/ApiService";
import Todos from "./todos/Todos";
import "./todo.css";

class Todo extends Component {
  apiService = new ApiService();

  state = {
    users: [],
  };

  // User select

  componentDidMount = () => {
    this.apiService.fetchUsers((users) => {
      this.setState(
        {
          users: users,
        },
        () => {
          this.setState({ selectedUser: users[0].id });
        }
      );
    });
  };

  handleUserSelect = (event) => {
    this.setState({ selectedUser: event.target.value }, () => {
      console.log(this.state.selectedUser);
    });
  };

  makeUsersSelect = () => {
    return this.state.users.map((user) => (
      <option value={user.id} key={user.id}>
        {user.username}
      </option>
    ));
  };

  render() {
    return (
      <div className="Todo">
        <div className="todo-inputs">
          <select
            value={this.state.selectedUser}
            onChange={this.handleUserSelect}
          >
            {this.makeUsersSelect()}
          </select>

          <div className="add-todo">
            <input
              type="text"
              onChange={this.handleInput}
              placeholder="Add new todo..."
            />
            <button>ADD</button>
          </div>

          <div className="search-todo">
            <input type="text" placeholder="Search in todos..." />
            <button>SEARCH</button>
          </div>
        </div>

        <Todos apiService={this.apiService} userId={this.state.selectedUser} />
      </div>
    );
  }
}

export default Todo;
