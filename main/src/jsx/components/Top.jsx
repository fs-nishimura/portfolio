const React = require('react')

class Top extends React.Component {
  render() {
    return (
      <div className="page-home page">
        <p>
          Front-end engineer<br />
          Web developer<br />
          A geek at heart
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
    )
  }
}

module.exports = Top
