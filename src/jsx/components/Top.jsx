import React from 'react'
import Header from './Header.jsx'

class Top extends React.Component {
  render() {
    return (
      <div>
        <div className="page-home page">
          <p>
            Frontend Engineer
            <br />
            Backend Engineer
            <br />
            Ramen lover
            <br />
          </p>
          <ul className="social">
            <li>
              <a
                href="https://github.com/nnishimura"
                rel="noopener noreferrer"
                target="_blank"
              >
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
                rel="noopener noreferrer"
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
              <a
                href="http://qiita.com/nnishimura"
                rel="noopener noreferrer"
                target="_blank"
              >
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
