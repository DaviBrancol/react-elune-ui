import React, { FunctionComponent } from 'react'
import { IColorPallete } from '../interfaces'

export const ColorPallete: FunctionComponent<IColorPallete> = ({
  grade,
  hex
}) => {
  return (
    <div className="eln-color-pallete">
      <div>
        <div className="eln-color-container" style={{ backgroundColor: hex }} />
        <p className="eln-color-grade">{grade}</p>
      </div>
      <p className="eln-color-hex">{hex}</p>
    </div>
  )
}
