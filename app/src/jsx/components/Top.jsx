import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header.jsx'
import Data from '../../_config/data'
import drawCanvas from '../../js/classes/events/Canvas'

class Top extends React.Component {
  render() {
    return (
      <div>
        <div className="page-home page">
          <p>
            Front-end engineer<br />
            Web developer<br />
            80% design x 20% code<br />
          </p>
          <ul className="social">
            <li>
              <a href="https://github.com/nnishimura" target="_blank">
                <img
                  src="/assets/img/github.svg"
                  alt="github"
                  width="30"
                  height="30"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/naoko.nishimura1018"
                target="_blank"
              >
                <img
                  src="/assets/img/fb.svg"
                  alt="facebook"
                  width="30"
                  height="30"
                />
              </a>
            </li>
            <li>
              <a href="http://qiita.com/nnishimura" target="_blank">
                <img
                  src="/assets/img/qiita.svg"
                  alt="Qiita"
                  width="30"
                  height="30"
                />
              </a>
            </li>
          </ul>
        </div>
        <Header />
      </div>
    )
  }
}

export default Top
