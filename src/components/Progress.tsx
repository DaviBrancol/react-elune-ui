import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { IProgressBar, EUIColorType } from '../interfaces'

export const Progress: FunctionComponent<IProgressBar> = ({
  progress,
  className,
  style,
  stroke = 20,
  striped = false,
  color = EUIColorType.primary,
  position = 'horizontal',
  animated = false,
  completion = false
}) => {
  const dimension = position === 'horizontal' ? 'min-height' : 'min-width'
  const prog = progress < 0 ? 0 : progress === 1 ? 1 : progress
  const progression = prog * 100
  const full = completion && prog === 1

  return (
    <div
      className={classNames({
        'eln-progress': true,
        [position]: true,
        'eln-progress-striped': striped,
        'eln-progress-animated': animated
      })}
      style={stroke ? { [dimension]: stroke } : {}}
    >
      <div
        className="eln-progress-bar"
        style={{
          width: `${progression}%`,
          backgroundColor: !full ? color : EUIColorType.success,
          [dimension]: stroke
        }}
      >
        {prog > 0.05 && (
          <p>{full ? 'Complete' : `${Math.round(progression)}%`}</p>
        )}
      </div>
    </div>
  )
}
