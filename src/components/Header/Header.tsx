import React from 'react'
import { useSidebar } from '../../context'

export default function Header({ ...props }) {
  const sidebar: any = useSidebar()

  return (
    <div className="eln-header">
      <div className="eln-header-sidebar-menu">
        <button onClick={() => sidebar.setCollapsed(!sidebar.collapsed)}>
          <i className="fa fa-bars" />
        </button>
      </div>
      <div className="eln-header-menu">
        <button>
          <i className="fa fa-envelope" />
          <p className="eln-notification">12</p>
        </button>
        <button>
          <i className="fa fa-bell" />
          <p className="eln-notification">14</p>
        </button>
        <div className="eln-header-user">
          <img src="/main_photo.jpg" alt="Logo User" />
        </div>
      </div>
    </div>
  )
}
