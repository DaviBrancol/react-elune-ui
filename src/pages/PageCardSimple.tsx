import React, { FunctionComponent } from 'react'
import { PageHeader } from '../components'

export const PageCardSimple: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <PageHeader
        title="Breadcrumb"
        list={['Home', 'Components', 'Cards', 'Simple Card']}
      />
    </div>
  )
}
