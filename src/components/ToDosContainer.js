import React, { Component } from 'react'
import ToDoList from './ToDoList'
import StatusBar from './StatusBar'

import { createToDo, deleteToDo, toggleCompleted } from '../actions'
import { connect } from 'react-redux'

class ToDosContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newToDo: ""
    }
  }

  onChange = (e) => {
    this.setState({newToDo: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newToDo = this.state.newToDo
    this.props.createToDo(newToDo)
    this.setState({newToDo: ""})
  }

  handleDeleteToDoItem = (i) => {
    const { todos } = this.props
    if (i !== -1) {
      todos.splice(i, 1)
    }
    this.setState({todos})
    // this.props.deleteToDo(i)
  }

  handleToggleCompleted = (i) => {
    const { todos } = this.props
    todos[i].completed = !todos[i].completed
    this.setState(todos)
    // this.props.toggleCompleted(i)
  }

  render() {
    const newToDo = this.state.newToDo
    const { todos } = this.props

    return (
      <div className="App">

        <div className="to-do-container">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={newToDo}
              placeholder="add a new item..."
              onChange={this.onChange}
            ></input>
          </form>

          <ToDoList
            todos={todos}
            handleDeleteToDoItem={this.handleDeleteToDoItem}
            handleToggleCompleted={this.handleToggleCompleted}
          />

          <StatusBar todos={todos} />
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps, { createToDo, deleteToDo, toggleCompleted })(ToDosContainer)
