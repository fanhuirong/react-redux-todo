import React, { Component } from 'react'
import AddTodo from './components/addTodo'
import FilterList from './components/filterList'
import Todolist from './components/todoList'
import { Layout, Row } from 'antd'

class App extends Component {
  render() {
    return (
      <Layout className="app">
        <Row>
          <h1 style={{ color: "#20C3AA" }}>TodoList</h1>
          <AddTodo></AddTodo>
          <FilterList></FilterList>
          <Todolist></Todolist>
        </Row>
      </Layout>
    )
  }
}

export default App
