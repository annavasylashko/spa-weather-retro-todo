import React, { Component } from "react";
import ApiService from "./ApiService/ApiService";
import SearchInput from "./searchInput/SearchInput";
import TodoItem from "./todoItem/TodoItem";
import "./todo.css";

class Todo extends Component {
  apiService = new ApiService();

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      currentTodos: [],
      value: "",
      isButtonDisabled: false,
    };

    this.changeText = this.changeText.bind(this);
    this.onAddCard = this.onAddTodo.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.makeBold = this.makeBold.bind(this);
  }

  // User select

  componentDidMount = () => {
    this.apiService.fetchUsers((users) => {
      this.setState(
        {
          users: users,
          selectedUser: users[0].id,
        },
        () => {
          this.fetchTodos();
        }
      );
    });
  };

  fetchTodos() {
    this.apiService.fetchTodos(this.state.selectedUser, (userTodos) => {
      this.setState({ currentTodos: userTodos });
    });
  }

  handleUserSelect = (event) => {
    this.setState({ selectedUser: event.target.value }, () => {
      this.fetchTodos();
    });
  };

  makeUsersSelect = () => {
    return this.state.users.map((user) => (
      <option value={user.id} key={user.id}>
        {user.username}
      </option>
    ));
  };

  // New todo content

  changeText(event) {
    this.setState(() => ({
      value: event.target.value,
    }));
  }

  // Check if new todo content is empty

  validate(text) {
    return text.trim().length > 0;
  }

  // Add new todo

  onAddTodo = () => {
    if (this.validate(this.state.value)) {
      this.setState({ isButtonDisabled: true });

      let newTodo = {
        userId: this.state.selectedUser,
        title: this.state.value,
        completed: false,
      };

      // Longer wait, but we need id.
      this.apiService.postTodo(newTodo, (todo) => {
        // New todo from server is retrieved.
        console.log(todo);

        this.setState(
          (state) => ({
            currentTodos: [todo, ...state.currentTodos],
            value: "",
            isButtonDisabled: false,
          }),
          () => {
            this.nameInput.focus();
          }
        );
      });

      return;
    }

    alert("Input value didn't pass validation");
  };

  // Add todo creation on key "Enter"

  onEnter(event) {
    if (event.charCode === 13 && !this.state.isButtonDisabled) {
      this.onAddTodo();
    }
  }

  // Make SearchInput result bold

  makeBold(text) {
    this.setState(() => {
      return {
        searchText: text,
      };
    });
  }

  formatTodoItems = (searchText) => {
    return this.state.currentTodos.map((todo, index) => (
      <TodoItem
        todo={todo}
        key={index}
        onCompleteTodo={this.onCompleteTodo}
        searchText={searchText}
      />
    ));
  };

  onCompleteTodo = (todo) => {
    // Won't be in real world application.
    // New todos have same id (because server is mocked),
    // so their completion triggers in unexpected ways.
    let todos = this.state.currentTodos;
    todo.completed = true;
    let index = todos.findIndex((element) => element.id === todo.id);
    todos[index] = todo;

    this.setState({ currentTodos: todos });

    // Real world example:
    this.apiService.patchTodo(todo.id, (data) => {
      // let todos = this.state.currentTodos;
      // let index = todos.findIndex((element) => element.id === data.id);
      // todos[index] = data;
      // // Update todos only after getting a response from server.
      // // It would be inconvenient for user to see that todo is marked down as "Done",
      // // but in case of server error, this action wouldn't be saved.
      // this.setState({
      //   currentTodos: todos,
      // });
    });
  };

  render() {
    const { changeText, onAddTodo, onEnter, makeBold } = this;
    const { value } = this.state;

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
              value={value}
              ref={(input) => {
                this.nameInput = input;
              }}
              onChange={changeText}
              onKeyPress={onEnter}
              placeholder="Add new todo..."
            />
            <button onClick={onAddTodo} disabled={this.state.isButtonDisabled}>
              ADD
            </button>
          </div>
          <SearchInput makeBold={makeBold} />
        </div>

        <div className="Todos">
          {this.formatTodoItems(this.state.searchText)}
        </div>
      </div>
    );
  }
}

/* <Todos
apiService={this.apiService}
userId={this.state.selectedUser}
searchText={searchText}
/> */

export default Todo;
