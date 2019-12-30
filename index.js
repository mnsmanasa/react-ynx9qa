import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import TodoApp from './TodoApp';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <TodoApp />
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
