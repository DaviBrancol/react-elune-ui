import React, { FunctionComponent } from 'react'
import { IGridCol } from '../../interfaces'

export const Col: FunctionComponent<IGridCol> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  children
}) => {
  return (
    <div
      className={`col-${xs || 12}${sm ? ` col-sm-${sm}` : ''}${
        md ? ` col-md-${md}` : ''
      }${lg ? ` col-lg-${lg}` : ''}${xl ? ` col-xl-${xl}` : ''}`}
    >
      {children}
    </div>
  )
}
