export default class ApiService {
  baseURL = "https://jsonplaceholder.typicode.com";
  usersPath = "/users";
  todosPath = "/todos";

  paramsToQuery = (params) =>
    `?${Object.entries(params)
      .map((elem) => elem.join("="))
      .join("&")}`;

  buildUsersURL = () => {
    return this.baseURL + this.usersPath;
  };

  buildTodosURL = (userId) => {
    const params = {
      userId: userId,
    };

    return this.baseURL + this.todosPath + this.paramsToQuery(params);
  };

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
}
