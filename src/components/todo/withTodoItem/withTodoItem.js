import React from "react";

const withTodoItem = (Component) => {
  class WithTodoItem extends React.Component {
    constructor(props) {
      super(props);
    }

    //////

    render() {
      return (
        <Component id={this.props.todo.id} title={this.props.todo.title} />
      );
    }
  }

  return WithTodoItem;
};

export default withTodoItem;
