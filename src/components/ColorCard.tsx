import React, { FunctionComponent } from 'react'
import { IColorCard } from '../interfaces'

export const ColorCard: FunctionComponent<IColorCard> = ({
  title,
  hex,
  children
}) => {
  return (
    <div className="eln-card eln-card-color">
      <div className="eln-card-header">
        <h2>{title}</h2>
      </div>
      <div className="eln-card-body" style={{ backgroundColor: hex }}>
        <p>{hex}</p>
      </div>
    </div>
  )
}
