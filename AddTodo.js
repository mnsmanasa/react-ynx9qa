import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from "./globalstate/actions";

class AddTodo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      input: ""
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  addButton = () =>{
    // debugger;
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Add new todo item..." value={this.state.input} onChange={this.onInputChange}/>
        <button onClick={this.addButton} disabled={this.state.input.length < 1}>Add</button>
      </div>
    )
  }
}

export default connect(null,addTodo)(AddTodo)