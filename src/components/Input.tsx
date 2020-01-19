import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

export const Input: FunctionComponent<any> = ({
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <div
      className={classNames({
        'eln-input-group': true,
        'eln-input-card': true,
        'eln-input-disabled': disabled
      })}
      {...props}
    >
      {children}
    </div>
  )
}
