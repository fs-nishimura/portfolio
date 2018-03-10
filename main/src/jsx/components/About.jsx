var React = require('react')

class About extends React.Component {
  render() {
    return (
      <div className="page-about">
        <figure>
          <img src="/assets/img/prof.jpg" alt="Profile Photo" />
        </figure>
        <p className="proftext">
          @nnishimura has bounced around a lot: Born in Nara, moved to Hyogo,
          grew up in Kyoto, and then lived in Hawaii (USA) and Melbourne
          (Australia).
          <br />She hopes to settle in Tokyo eventually. (For now)
        </p>
        <h2>Skills</h2>
        <div className="history">
          - Javascript(Mainly Vue.js, learning React), (S)CSS, PHP(Wordpress,
          Cake2), (X)HTML(5)<br />
          - Some mySQL, Python<br />Best at creating interactive websites with
          "pixel perfect" coding<br />
          - Speaks English/Japanese
        </div>
        <h2>Employment</h2>
        <div className="history">
          <time>May 2015 - June 2017</time>
          <h3>Front-end Engineer – Full Size Image.Inc, Tokyo</h3>
        </div>
        <div className="history">
          <time>October 2014 – April 2015</time>
          <h3>Freelance Web Developer, Osaka</h3>
        </div>
      </div>
    )
  }
}

export default About
