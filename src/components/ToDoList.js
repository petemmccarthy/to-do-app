import React from 'react'

const ToDoList = props => (
  <ul>
    {props.todos.map( (todo, i) =>  <div key={i}>{todo.item}</div> )}
  </ul>
)

export default ToDoList
