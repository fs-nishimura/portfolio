var React = require('react');
var Router = require('react-router');
var {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link} = Router;
var App = require('./components/App');
var Top = require('./components/Top');
var About = require('./components/About');
var Works = require('./components/Works');
var Articles = require('./components/Articles');
var Contact = require('./components/Contact');
var LangRoot = require('./components/LangRoot');

// import CanvasUtils from './components/canvasUtils';


var routes = (
    <Route path="/" name="app" handler={App}>
        <DefaultRoute handler={Top} />
        <Route path="about/" handler={About} />
        <Route path="works/" handler={Works} />
        <Route path="articles/" handler={Articles} />
        <Route path="contact/" handler={Contact} />
    </Route>
);


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
        React.render(<Handler />, document.body);
    });
});
