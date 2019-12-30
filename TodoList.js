import react from {React};

class TodoList extends react.Component {
  render() {
    return (
      <h4>Todo Items</h4>
      <ul>
        <Todo />
      </ul>
    )
  }
}

export default TodoList;