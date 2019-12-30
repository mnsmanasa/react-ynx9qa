import React from 'react';

class AddTodo extends React.Component {

  constructor(){
    super();
    this.state = {
      input: ""
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  AddButton = () =>{

  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Add new todo item..." value={this.state.input} onChange={this.onInputChange}/>
        <button onClick={this.AddButton} disabled={this.state.input.length < 1}>Add</button>
      </div>
    )
  }
}

export default AddTodo;