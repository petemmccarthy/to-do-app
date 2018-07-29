import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import AddToDo from './AddToDo'

class ToDoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          item: 'My first task',
          completed: true
        },
        {
          item: 'My next task',
          completed: false
        }
      ],
    }
  }

  addToDoItem = (e) => {
    // e.preventDefault()
    const todos = this.state.todos
      todos.unshift(
        {
          item: e.target.value,
          completed: false
        }
      )
      this.setState(todos)
  }

  render() {
    const { todos } = this.state
    let todoList
    if (todos) {
      todoList = todos.map( (todo, i) => {
        return <div key={i}>
          <ToDoItem todo={todo} />
        </div>
      })
    }

    return (
      <div>
        <AddToDo addToDoItem={this.addToDoItem} />
        {todoList}
      </div>
    )
  }

}

export default ToDoList
