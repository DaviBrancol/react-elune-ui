import React, { FunctionComponent } from 'react'
import { ICardNumber } from '../../interfaces'
import classNames from 'classnames'

export const CardNumber: FunctionComponent<ICardNumber> = ({
  version,
  ...props
}) => {
  if (version === 1) {
    return CardNumberV1(props)
  } else {
    return CardNumberV1(props)
  }
}

const CardNumberV1: FunctionComponent<any> = ({
  title,
  icon,
  value,
  gradient,
  ...props
}) => {
  return (
    <div
      className={classNames('eln-card eln-card-number-v1', {
        [`grd-${gradient}`]: gradient
      })}
    >
      <div className="eln-card-info">
        <p className="eln-card-data">{value}</p>
        <p className="eln-card-label">{title}</p>
      </div>
      <div className="eln-card-icon">
        <i className={icon} />
      </div>
    </div>
  )
}
