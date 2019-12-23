import React, { FunctionComponent } from 'react'
import { PageHeader, CardSimple, Row, Col, TextHeader } from '../../components'

export const PageGridSystem: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader
          title="Grid System"
          list={['Home', 'Style Guide', 'Grid System']}
        />
        <TextHeader title="Equal Length" />
        <Row>
          <Col lg={12}>
            <CardSimple title="Col-12" />
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <CardSimple title="Col-6" />
          </Col>
          <Col lg={6}>
            <CardSimple title="Col-6" />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <CardSimple title="Col-4" />
          </Col>
          <Col lg={4}>
            <CardSimple title="Col-4" />
          </Col>
          <Col lg={4}>
            <CardSimple title="Col-4" />
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <CardSimple title="Col-3" />
          </Col>
          <Col lg={3}>
            <CardSimple title="Col-3" />
          </Col>
          <Col lg={3}>
            <CardSimple title="Col-3" />
          </Col>
          <Col lg={3}>
            <CardSimple title="Col-3" />
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <CardSimple title="Col-2" />
          </Col>
          <Col lg={2}>
            <CardSimple title="Col-2" />
          </Col>
          <Col lg={2}>
            <CardSimple title="Col-2" />
          </Col>
          <Col lg={2}>
            <CardSimple title="Col-2" />
          </Col>
          <Col lg={2}>
            <CardSimple title="Col-2" />
          </Col>
          <Col lg={2}>
            <CardSimple title="Col-2" />
          </Col>
        </Row>
        <Row>
          <Col lg={1}>
            <CardSimple title="Col-1" />
          </Col>
          <Col lg={1}>
            <CardSimple title="Col-1" />
          </Col>
          <Col lg={1}>
            <CardSimple title="Col-1" />
          </Col>
          <Col lg={1}>
            <CardSimple title="Col-1" />
          </Col>
          <Col lg={1}>
            <CardSimple title="Col-1" />
          </Col>
          <Col lg={1}>
            <CardSimple title="Col-1" />
          </Col>
          <Col lg={1}>
            <CardSimple title="Col-1" />
          </Col>
          <Col lg={1}>
            <CardSimple title="Col-1" />
          </Col>
          <Col lg={1}>
            <CardSimple title="Col-1" />
          </Col>
          <Col lg={1}>
            <CardSimple title="Col-1" />
          </Col>
          <Col lg={1}>
            <CardSimple title="Col-1" />
          </Col>
          <Col lg={1}>
            <CardSimple title="Col-1" />
          </Col>
        </Row>
        <TextHeader title="Custom Length" />
        <Row>
          <Col lg={3}>
            <CardSimple title="Col-3" />
          </Col>
          <Col lg={9}>
            <CardSimple title="Col-9" />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <CardSimple title="Col-4" />
          </Col>
          <Col lg={8}>
            <CardSimple title="Col-8" />
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <CardSimple title="Col-7" />
          </Col>
          <Col lg={5}>
            <CardSimple title="Col-5" />
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <CardSimple title="Col-3" />
          </Col>
          <Col lg={6}>
            <CardSimple title="Col-6" />
          </Col>
          <Col lg={3}>
            <CardSimple title="Col-3" />
          </Col>
        </Row>
      </Col>
    </div>
  )
}
