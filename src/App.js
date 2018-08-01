import React, { Component } from 'react'
import Title from './components/Title'
import ToDoList from './components/ToDoList'
import StatusBar from './components/StatusBar'
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
    todos.push(
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
            <Title />
          </header>
          <div className="to-do-container">
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
            
            <StatusBar todos={todos} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
