import { ADD_NEW_TODO, TOGGLE_COMPLETED } from '../actions/types'

const initialState = []

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_NEW_TODO:
    return [
      ...state,
      {
        id: action.id,
        item: action.item,
        completed: false
      }
    ]
    case TOGGLE_COMPLETED:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
    return state
  }
}
