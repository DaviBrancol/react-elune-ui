import React, { FunctionComponent } from 'react'

export const CardNumber: FunctionComponent<any> = ({ version, ...props }) => {
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
  ...props
}) => {
  return (
    <div className="eln-card eln-card-v1">
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
