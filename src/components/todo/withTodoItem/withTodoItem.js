import React from "react";

const withTodoItem = (Component) => {
  class WithTodoItem extends React.Component {
    constructor(props) {
      super(props);

      this.completeTodo = this.completeTodo.bind(this);
      this.makeBold = this.makeBold.bind(this);
    }

    completeTodo() {
      this.props.onCompleteTodo(this.props.todo);
    }

    makeBold(text) {
      if (text === undefined) {
        return;
      }

      let searchText =
        this.props.searchText === undefined ? "" : this.props.searchText;

      // Intentionally not global regex.

      let re = new RegExp(searchText, "i");
      let newText = text.replace(re, `<mark><b>${searchText}</b></mark>`);

      return { __html: newText };
    }

    render() {
      return (
        <Component
          todo={this.props.todo}
          onCompleteTodo={this.completeTodo}
          makeBold={this.makeBold}
        />
      );
    }
  }

  return WithTodoItem;
};

export default withTodoItem;
