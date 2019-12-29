import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { IButton, EUIColorType } from '../interfaces'

export const Button: FunctionComponent<IButton> = ({
  className,
  style,
  title,
  icon,
  onClick,
  color = EUIColorType.primary,
  border = 'default',
  size = 'default',
  labelColor = 'light'
}) => {
  return (
    <button
      className={classNames({
        'eln-button': true,
        'eln-button-circular': border === 'circular',
        'eln-button-square': border === 'square',
        'eln-button-large': size === 'large',
        'eln-button-small': size === 'small',
        'eln-button-icon': icon
      })}
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: labelColor === 'dark' ? '#555' : 'white'
      }}
    >
      {icon && <i className={icon} />}
      {title}
    </button>
  )
}
