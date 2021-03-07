export default class ApiService {
  baseURL = "https://jsonplaceholder.typicode.com";
  usersPath = "/users";
  todosPath = "/todos";

  paramsToQuery = (params) =>
    `?${Object.entries(params)
      .map((elem) => elem.join("="))
      .join("&")}`;

  // Build URLs

  buildUsersURL = () => {
    return this.baseURL + this.usersPath;
  };

  buildTodosURL = (userId) => {
    const params = {
      userId: userId,
    };

    return this.baseURL + this.todosPath + this.paramsToQuery(params);
  };

  buildPatchTodosURL = (todoId) => {
    return this.baseURL + this.todosPath + `/${todoId}`;
  };

  buildPostTodosURL = () => {
    return this.baseURL + this.todosPath;
  };

  // Build and execute requests

  fetchUsers = (callback) => {
    const url = this.buildUsersURL();

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        callback(data);
      });
  };

  fetchTodos = (userId, callback) => {
    const url = this.buildTodosURL(userId);

    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        callback(data);
      });
  };

  patchTodo = (todoId, callback) => {
    const url = this.buildPatchTodosURL(todoId);

    fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        completed: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        callback(data);
      });
  };

  postTodo = (todo, callback) => {
    const url = this.buildPostTodosURL();

    fetch(url, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        callback(data);
      });
  };
}
