import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from "./globalstate/actions";

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

removeTodo = (event) => {
  // var x = event.target.getAttribute('data-target')
  this.props.removeTodo(event.target.getAttribute('data-target'))
}

  render(){
    return (
      this.state.todos.map(t => {
        return <React.Fragment key={t.todo}>
          <li>{t.todo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span data-target={t.todo} onClick={this.removeTodo}>X</span></li>
        </React.Fragment>
      })
    ) 
  }
}

export default connect(null,{removeTodo})(Todo)