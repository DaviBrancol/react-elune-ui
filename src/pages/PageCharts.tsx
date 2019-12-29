import React, { FunctionComponent } from 'react'
import {
  Button,
  PageHeader,
  Col,
  Row,
  CardSimple,
  TextHeader
} from '../components'
import { EUIColorType as Colors } from '../interfaces'
import { Bar } from 'react-chartjs-2'
import { barDemoChart } from '../demo/charts'

export const PageCharts: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader title="Chart" list={['Home', 'Components', 'Charts']} />
        <Row>
          <Col lg={12}>
            <CardSimple title="Bar Chart">
              <Bar
                data={barDemoChart.data}
                options={barDemoChart.options}
                height={barDemoChart.height}
              />
            </CardSimple>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
