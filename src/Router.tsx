import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from './context'

import { PageDashboard, PageBreadcrumb, PageCardSimple } from './pages'

// Style Guide
import {
  PageGridSystem,
  PageTypography,
  PageColorPallete,
  PageShapes,
  PageIcons
} from './pages'
import Layout from './layout/Layout'

const Routes = () => (
  <SidebarProvider>
    <BrowserRouter>
      <Switch>
        <Layout exact path="/" component={PageDashboard} />
        {/* Style Guide */}
        <Layout exact path="/style/grid" component={PageGridSystem} />
        <Layout exact path="/style/typography" component={PageTypography} />
        <Layout exact path="/style/colors" component={PageColorPallete} />
        <Layout exact path="/style/icons" component={PageIcons} />
        <Layout exact path="/style/shapes" component={PageShapes} />
        {/* Components*/}
        <Layout
          exact
          path="/components/breadcrumbs"
          component={PageBreadcrumb}
        />
        <Layout
          exact
          path="/components/cards/simple"
          component={PageCardSimple}
        />
        <Route component={<div>Nothing Here for 404</div>} />
      </Switch>
    </BrowserRouter>
  </SidebarProvider>
)

export default Routes
