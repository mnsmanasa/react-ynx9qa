import react from {React};

class Todo extends react.Component{
constructor() {
  super()
  this.state = {
    todos: [
      {
        todo: "sdf",
        completed: false
      },
      {
        todo
      }
    ]
  }
}

  render(){
    return (
      this.state.todos.map(todo => {
        <react.Fragment key={todo}>
          <li>{todo}</li>
        </react.Fragment>
      })
    ) 
  }
}

export default Todo 