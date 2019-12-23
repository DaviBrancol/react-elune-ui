import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from './context'

import { PageDashboard, PageBreadcrumb } from './pages'
import Layout from './layout/Layout'

const Routes = () => (
  <SidebarProvider>
    <BrowserRouter>
      <Switch>
        <Layout exact path="/" component={PageDashboard} />
        {/* Components*/}
        <Layout
          exact
          path="/components/breadcrumbs"
          component={PageBreadcrumb}
        />
        <Layout
          exact
          path="/components/cards/simple"
          component={PageBreadcrumb}
        />
        <Route component={<div>Nothing Here for 404</div>} />
      </Switch>
    </BrowserRouter>
  </SidebarProvider>
)

export default Routes
