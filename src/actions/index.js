
/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其他常量 
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creator // action创建函数
 */

let nextId = 0
export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextId++,
    text
  }
}

export function delTodo(index) {
  return {
    type: DEL_TODO,
    index
  }
}

export function toggleTodo(index) { // 将任务标注为已完成
  return {
    type: TOGGLE_TODO,
    index
  }
}

export function setVisibilityFilter(filter) {
  return { 
    type: SET_VISIBILITY_FILTER, 
    filter 
  }
}

