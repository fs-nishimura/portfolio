import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import createStore from '../store/createStore'
import Routes from './Routes.jsx'

export default function App() {
  const store = createStore()
  return (
    <div id="wrapAll">
      <div className="ribbon">
        <span>Beta</span>
      </div>
      <div className="contents">
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </div>
      <canvas id="canvas" />
    </div>
  )
}
