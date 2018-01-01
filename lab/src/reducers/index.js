import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilters from './visibilityFilters'
import drag from './drag'


const todoApp = combineReducers({
  todos,
  visibilityFilters,
  drag
})

export default todoApp
