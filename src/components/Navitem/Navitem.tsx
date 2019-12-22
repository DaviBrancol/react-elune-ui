import React from 'react'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import * as classNames from 'classnames'
import { INavItem } from '../../interfaces'
import { useSidebar } from '../../context'

const NavItem: RouteComponentProps<INavItem> = ({
  layer,
  index,
  title,
  icon,
  path,
  history,
  location,
  submenu,
  children
}) => {
  const isActive: boolean = location.pathname === path
  const hasChildren: boolean = children

  const sidebar: any = useSidebar()

  return (
    <div
      className={classNames('eln-navitem', {
        active: isActive
      })}
      onClick={
        !hasChildren
          ? () => history.push(path)
          : e => {
              e.stopPropagation()
              sidebar.setOpenLayer(layer, index)
            }
      }
    >
      <div className="eln-navitem-container">
        <div className="eln-navitem-content">
          <i className={icon} />
          <p>{title}</p>
        </div>
        {children && (
          <div className="eln-navitem-collapse">
            <i className="fa fa-chevron-down" />
          </div>
        )}
      </div>
      {sidebar.openLayer[layer] === index && children}
    </div>
  )
}

export default withRouter(NavItem)
