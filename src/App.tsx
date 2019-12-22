import React from 'react'
import { Sidebar, Navitem } from './components'
import './css/App.css'
import './css/purple-blue.css'

export default function App(props) {
  return (
    <div className="application purple-blue">
      <Sidebar>
        <Navitem title="Dashboard" icon="fa fa-fw fa-tachometer-alt" />
        <Navitem title="Cards" icon="fa fa-fw fa-credit-card">
          <Navitem title="Cards" icon="fa fa-fw fa-credit-card" />
        </Navitem>
        <Navitem title="Layouts" icon="fa fa-fw fa-th-large" />
        <Navitem title="Forms" icon="fa fa-fw fa-edit" />
        <Navitem title="Tables" icon="fa fa-fw fa-table" />
        <Navitem title="Pages" icon="fa fa-fw fa-file" />
        <Navitem title="Account" icon="fa fa-fw fa-user" />
        <Navitem title="Charts" icon="fa fa-fw fa-chart-bar" />
      </Sidebar>
    </div>
  )
}
