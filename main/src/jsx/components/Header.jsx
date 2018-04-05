import React from 'react'
import { Link } from 'react-router-dom'
const _ = require('underscore')
import { menu } from '../../_config/data'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: menu.map(item => _.clone(item)),
    }
  }

  render() {
    return (
      <header id="header">
        <nav className="h-wrap">
          <ul className="h-inner">
            {this.state.items.map(item => {
              const path = item.path
              if (path.indexOf('contact') > -1) {
                return (
                  <li key={path}>
                    <a href="mailto:naoko.nishimura1018@gmail.com" key={1}>
                      <span>{item.name}</span>
                    </a>
                  </li>
                )
              } else {
                return (
                  <li key={path}>
                    <Link to={path}>
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

export default Header
