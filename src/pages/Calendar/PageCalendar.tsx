import React, { FunctionComponent } from 'react'
import { PageHeader, Col, Row, CardSimple, TextHeader } from '../../components'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

export const PageCalendar: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader title="Calendar" list={['Home', 'Calendar']} />
        <TextHeader title="Example Components" />
        <Row>
          <Col lg={12}>
            <CardSimple title="Elune Calendar">
              <Calendar
                localizer={localizer}
                events={[]}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
              />
            </CardSimple>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
