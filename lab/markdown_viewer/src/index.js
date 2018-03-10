import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'
import reducer from './reducers'
import { Provider } from 'react-redux'

//Clean storage
// localStorage.setItem('todos', null);

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  let currentStore = store.getState()
  console.log('next state', currentStore)
  console.groupEnd(action.type)
  localStorage.setItem('todos', JSON.stringify(currentStore.todos));
  return result
}

let createStoreWithMiddleware = applyMiddleware(logger)(createStore)
let store = createStoreWithMiddleware(reducer)

const render = ()=>{ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
)}

render();
store.subscribe(render)
