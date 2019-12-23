import React, { FunctionComponent } from 'react'
import { PageHeader, CardSimple, Col, Row } from '../components'

export const PageCardSimple: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader
          title="Simple Card"
          list={['Home', 'Components', 'Cards', 'Simple Card']}
        />
        <Row>
          <Col lg={4}>
            <CardSimple title="Simple Card">
              <p>Conteúdo</p>
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Simple Card">
              <p>Conteúdo</p>
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Simple Card">
              <p>Conteúdo</p>
            </CardSimple>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
