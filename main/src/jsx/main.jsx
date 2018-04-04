import 'babel-polyfill'
import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'

const el = document.querySelector('main')
if (el) {
  ReactDOM.render(<App />, el)
}

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

// import 'babel-polyfill'
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Data from './_config/data'
// import App from './jsx/components/App'
// import Top from './jsx/components/Top'
// import About from './jsx/components/About'
// import Works from './jsx/components/Works'

// Data.winW = window.innerWidth
// Data.winH = window.innerHeight
//
// ReactDOM.render(
//   <Router>
//     <div>
//       <Route exact path="/" component={App}>
//         <Route path="/about" component={About} />
//         <Route path="/works" component={Works} />
//       </Route>
//     </div>
//   </Router>,
//   document.getElementById('wrapAll')
// )
//
