const React = require('react');
const Router = require('react-router');
const {Link} = Router;
const _ = require('underscore');

const MenuData = require('../../_config/data').menu;


class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      items: MenuData.map(item => _.clone(item))
    };
  }

  render() {
    var logo=(
      <h1 className="h-logo"><Link to="/" key="/">nnishimura.io</Link></h1>
    );
    return (
      <header id="h">
      <nav className="h-wrap">
      {logo}
      <ul className="h-inner">
      {this.state.items.map((item) => {
        var path = item.path;
        return (
          <li><Link to={path} key={path}>{item.name}</Link></li>
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
