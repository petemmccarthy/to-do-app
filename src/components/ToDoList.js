import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

class ToDoList extends Component {

  constructor() {
    super()
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

  render() {
    const { todos } = this.state
    let todoList
    if (todos) {
      todoList = todos.map( (todo, i) => {
        return <ul key={i}>
          <ToDoItem todo={todo} />
        </ul>
      })
    }

    return (
      <div>
        <ul>Add a todo</ul>
        {todoList}
      </div>
    )
  }

}

export default ToDoList
