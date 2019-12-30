import React from 'react';

class Todo extends React.Component{
constructor() {
  super()
  this.state = {
    todos: [
      {
        todo: "sdf",
        completed: false
      },
      {
        todo: "sdfsdf",
        completed: true
      }
    ]
  }
}

  render(){
    return (
      this.state.todos.map(t => {
        return <React.Fragment key={t.todo}>
          <li>{t.todo}</li>
        </React.Fragment>
      })
    ) 
  }
}

export default Todo 