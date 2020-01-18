import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { EUIColorType } from '../interfaces'

export const Alert: FunctionComponent<any> = ({
  title,
  icon,
  color = EUIColorType.primary,
  labelColor = 'light',
  isVisible = true,
  onClose = null
}) => {
  return isVisible ? (
    <div
      className={classNames({
        'eln-alert': true,
        'eln-alert-with-icon': icon
      })}
      style={{
        backgroundColor: color,
        color: labelColor === 'dark' ? '#555' : 'white'
      }}
    >
      <div className="eln-alert-title">
        {icon && <i className={icon} />}
        {title && <p>{title}</p>}
      </div>
      {onClose && <i className="close-icon fa fa-times" onClick={onClose} />}
    </div>
  ) : null
}
