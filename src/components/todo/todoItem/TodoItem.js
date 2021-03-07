import React from "react";
import withTodoItem from "../withTodoItem/withTodoItem";
import "./todoItem.css";

const TodoItem = ({ todo, onCompleteTodo, makeBold }) => (
  <div
    className="TodoItem"
    style={
      todo.completed === true
        ? { background: "rgba(255, 255, 255, 0.2)", border: "none" }
        : {}
    }
  >
    <span
      className="todo-item-content"
      dangerouslySetInnerHTML={makeBold(todo.title)}
    />

    <button
      className="todo-item-delete"
      style={todo.completed === true ? { display: "none" } : {}}
      onClick={onCompleteTodo}
    >
      x
    </button>
  </div>
);

export default withTodoItem(TodoItem);
