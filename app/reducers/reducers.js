import { combineReducers } from 'redux'
import {
  ADD_TODO,
  
} from '../actions/actions.js'

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
        }
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp