import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Resume from './Resume'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Home />
        </Route>

        <Route>
          {/* @todo: replace with 404 page */}
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
