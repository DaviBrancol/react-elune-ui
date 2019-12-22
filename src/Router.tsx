import React, { lazy } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { Dashboard } from './pages'
import Layout from './App'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* Dashboard */}
      <Layout exact path="/" component={Dashboard} />
      <Layout exact path="/cards" component={Dashboard} />
      <Route component={<div>Nothing Here for 404</div>} />
    </Switch>
  </BrowserRouter>
)

export default Routes
