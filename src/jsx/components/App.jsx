import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes.jsx'

export default function App() {
  return (
    <div id="wrapAll">
      <div className="ribbon">
        <span>Beta</span>
      </div>
      <div className="contents">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
      <canvas id="canvas" />
    </div>
  )
}
