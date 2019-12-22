import React from 'react'
import { Sidebar, Navitem } from './components'
import './css/App.css'
import './css/purple-blue.css'

export default function App({ component: Component, ...props }) {
  return (
    <div className="application purple-blue">
      <Sidebar>
        <Navitem title="Dashboard" icon="fa fa-fw fa-tachometer-alt" path="/" />
        <Navitem title="Cards" icon="fa fa-fw fa-credit-card" path="/cards">
          <Navitem title="Number Cards" path="/cards/numbers" />
        </Navitem>
        <Navitem title="Layouts" icon="fa fa-fw fa-th-large" path="/layout" />
        <Navitem title="Forms" icon="fa fa-fw fa-edit" path="/forms" />
        <Navitem title="Tables" icon="fa fa-fw fa-table" path="/tables" />
        <Navitem title="Pages" icon="fa fa-fw fa-file" path="/pages" />
        <Navitem title="Account" icon="fa fa-fw fa-user" path="/account" />
        <Navitem title="Charts" icon="fa fa-fw fa-chart-bar" path="/charts" />
      </Sidebar>
      {<Component {...props} />}
    </div>
  )
}
