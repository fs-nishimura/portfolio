import React from 'react'

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
          <span>- Javascipt: VueJs, EmberJS, NodeJs</span>
          <br />
          <span>- PHP, mySQL, Python, Ruby (Rails)</span>
          <br />
          <span>- Speaks English/Japanese</span>
        </div>
        <h2>Employment</h2>
        <div className="history">
          <time>June 2017 - Current</time>
          <h3>Front-end Engineer – KKVesper, Tokyo</h3>
        </div>
        <div className="history">
          <time>May 2015 - June 2017</time>
          <h3>Web developer – Full Size Image.Inc, Tokyo</h3>
        </div>
      </div>
    )
  }
}

export default About
