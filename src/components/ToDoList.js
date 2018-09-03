import React, { Component } from 'react'

class ToDoList extends Component {

  deleteToDoItem(id) {
    this.props.handleDeleteToDoItem(id)
  }

  toggleCompleted(id) {
    this.props.handleToggleCompleted(id)
  }

  render(props) {

    return (
      <div className="to-do-list" >
        {this.props.todos.map( (todo) =>
          <ul key={todo.id} className="to-do-item">
            <input
              checked={todo.completed ? "checked" : ""}
              type="checkbox"
              onClick={() => this.toggleCompleted(todo.id)}
            ></input>

            <label className={todo.completed ? 'completed' : ''}>
              {todo.item}
            </label>

            <button
              className="delete"
              onClick={() => this.deleteToDoItem(todo.id)}
            ></button>
          </ul>
        )}
      </div>
    )
  }

}
export default ToDoList
