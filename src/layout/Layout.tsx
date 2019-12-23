import React from 'react'
import { Sidebar, Header } from '../components'
import { SidebarMenu } from '../demo'

import '../css/App.css'
import '../css/purple-blue.css'

export default function Layout({ component: Component, ...props }) {
  return (
    <div className="application purple-blue">
      <Sidebar menu={SidebarMenu} />
      <div className="eln-body">
        <Header />
        {<Component {...props} />}
      </div>
    </div>
  )
}
