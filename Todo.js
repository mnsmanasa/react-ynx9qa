import React from "react";
import { connect } from "react-redux";
import { removeTodo, toggleTodo } from "./globalstate/actions";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  removeTodo = event => {
    this.props.removeTodo(event.target.getAttribute("data-target"));
  };

  toggleTodo = (e) =>{
    this.props.toggleTodo(e.target.getAttribute('id'))
  }

  render() {
    console.log(this.props.filterTodo)
    return this.props.todoList.map(t => {
      return (
        <React.Fragment key={t.todo}>
          <li id={t.id} onClick={this.toggleTodo} className={t.completed ? 'strike-through': ''}>
            {t.todo}
          </li>
        </React.Fragment>
      );
    });
  }
}

const mapStateToProps = state => ({
  todoList: state.todos,
  filterTodo: state.filterTodo
});

export default connect(
  mapStateToProps,
  { removeTodo, toggleTodo }
)(Todo);
