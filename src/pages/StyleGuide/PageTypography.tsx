import React, { FunctionComponent } from 'react'
import { PageHeader, Col } from '../../components'

export const PageTypography: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader
          title="Typography"
          list={['Home', 'Style Guide', 'Typography']}
        />
      </Col>
    </div>
  )
}
