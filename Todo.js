import React from 'react';

class Todo extends React.Component{
constructor(props) {
  super(props)
  this.state = {
    todos: [
      {
        todo: "sdf"
      },
      {
        todo: "sdfsdf"
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

export default Todo;