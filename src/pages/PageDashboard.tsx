import React, { FunctionComponent } from 'react'
import { PageHeader, CardSimple, CardNumber, Col, Row } from '../components'
import { salesDashboard } from '../demo/dashboard/main'
import { Line } from 'react-chartjs-2'

export const PageDashboard: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader title="Sales" list={['Dashboard', 'Sales']} />
        <Row>
          <Col lg={3}>
            <CardNumber
              version={1}
              title="Prospects"
              icon="fa fa-users"
              value="400"
              gradient="primary-light"
            />
          </Col>
          <Col lg={3}>
            <CardNumber
              version={1}
              title="Leads"
              icon="fa fa-user-tie"
              value="140"
              gradient="warning-light"
            />
          </Col>
          <Col lg={3}>
            <CardNumber
              version={1}
              title="Sellings"
              icon="fa fa-hand-holding-usd"
              value="40"
              gradient="success-light"
            />
          </Col>
          <Col lg={3}>
            <CardNumber
              version={1}
              title="Refunds"
              icon="fa fa-times"
              value="8"
              gradient="danger-light"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <CardSimple title="Sales Report">
              <Line
                data={salesDashboard.data}
                options={salesDashboard.options}
                height={salesDashboard.height}
              />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Bar Chart">
              <p>xxx</p>
            </CardSimple>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
