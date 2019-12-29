import React, { FunctionComponent } from 'react'
import {
  PageHeader,
  CardSimple,
  CardNumber,
  Col,
  Row,
  WidgetAdworks,
  WidgetTeam
} from '../components'
import {
  salesDashboard,
  teamActivity,
  adworks,
  teamMembers
} from '../demo/dashboard/main'
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
            <CardSimple title="Monthly Report">
              <Line
                data={salesDashboard.data}
                options={salesDashboard.options}
                height={salesDashboard.height}
              />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Adworks Progress">
              <WidgetAdworks adworks={adworks} />
            </CardSimple>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <CardSimple title="Current Team">
              <WidgetTeam members={teamMembers} />
            </CardSimple>
          </Col>
          <Col lg={8}>
            <CardSimple title="Current Team">
              <WidgetTeam members={teamMembers} />
            </CardSimple>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
