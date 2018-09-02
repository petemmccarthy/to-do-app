import { ADD_NEW_TODO } from '../actions/types'

const initialState = []

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_NEW_TODO:
    return [
      ...state,
      {
        item: action.item,
        completed: false
      }
    ]
    default:
    return state
  }
}
