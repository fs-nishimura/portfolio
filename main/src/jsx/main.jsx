const React = require('react')
const ReactDOM = require('react-dom')
// const Router = require('react-router')
import { Router, Route } from 'react-router'
const { DefaultRoute } = Router
const Data = require('../_config/data')
import App from 'root/jsx/components/App'
import Top from 'root/jsx/components/Top'
import About from 'root/jsx/components/About'
import Works from 'root/jsx/components/Works'

Data.winW = window.innerWidth
Data.winH = window.innerHeight

const routes = (
  <Route path="/" name="app" handler={App}>
    <DefaultRoute handler={Top} />
    <Route path="about/" handler={About} />
    <Route path="works/" handler={Works} />
  </Route>
)

// // v0.13.x
// Router.run(routes, Handler => {
//   render(<Handler />, el)
// })
//
// // v1.0
// render(<Router>{routes}</Router>, el)
//
// // looks more like this:
// render(
//   <Router>
//     <Route path="/" component={App} />
//   </Router>,
//   el
// )

render(<Router>{routes}</Router>, Router.HistoryLocation, (Handler, state) => {
  var context = {}

  if (state.pathname.indexOf('/en/') === 0) {
    context.lang = 'en'
    context.langPrefix = '/en'
  } else {
    context.lang = 'ja'
    context.langPrefix = ''
  }
  React.withContext(context, () => {
    ReactDOM.render(<Handler pathname={state.pathname} />, document.body)
  })
})

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
