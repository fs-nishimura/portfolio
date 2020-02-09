import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../../config/data'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [...menu],
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
