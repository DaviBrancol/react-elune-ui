import React from 'react'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import * as classNames from 'classnames'

interface NavItemProps {
  title: string
  icon?: string
  path: string
}

const Card: RouteComponentProps<NavItemProps> = ({
  title,
  icon,
  path,
  history,
  location,
  children,
  ...props
}) => {
  console.log(location.pathname)
  console.log(path)
  return (
    <div
      className={classNames('eln-navitem', {
        active: location.pathname === path
      })}
      onClick={() => history.push(path)}
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
      {children}
    </div>
  )
}

export default withRouter(Card)
