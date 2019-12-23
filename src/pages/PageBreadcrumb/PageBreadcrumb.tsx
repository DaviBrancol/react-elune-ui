import React, { FunctionComponent } from 'react'
import { PageHeader } from '../../components'

export const PageBreadcrumb: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <PageHeader
        title="Breadcrumb"
        list={['Home', 'Components', 'Breadscrumb']}
      />
    </div>
  )
}
