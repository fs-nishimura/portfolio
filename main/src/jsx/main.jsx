// import 'babel-polyfill'
import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Data from 'root/_config/data'
// import Routes from 'roots/components/Routes'
import App from 'root/jsx/components/App'
import Top from 'root/jsx/components/Top'
import About from 'root/jsx/components/About'
import Works from 'root/jsx/components/Works'

Data.winW = window.innerWidth
Data.winH = window.innerHeight

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}>
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
      </Route>
    </div>
  </Router>,
  document.getElementById('wrapAll')
)

let resizeTimer
window.addEventListener('resize', () => {
  if (resizeTimer !== false) {
    clearTimeout(resizeTimer)
  }
  resizeTimer = setTimeout(() => {
    Data.winW = window.innerWidth
    Data.winH = window.innerHeight
  }, Data.fps)
})
