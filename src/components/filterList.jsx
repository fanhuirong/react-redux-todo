import React, { Component } from 'react'
import FilterButton from './filterButton'
import { VisibilityFilters } from '../actions'

class FilterList extends Component {
  render () {
    return (
      <div style={{marginBottom: "20px"}}>
        <FilterButton type={VisibilityFilters.SHOW_ALL}></FilterButton>
        <FilterButton type={VisibilityFilters.SHOW_ACTIVE}></FilterButton>
        <FilterButton type={VisibilityFilters.SHOW_COMPLETED}></FilterButton>
      </div>
    )
  }
}

export default FilterList