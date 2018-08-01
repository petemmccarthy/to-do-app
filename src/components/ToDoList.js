import React, { Component } from 'react'

class ToDoList extends Component {

  deleteToDo(i) {
    this.props.handleClick(i)
  }

  render() {

    return (
      <div className="to-do-list" >
        {this.props.todos.map( (todo, i) =>
          <ul
            className="to-do-item"
            key={i}>
            {todo.item}
            <button
              className="delete"
              onClick={() => this.deleteToDo(i)}
            ></button>
          </ul>
        )}
      </div>
    )

  }

}
export default ToDoList
