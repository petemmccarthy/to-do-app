// import { ADD_NEW_TODO, DELETE_TODO, TOGGLE_COMPLETED } from '../actions/types'
import { ADD_NEW_TODO } from '../actions/types'

const initialState = [
  // {
  //   item: "initial todo",
  //   completed: false
  // }
]

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
    // case DELETE_TODO:
    // return [
    //   ...state,
    //   {
    //
    //   }
    // ]
    // case TOGGLE_COMPLETED:
    // return [
    //   ...state,
    //   {
    //   }
    // ]
    default:
    return state
  }
}
