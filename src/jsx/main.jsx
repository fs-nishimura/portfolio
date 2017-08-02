const React = require('react');
const Router = require('react-router');
const {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link} = Router;
const Data = require('../_config/data');
const App = require('./components/App');
const Top = require('./components/Top');
const About = require('./components/About');
const Works = require('./components/Works');
const Articles = require('./components/Articles');
const Contact = require('./components/Contact');
const LangRoot = require('./components/LangRoot');
const routes = (
  <Route path="/" name="app" handler={App}>
    <DefaultRoute handler={Top} />
    <Route path="about/" handler={About} />
    <Route path="works/" handler={Works} />
    // <Route path="contact/" handler={Contact} />
  </Route>
);


Data.winW = window.innerWidth;
Data.winH = window.innerHeight;


Router.run(routes, Router.HistoryLocation, (Handler, state) => {

  var context = {};

  if (state.pathname.indexOf('/en/') === 0) {
    context.lang = 'en';
    context.langPrefix = '/en';
  } else {
    context.lang = 'ja';
    context.langPrefix = '';
  }
  React.withContext(context, () => {
    React.render(<Handler pathname={state.pathname} />, document.body);
  });
});


let resizeTimer;
window.addEventListener("resize",function(){
  if (resizeTimer !== false) {
    clearTimeout(resizeTimer);
  }
  resizeTimer = setTimeout(function() {
    Data.winW = window.innerWidth;
    Data.winH = window.innerHeight;
  }, Data.fps);
})
