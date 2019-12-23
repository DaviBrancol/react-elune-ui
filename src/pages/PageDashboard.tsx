import React, { FunctionComponent } from 'react'
import { PageHeader, CardSimple, CardNumber, Col, Row } from '../components'

export const PageDashboard: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader title="Sales" list={['Dashboard', 'Sales']} />
        <Row>
          <Col lg={4}>
            <CardNumber title="Prospects" icon="fa fa-users" value="200" />
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
