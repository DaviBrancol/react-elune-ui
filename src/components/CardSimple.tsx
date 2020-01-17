import React, { FunctionComponent } from 'react'
import { ICardSimple } from '../interfaces'

export const CardSimple: FunctionComponent<ICardSimple> = ({
  title,
  style,
  bodyStyle,
  children
}) => {
  return (
    <div className="eln-card" style={style}>
      {title && (
        <div className="eln-card-header">
          <h2>{title}</h2>
        </div>
      )}
      <div className="eln-card-body" style={bodyStyle}>
        {children}
      </div>
    </div>
  )
}
