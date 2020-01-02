import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "./globalstate/actions";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  removeTodo = event => {
    this.props.removeTodo(event.target.getAttribute("data-target"));
  };

  render() {
    return this.props.todoList.map(t => {
      return (
        <React.Fragment key={t.todo}>
          <li>
            {t.todo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span data-target={t.todo} onClick={this.removeTodo}>
              X
            </span>
          </li>
        </React.Fragment>
      );
    });
  }
}

const mapStateToProps = state => ({
  todoList: state.todos
});

export default connect(
  mapStateToProps,
  { removeTodo }
)(Todo);
