import React, { FunctionComponent } from 'react'
import { PageHeader, Col } from '../../components'

export const PageShapes: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader title="Shapes" list={['Home', 'Style Guide', 'Shapes']} />
      </Col>
    </div>
  )
}
