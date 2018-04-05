import React, { Fragment } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import About from './About.jsx'
import Top from './Top.jsx'
import Works from './Works.jsx'

export default function Routes() {
  return (
    <Fragment>
      <h1 className="logo">
        <Link to="/" key="/">
          nnishimura<span className="dot">.</span>io
        </Link>
      </h1>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/about" exact component={About} />
          <Route path="/works" exact component={Works} />
        </Switch>
      </div>
    </Fragment>
  )
}
