import React from 'react'
import NavItem from '../Navitem'
import { useSidebar } from '../../context'
import classNames from 'classnames'

export default function Sidebar({ menu, ...props }) {
  const sidebar: any = useSidebar()

  return (
    <div
      className={classNames('eln-sidebar', { collapsed: sidebar.collapsed })}
    >
      <div className="eln-sidebar-header">
        {sidebar.collapsed ? <h1>EUI</h1> : <h1>EluneUI</h1>}
      </div>
      <div className="eln-sidebar-container">
        <ul className="eln-sidebar-list">
          {menu.map((first, first_index) => (
            <NavItem {...first} index={first_index} layer={0}>
              {first.children &&
                first.children.map((second, second_index) => (
                  <NavItem {...second} index={second_index} layer={1}>
                    {second.children &&
                      second.children.map((third, third_index) => (
                        <NavItem {...third} index={third_index} layer={1} />
                      ))}
                  </NavItem>
                ))}
            </NavItem>
          ))}
        </ul>
      </div>
    </div>
  )
}
