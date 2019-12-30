import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <React.Fragment>
      <h4>Todo Items</h4>
      <ul>
        <Todo />
      </ul>
            </React.Fragment>

    )
  }
}

export default TodoList;