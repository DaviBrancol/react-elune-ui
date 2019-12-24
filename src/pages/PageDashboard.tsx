import React, { FunctionComponent } from 'react'
import { PageHeader, CardSimple, CardNumber, Col, Row } from '../components'

export const PageDashboard: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader title="Sales" list={['Dashboard', 'Sales']} />
        <Row>
          <Col lg={3}>
            <CardNumber
              version={1}
              title="Clients"
              icon="fa fa-users"
              value="200"
              gradient="primary-light"
            />
          </Col>
          <Col lg={3}>
            <CardNumber
              version={1}
              title="Projects"
              icon="fa fa-pencil-ruler"
              value="200"
              gradient="secondary-light"
            />
          </Col>
          <Col lg={3}>
            <CardNumber
              version={1}
              title="Notifications"
              icon="fa fa-bell"
              value="40"
              gradient="warning-light"
            />
          </Col>
          <Col lg={3}>
            <CardNumber
              version={1}
              title="Emails"
              icon="fa fa-envelope"
              value="200"
              gradient="danger-light"
            />
          </Col>
        </Row>
      </Col>
    </div>
  )
}
