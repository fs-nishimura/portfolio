import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div className="page-about">
        <figure>
          <img src="/assets/img/prof.jpg" alt="Profile Photo" />
        </figure>
        <p className="proftext">
          Hi, I’m Naoko, a software engineer from Japan in love with all things
          internet. Online since 2002.
        </p>
        <h2>Skills</h2>
        <div className="history">
          <span>- Javascipt: React, Vue, Ember, NodeJS</span>
          <br />
          <span>- Ruby, Elixir, PHP, Python</span>
          <br />
          <span>- Speaks English and Japanese</span>
        </div>
        <h2>Employment</h2>
        <div className="history">
          <time>June 2017 - Current</time>
          <h3>Frontend & Backend Engineer - Tablecheck, Tokyo</h3>
        </div>
        <div className="history">
          <time>May 2015 - June 2017</time>
          <h3>Web developer - Full Size Image.Inc, Tokyo</h3>
        </div>
      </div>
    )
  }
}

export default About
