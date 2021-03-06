import React from "react";
import withTodoItem from "../withTodoItem/withTodoItem";
import "./todoItem.css";

const TodoItem = ({ id, title }) => (
  <div className="TodoItem">
    <p className="todo-item-content">
      {id} {title}
    </p>
    <button className="todo-item-delete">x</button>
  </div>
);

export default withTodoItem(TodoItem);
