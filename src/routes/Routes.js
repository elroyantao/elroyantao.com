import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Resume from './Resume'

const Routes = () => {
  return (
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
  )
}

export default Routes
