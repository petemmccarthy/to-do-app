import React from 'react'

const ToDoList = props => (

    <div className="to-do-list">
      {props.todos.map( (todo, i) =>  <ul
        className="to-do-item"
        key={i}>
        {todo.item}
      </ul> )}
    </div>

)

export default ToDoList
