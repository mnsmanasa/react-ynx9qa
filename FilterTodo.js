import React from "react";
import { connect } from "react-redux";
import { fltrTodo } from "./globalstate/actions";

class FilterTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  filterTodo = event => {
    this.props.fltrTodo(event.target.getAttribute("data-target"))
  }

  render() {
    return (
      <React.Fragment>
        Filter:{" "}
        <button data-target="all" onClick={this.filterTodo}>
          All
        </button>
        <button data-target="true" onClick={this.filterTodo}>
          Completed
        </button>
        <button data-target="false" onClick={this.filterTodo}>
          Pending
        </button>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  todoList: state.todos,
});

export default connect(
  mapStateToProps,
  { fltrTodo }
)(FilterTodo);
