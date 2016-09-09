var React = require('react');
var Router = require('react-router');
var {Link} = Router;
var _ = require('underscore');

var MenuData = require('../../_config/data').menu;


class Header extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            items: MenuData.map(item => _.clone(item))
        };
    }

    render() {
        var logo=(
            <h1 className="h_logo"><Link to="/" key="/"></Link></h1>
        );
        return (
            <header id="h">
                <nav className="h_wrap">
                {logo}
                <ul className="h_inner">
                    {this.state.items.map((item) => {
                        var path = item.path;
                        return (
                            <li><Link to={path} key={path}></Link></li>
                        );
                    })}
                </ul>
                </nav>
            </header>
        );
    }
}


Header.contextTypes = {
    lang: React.PropTypes.string,
    langPrefix: React.PropTypes.string
};

module.exports = Header;
