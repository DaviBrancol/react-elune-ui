import React, { FunctionComponent, useState } from 'react'
import {
  PageHeader,
  Col,
  Row,
  CardSimple,
  Avatar,
  TextHeader
} from '../components'
import { EUIColorType as Colors } from '../interfaces'

export const PageBreadcrumb: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader
          title="Breadcrumbs"
          list={['Home', 'Components', 'Breadcrumbs']}
        />
        <TextHeader title="Example Component" />
        <Row>
          <Col lg={12}>
            <CardSimple>
              <PageHeader title="Home" list={['Home']} />
            </CardSimple>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <CardSimple>
              <PageHeader title="Components" list={['Home', 'Components']} />
            </CardSimple>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <CardSimple>
              <PageHeader
                title="Cards"
                list={['Home', 'Components', 'Cards']}
              />
            </CardSimple>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <CardSimple>
              <PageHeader
                title="Card Simple"
                list={['Home', 'Components', 'Cards', 'Card Simple']}
              />
            </CardSimple>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
