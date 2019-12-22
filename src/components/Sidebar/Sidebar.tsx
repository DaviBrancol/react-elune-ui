import React from 'react'
import NavItem from '../Navitem'

export default function Sidebar({ menu, ...props }) {
  return (
    <div className="eln-sidebar">
      <div className="eln-sidebar-header">
        <img
          src="https://app.teza.com.br/img/teza_logo_white.png"
          alt="Logo-Icon"
        />
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
