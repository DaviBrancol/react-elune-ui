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

export const PageButtons: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader title="Buttons" list={['Home', 'Components', 'Buttons']} />
        <TextHeader title="Buttons with Text" />
        <Row>
          <Col lg={6}>
            <CardSimple title="Light">
              <Button
                onClick={() => {}}
                title="primary"
                color={Colors.primary}
              />
              <Button
                onClick={() => {}}
                title="secondary"
                color={Colors.secondary}
              />
              <Button onClick={() => {}} title="info" color={Colors.info} />
              <Button
                onClick={() => {}}
                title="success"
                color={Colors.success}
              />
              <Button
                onClick={() => {}}
                title="warning"
                color={Colors.warning}
              />
              <Button onClick={() => {}} title="danger" color={Colors.danger} />
            </CardSimple>
          </Col>
          <Col lg={6}>
            <CardSimple title="Heavy">
              <Button
                onClick={() => {}}
                title="primary"
                color={Colors.primaryHeavy}
              />
              <Button
                onClick={() => {}}
                title="secondary"
                color={Colors.secondaryHeavy}
              />
              <Button
                onClick={() => {}}
                title="info"
                color={Colors.infoHeavy}
              />
              <Button
                onClick={() => {}}
                title="success"
                color={Colors.successHeavy}
              />
              <Button
                onClick={() => {}}
                title="warning"
                color={Colors.warningHeavy}
              />
              <Button
                onClick={() => {}}
                title="danger"
                color={Colors.dangerHeavy}
              />
            </CardSimple>
          </Col>
        </Row>
        <TextHeader title="Custom Shapes" />
        <Row>
          <Col lg={6}>
            <CardSimple title="Squared Border">
              <Button
                onClick={() => {}}
                title="primary"
                color={Colors.primary}
                border="square"
              />
              <Button
                onClick={() => {}}
                title="secondary"
                color={Colors.secondary}
                border="square"
              />
              <Button
                onClick={() => {}}
                title="info"
                color={Colors.info}
                border="square"
              />
              <Button
                onClick={() => {}}
                title="success"
                color={Colors.success}
                border="square"
              />
              <Button
                onClick={() => {}}
                title="warning"
                color={Colors.warning}
                border="square"
              />
              <Button
                onClick={() => {}}
                title="danger"
                color={Colors.danger}
                border="square"
              />
            </CardSimple>
          </Col>
          <Col lg={6}>
            <CardSimple title="Circular Border">
              <Button
                onClick={() => {}}
                title="primary"
                color={Colors.primary}
                border="circular"
              />
              <Button
                onClick={() => {}}
                title="secondary"
                color={Colors.secondary}
                border="circular"
              />
              <Button
                onClick={() => {}}
                title="info"
                color={Colors.info}
                border="circular"
              />
              <Button
                onClick={() => {}}
                title="success"
                color={Colors.success}
                border="circular"
              />
              <Button
                onClick={() => {}}
                title="warning"
                color={Colors.warning}
                border="circular"
              />
              <Button
                onClick={() => {}}
                title="danger"
                color={Colors.danger}
                border="circular"
              />
            </CardSimple>
          </Col>
        </Row>
        <TextHeader title="Custom Sizes" />
        <Row>
          <Col lg={6}>
            <CardSimple title="Small">
              <Button
                onClick={() => {}}
                title="primary"
                color={Colors.primary}
                size="small"
              />
              <Button
                onClick={() => {}}
                title="secondary"
                color={Colors.secondary}
                size="small"
              />
              <Button
                onClick={() => {}}
                title="info"
                color={Colors.info}
                size="small"
              />
              <Button
                onClick={() => {}}
                title="success"
                color={Colors.success}
                size="small"
              />
              <Button
                onClick={() => {}}
                title="warning"
                color={Colors.warning}
                size="small"
              />
              <Button
                onClick={() => {}}
                title="danger"
                color={Colors.danger}
                size="small"
              />
            </CardSimple>
          </Col>
          <Col lg={6}>
            <CardSimple title="Large">
              <Button
                onClick={() => {}}
                title="primary"
                color={Colors.primary}
                size="large"
              />
              <Button
                onClick={() => {}}
                title="secondary"
                color={Colors.secondary}
                size="large"
              />
              <Button
                onClick={() => {}}
                title="info"
                color={Colors.info}
                size="large"
              />
              <Button
                onClick={() => {}}
                title="success"
                color={Colors.success}
                size="large"
              />
              <Button
                onClick={() => {}}
                title="warning"
                color={Colors.warning}
                size="large"
              />
              <Button
                onClick={() => {}}
                title="danger"
                color={Colors.danger}
                size="large"
              />
            </CardSimple>
          </Col>
        </Row>
        <TextHeader title="Buttons with Icons" />
        <Row>
          <Col lg={6}>
            <CardSimple title="Light">
              <Button
                onClick={() => {}}
                icon="fa fa-play"
                color={Colors.primary}
              />
              <Button
                onClick={() => {}}
                icon="fa fa-pause"
                color={Colors.secondary}
              />
              <Button
                onClick={() => {}}
                icon="fa fa-question"
                color={Colors.info}
              />
              <Button
                onClick={() => {}}
                icon="fa fa-check"
                color={Colors.success}
              />
              <Button
                onClick={() => {}}
                icon="fa fa-exclamation"
                color={Colors.warning}
              />
              <Button
                onClick={() => {}}
                icon="fa fa-times"
                color={Colors.danger}
              />
            </CardSimple>
          </Col>
          <Col lg={6}>
            <CardSimple title="Heavy">
              <Button
                onClick={() => {}}
                icon="fa fa-play"
                color={Colors.primaryHeavy}
              />
              <Button
                onClick={() => {}}
                icon="fa fa-pause"
                color={Colors.secondaryHeavy}
              />
              <Button
                onClick={() => {}}
                icon="fa fa-question"
                color={Colors.infoHeavy}
              />
              <Button
                onClick={() => {}}
                icon="fa fa-check"
                color={Colors.successHeavy}
              />
              <Button
                onClick={() => {}}
                icon="fa fa-exclamation"
                color={Colors.warningHeavy}
              />
              <Button
                onClick={() => {}}
                icon="fa fa-times"
                color={Colors.dangerHeavy}
              />
            </CardSimple>
          </Col>
        </Row>
        <TextHeader title="Custom Shapes" />
        <Row>
          <Col lg={6}>
            <CardSimple title="Squared Border">
              <Button
                onClick={() => {}}
                icon="fa fa-play"
                color={Colors.primary}
                border="square"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-pause"
                color={Colors.secondary}
                border="square"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-question"
                color={Colors.info}
                border="square"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-check"
                color={Colors.success}
                border="square"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-exclamation"
                color={Colors.warning}
                border="square"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-times"
                color={Colors.danger}
                border="square"
              />
            </CardSimple>
          </Col>
          <Col lg={6}>
            <CardSimple title="Circular Border">
              <Button
                onClick={() => {}}
                icon="fa fa-play"
                color={Colors.primary}
                border="circular"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-pause"
                color={Colors.secondary}
                border="circular"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-question"
                color={Colors.info}
                border="circular"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-check"
                color={Colors.success}
                border="circular"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-exclamation"
                color={Colors.warning}
                border="circular"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-times"
                color={Colors.danger}
                border="circular"
              />
            </CardSimple>
          </Col>
        </Row>
        <TextHeader title="Custom Sizes" />
        <Row>
          <Col lg={6}>
            <CardSimple title="Small">
              <Button
                onClick={() => {}}
                icon="fa fa-play"
                color={Colors.primary}
                size="small"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-pause"
                color={Colors.secondary}
                size="small"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-question"
                color={Colors.info}
                size="small"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-check"
                color={Colors.success}
                size="small"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-exclamation"
                color={Colors.warning}
                size="small"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-times"
                color={Colors.danger}
                size="small"
              />
            </CardSimple>
          </Col>
          <Col lg={6}>
            <CardSimple title="Large">
              <Button
                onClick={() => {}}
                icon="fa fa-play"
                color={Colors.primary}
                size="large"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-pause"
                color={Colors.secondary}
                size="large"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-question"
                color={Colors.info}
                size="large"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-check"
                color={Colors.success}
                size="large"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-exclamation"
                color={Colors.warning}
                size="large"
              />
              <Button
                onClick={() => {}}
                icon="fa fa-times"
                color={Colors.danger}
                size="large"
              />
            </CardSimple>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
