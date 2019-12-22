import React, { lazy } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from './context'

import { Dashboard } from './pages'
import Layout from './layout/Layout'

const Routes = () => (
  <SidebarProvider>
    <BrowserRouter>
      <Switch>
        <Layout exact path="/" component={Dashboard} />
        <Route component={<div>Nothing Here for 404</div>} />
      </Switch>
    </BrowserRouter>
  </SidebarProvider>
)

export default Routes
