import React, { FunctionComponent } from 'react'
import { PageHeader, Col } from '../../components'

export const PageColorPallete: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader
          title="Color Pallete"
          list={['Home', 'Style Guide', 'Color Pallete']}
        />
      </Col>
    </div>
  )
}
