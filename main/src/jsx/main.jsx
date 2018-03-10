const React = require('react')
const ReactDOM = require('react-dom')
const Router = require('react-router')
const { Route, DefaultRoute } = Router
const Data = require('../_config/data')
const App = require('./components/App')
const Top = require('./components/Top')
const About = require('./components/About')
const Works = require('./components/Works')

const routes = (
  <Route path="/" name="app" handler={App}>
    <DefaultRoute handler={Top} />
    <Route path="about/" handler={About} />
    <Route path="works/" handler={Works} />
  </Route>
)

Data.winW = window.innerWidth
Data.winH = window.innerHeight

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
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
