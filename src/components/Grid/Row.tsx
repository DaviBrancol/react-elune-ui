import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

export const Row: FunctionComponent<any> = ({ children, center = false }) => {
  return (
    <div className={classNames('row', { [`row-center`]: center })}>
      {children}
    </div>
  )
}
