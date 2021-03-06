import {
  ADD_TODO,
  DEL_TODO,
  TOGGLE_TODO
} from '../actions'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case DEL_TODO: 
      let newState = [...state]
      newState.splice(action.index, 1)
      return newState
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, { completed: !todo.completed })
        }
        return todo
      })
    default:
      return state
  }
}

export default todos