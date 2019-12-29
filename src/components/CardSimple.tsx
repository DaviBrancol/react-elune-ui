import React, { FunctionComponent } from 'react'
import { ICardSimple } from '../interfaces'

export const CardSimple: FunctionComponent<ICardSimple> = ({
  title,
  style,
  children
}) => {
  return (
    <div className="eln-card" style={style}>
      <div className="eln-card-header">
        <h2>{title}</h2>
      </div>
      <div className="eln-card-body">{children}</div>
    </div>
  )
}
