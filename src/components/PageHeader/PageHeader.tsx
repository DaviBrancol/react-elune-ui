import React, { FunctionComponent } from 'react'
import { Breadcrumb } from '../Breadcrumb'
import { IPageHeader } from '../../interfaces'

export const PageHeader: FunctionComponent<IPageHeader> = ({ title, list }) => {
  return (
    <div className="eln-pageheader">
      <h2>{title}</h2>
      {list && <Breadcrumb list={list} />}
    </div>
  )
}
