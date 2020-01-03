import React from "react";
import { connect } from "react-redux";
import { fltrTodo } from "./globalstate/actions";

class FilterTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: "all"
    };
  }

  filterTodo = event => {
    this.setState({ selectedFilter: event.target.value });
    this.props.fltrTodo(event.target.value);
  };

  render() {
    return (
      <React.Fragment>
        Filter:
        <input
          type="radio"
          name="filter"
          value="all"
          checked={this.state.selectedFilter === "all"}
          onChange={this.filterTodo}
        />
        <label for="filter">All</label>
        <input
          type="radio"
          name="filter"
          value="true"
          checked={this.state.selectedFilter === "true"}
          onChange={this.filterTodo}
        />
        <label for="filter">Completed</label>
        <input
          type="radio"
          name="filter"
          value="false"
          checked={this.state.selectedFilter === "false"}
          onChange={this.filterTodo}
        /><label for="filter">Pending</label>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todos
});

export default connect(
  mapStateToProps,
  { fltrTodo }
)(FilterTodo);
