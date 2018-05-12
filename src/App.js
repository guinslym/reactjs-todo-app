import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


var todos = [
  {
    todoTitle: 'My first todo',
    todoResponsible: 'Sebastian',
    todoDescription: 'My first todo description',
    todoPriority: 'low',
  },
  {
    todoTitle: 'My second todo',
    todoResponsible: 'Sebastian',
    todoDescription: 'My second todo description',
    todoPriority: 'medium',
  },
  {
    todoTitle: 'My third todo',
    todoResponsible: 'Sebastian',
    todoDescription: 'My third todo description',
    todoPriority: 'low',
  }
]

class App extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      todos: todos
    };
  }

  handleRemoveTodo(index){
    this.setState({
      todos: this.state.todos.filter(function(e, i){
        return i !== index;
      })
    })
  }

  render() {
    return (
      <div className="container">
        <h4>Todo count: <span className="badge badge-success">{this.state.todos.length}</span></h4>
        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle} <small><span className="badge badge-success">{todo.todoPriority}</span> </small> </h4>

              <p><span className="glyphicon glyphicon-user"></span>&nbsp;{todo.todoResponsible}</p>
              <p>{todo.todoDescription}</p>

              <i className="far fa-trash-alt"></i>
              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash"></span></button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
