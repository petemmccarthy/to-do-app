import React from 'react'

const AddToDo = ({ addToDoItem }) => (
  <ul>
    <form>
      <input
        type="text"
        placeholder="add a new item..."
        onSubmit={addToDoItem}
      ></input>
    </form>
  </ul>
)

export default AddToDo
