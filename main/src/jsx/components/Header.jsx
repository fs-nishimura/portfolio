import PropTypes from 'prop-types'
const React = require('react')
const Router = require('react-router')
const { Link } = Router
const _ = require('underscore')
const MenuData = require('../../_config/data').menu

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: MenuData.map(item => _.clone(item)),
    }
  }

  render() {
    return (
      <header id="header">
        <nav className="h-wrap">
          <ul className="h-inner">
            {this.state.items.map(item => {
              var path = item.path
              if (path.indexOf('contact') > -1) {
                return (
                  <li>
                    <a href="mailto:naoko.nishimura1018@gmail.com" key={1}>
                      <span>{item.name}</span>
                    </a>
                  </li>
                )
              } else if (path.indexOf('works') > -1) {
                return (
                  <li>
                    <a href={path} key={2}>
                      <span>{item.name}</span>
                    </a>
                  </li>
                )
              } else {
                return (
                  <li>
                    <Link to={path} key={path}>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </nav>
      </header>
    )
  }
}

Header.contextTypes = {
  lang: PropTypes.string,
  langPrefix: PropTypes.string,
}

module.exports = Header
