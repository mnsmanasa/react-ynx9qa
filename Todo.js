import React from 'react';
import { connect } from 'react-redux';
import {initialState} from './globalstate/reducer';

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
    console.log(this.props.initialState)
    return (
      this.state.todos.map(t => {
        return <React.Fragment key={t.todo}>
          <li>{t.todo}</li>
        </React.Fragment>
      })
    ) 
  }
}

export default connect(null,{initialState})(Todo)