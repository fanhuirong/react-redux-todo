import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Button, Switch } from 'antd'
import { delTodo, toggleTodo } from '../actions'
import { VisibilityFilters } from '../actions'

class TodoList extends Component {
  handleSwitch = index => {
    this.props.toggleTodo(index)
  }
  handleDeleteItem = index => {
    this.props.delTodo(index)
  }
  render() {
    return (
      <div className="item-list">
        <List
          size="large"
          bordered
          dataSource={this.props.list}
          locale={{ emptyText: '暂无数据，请添加待办事项' }}
          style={{ color: "#20C3AA", fontWeight: "bold" }}
          renderItem={
            (item, index) => (
              <List.Item>
                <Switch
                  onChange={this.handleSwitch.bind(this, index)}
                  checked={item.completed ? false : true}
                />
                <div
                  style={{ cursor: "pointer", marginLeft: "10px" }}>
                  {item.completed ? <div style={{ textDecoration: "line-through" }}>{item.text}</div> : <div>{item.text}</div>}
                </div>
                <Button
                  type="primary"
                  size="small"
                  shape="round"
                  style={{ position: "absolute", right: "20px", backgroundColor: "#20C3AA", borderColor: "#20C3AA" }}
                  onClick={this.handleDeleteItem.bind(this, index)}>
                  删除
              </Button>
              </List.Item>
            )
          }
        />
      </div>
    )
  }
}
// 过滤列表
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

export default connect(
  (state) => {
    // console.log(state.todos) // 整个列表
    return {list: getVisibleTodos(state.todos, state.visibilityFilter)}
  }, {
    delTodo,
    toggleTodo
  }
)(TodoList)