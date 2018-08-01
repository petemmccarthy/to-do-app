import React, { Component } from 'react'

class ToDoList extends Component {

  deleteToDoItem(i) {
    this.props.handleDeleteToDoItem(i)
  }

  toggleCompleted(i) {
    this.props.handleToggleCompleted(i)
  }

  render() {

    return (
      <div className="to-do-list" >
        {this.props.todos.map( (todo, i) =>
          <ul key={i} className="to-do-item">
            <input
              checked={todo.completed ? "checked" : ""}
              type="checkbox"
              onClick={() => this.toggleCompleted(i)}
            ></input>

            <label className={todo.completed ? 'completed' : ''}>
              {todo.item}
            </label>

            <button
              className="delete"
              onClick={() => this.deleteToDoItem(i)}
            ></button>
          </ul>
        )}
      </div>
    )
  }

}
export default ToDoList
