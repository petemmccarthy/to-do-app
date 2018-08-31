import { ADD_NEW_TODO, DELETE_TODO, TOGGLE_COMPLETED } from './types'

export const createToDo = newToDo => ({
  type: ADD_NEW_TODO,
  item: newToDo,
})

export const deleteToDo = i => ({
  type: DELETE_TODO
})

export const toggleCompleted = i => ({
  type: TOGGLE_COMPLETED
})
