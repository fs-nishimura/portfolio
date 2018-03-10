import React from 'react'
import FilterLink from '../containers/FilterLink'

const Filter = ({index}) =>(
  <p>
  <FilterLink index={index}>
  Toggle filter
  </FilterLink>
  </p>
)

export default Filter
