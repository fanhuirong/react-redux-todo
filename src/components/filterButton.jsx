import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { setVisibilityFilter } from '../actions'

const BtnMap = {
  'SHOW_ALL': '全部',
  'SHOW_COMPLETED': '已完成',
  'SHOW_ACTIVE': '未完成'
}
class FilterButton extends Component {
  handle = (type) => {
    this.props.setVisibilityFilter(type)
  }
  render() {
    return (
        <Button
          type="primary"
          size="small"
          shape="round"
          disabled={this.props.filter === this.props.type}
          style={{ backgroundColor: "#20C3AA", borderColor: "#20C3AA",marginLeft: '10px' }}
          onClick={this.handle.bind(this, this.props.type)}>
          {BtnMap[this.props.type]}
        </Button>
    )
  }
}

export default connect(
  (state) => {
    return { filter: state.visibilityFilter }
  }, {
    setVisibilityFilter
  }
)(FilterButton)