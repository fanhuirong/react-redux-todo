import React, { Component } from 'react'
import { addTodo } from '../actions'
import { Input } from 'antd'
import { connect } from 'react-redux'

class AddTodo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleInputValue = this.handleInputValue.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }
  handleInputValue = e => {
    let tmpInputValue = e.target.value;
    this.setState({ inputValue: tmpInputValue });
  }
  handleAddItem = () => {
    let inputVal = this.state.inputValue
    if (inputVal === "") {
      return
    }
    this.props.addTodo(inputVal) // 调用redux的增加函数
    this.setState({ inputValue: '' })
  }
  render() {
    return (
      <div className="add-item">
        <Input
          size="large"
          style={{ marginTop: 20, marginBottom: 20, borderColor: "#20C3AA" }}
          placeholder="请输入待办事项，按回车添加"
          value={this.state.inputValue}
          onChange={this.handleInputValue}
          onPressEnter={this.handleAddItem}
        />
      </div>
    )
  }
}

export default connect(
  () => { return {} }, { 
    addTodo
  }
)(AddTodo)