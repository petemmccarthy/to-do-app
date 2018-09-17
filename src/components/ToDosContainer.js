import React, { Component } from 'react'
import ToDoList from './ToDoList'
import StatusBar from './StatusBar'

import { createToDo, toggleCompleted, deleteToDo } from '../actions'
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
    if (!this.state.newToDo) {
      return
    }

    const newToDo = this.state.newToDo
    this.props.createToDo(newToDo)
    this.setState({newToDo: ""})
  }

  handleToggleCompleted = (id) => {
    this.props.toggleCompleted(id)
  }

  handleDeleteToDoItem = (id) => {
    this.props.deleteToDo(id)
  }

  render() {
    const newToDo = this.state.newToDo
    const { todos } = this.props

    return (
      <div className="App">

        <div className="to-do-container">
          <form onSubmit={this.handleSubmit}>
            <input
              maxLength="20"
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

export default connect(mapStateToProps, { createToDo, toggleCompleted, deleteToDo })(ToDosContainer)
