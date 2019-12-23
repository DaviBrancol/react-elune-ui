import React, { FunctionComponent } from 'react'
import { IColorPallete } from '../interfaces'

export const ColorPallete: FunctionComponent<IColorPallete> = ({
  grade,
  hex,
  whiteLabel
}) => {
  return (
    <div
      className="eln-color-pallete"
      style={{ backgroundColor: hex, color: whiteLabel ? '#fafafa' : '#444' }}
    >
      <p className="eln-color-grade">{grade}</p>
      <p className="eln-color-hex">{hex}</p>
    </div>
  )
}
