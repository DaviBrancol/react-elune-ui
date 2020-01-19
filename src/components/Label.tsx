import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { EUIColorType } from '../interfaces'

export const Label: FunctionComponent<any> = ({
  className,
  style,
  title,
  icon,
  color = EUIColorType.primary,
  labelStyle = 'light'
}) => {
  return (
    <div
      className={classNames({
        'eln-label': true,
        [`${className}`]: className
      })}
      style={{
        backgroundColor: color,
        color: labelStyle === 'dark' ? '#555' : 'white',
        ...style
      }}
    >
      {icon && <i className={icon} />}
      {title && <p>{title}</p>}
    </div>
  )
}
