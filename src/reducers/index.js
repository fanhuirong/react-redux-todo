// reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。 previousState, action) => newState

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})

