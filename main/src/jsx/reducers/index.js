import { combineReducers } from 'redux'
import counter, { Action as CounterAction } from './counter'

export default combineReducers({ counter })
