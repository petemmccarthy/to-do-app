import React, { Component } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newToDo: "",
      todos: []
    }
  }

  onChange = (e) => {
    this.setState({newToDo: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { todos, newToDo } = this.state
    todos.unshift(
      {
        item: newToDo,
        completed: false
      }
    )

    this.setState({todos, newToDo: ""})
  }

  render() {
    const { todos, newToDo } = this.state

    return (
      <div className="App">

        <header className="header">
          <Header />
        </header>

        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={newToDo}
              placeholder="add a new item..."
              onChange={this.onChange}
            ></input>
          </form>

          <ToDoList todos={todos} />
        </div>

      </div>
    )
  }
}

export default App
