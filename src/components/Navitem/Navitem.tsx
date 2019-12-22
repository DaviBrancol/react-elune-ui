import React, { FunctionComponent } from 'react'

interface NavItemProps {
  title: string
  icon: string
}

const Card: FunctionComponent<NavItemProps> = ({ title, icon, children }) => {
  return (
    <div className="eln-navitem">
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

export default Card
