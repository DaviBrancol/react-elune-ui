import React, { FunctionComponent } from 'react'
import { IAvatar, EUIColorType } from '../interfaces'

export const Avatar: FunctionComponent<IAvatar> = ({
  className,
  style,
  name,
  color,
  image,
  size = 'default'
}) => {
  var regex = name ? name.match(/\b\w/g) : null
  const initials = regex
    ? ((regex.shift() || '') + (regex.pop() || '')).toUpperCase()
    : null
  return (
    <div
      className={`eln-avatar eln-avatar-${size}`}
      style={{
        backgroundColor: color || EUIColorType.light
      }}
    >
      {image && <img src={image} alt="User Avatar" />}
      {name && <p>{initials}</p>}
    </div>
  )
}
