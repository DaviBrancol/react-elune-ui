import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

export const Row: FunctionComponent<any> = ({
  children,
  center = false,
  style
}) => {
  return (
    <div
      className={classNames('row', { [`row-center`]: center })}
      style={style}
    >
      {children}
    </div>
  )
}
