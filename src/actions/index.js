import { ADD_NEW_TODO, TOGGLE_COMPLETED, DELETE_TODO } from './types'
let toDoID = 0

export const createToDo = newToDo => ({
  type: ADD_NEW_TODO,
  item: newToDo,
  id: toDoID++
})

export const toggleCompleted = id => ({
  type: TOGGLE_COMPLETED,
  id
})

export const deleteToDo = id => ({
  type: DELETE_TODO,
  id
})
