import React, { FunctionComponent } from 'react'
import { PageHeader, Col } from '../../components'

export const PageIcons: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader title="Icons" list={['Home', 'Style Guide', 'Icons']} />
      </Col>
    </div>
  )
}
