import React, { FunctionComponent } from 'react'
import { IBreadcrumb } from '../../interfaces'

export const Breadcrumb: FunctionComponent<IBreadcrumb> = ({ list }) => {
  return (
    <ul className="eln-breadcrumb">
      {list.map((item, index) => (
        <>
          <li>{item}</li>
          {index < list.length - 1 && (
            <i className="fa fa-fw fa-chevron-right" />
          )}
        </>
      ))}
    </ul>
  )
}
