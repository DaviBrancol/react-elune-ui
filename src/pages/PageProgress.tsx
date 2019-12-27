import React, { FunctionComponent, useState } from 'react'
import {
  PageHeader,
  Col,
  Row,
  CardSimple,
  Progress,
  TextHeader
} from '../components'
import { EUIColorType as Colors } from '../interfaces'

export const PageProgress: FunctionComponent<any> = ({ ...props }) => {
  const [progress, setProgress] = useState(0)
  const [complete, setComplete] = useState(0.9)
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader
          title="Progress Bar"
          list={['Home', 'Components', 'Progress']}
        />
        <Row>
          <Col lg={12}>
            <TextHeader title="Example Component" />
            <CardSimple title="Progress Bar">
              <Progress progress={progress} completion striped animated />
              <div style={{ display: 'flex' }}>
                <button className="eln-button" onClick={() => setProgress(0)}>
                  Resetar
                </button>
                <button className="eln-button" onClick={() => setProgress(1)}>
                  Complete
                </button>
                <button
                  className="eln-button"
                  onClick={() => setProgress(progress - 0.1)}
                >
                  Diminuir
                </button>
                <button
                  className="eln-button"
                  onClick={() => setProgress(progress + 0.1)}
                >
                  Aumentar
                </button>
              </div>
            </CardSimple>
          </Col>
        </Row>
        <TextHeader title="Custom Styles" />
        <Row>
          <Col lg={4}>
            <CardSimple title="Linear Bar">
              <Progress progress={0} />
              <Progress progress={0.5} />
              <Progress progress={1} />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Striped Bar">
              <Progress progress={0} striped />
              <Progress progress={0.5} striped />
              <Progress progress={1} striped />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Animated Striped Bar">
              <Progress progress={0} striped animated />
              <Progress progress={0.5} striped animated />
              <Progress progress={1} striped animated />
            </CardSimple>
          </Col>
        </Row>
        <TextHeader title="Custom Colors" />
        <Row>
          <Col lg={3}>
            <CardSimple title="Secondary Bar">
              <Progress progress={0.5} color={Colors.secondary} />
              <Progress progress={0.5} color={Colors.secondary} striped />
              <Progress
                progress={0.5}
                color={Colors.secondary}
                striped
                animated
              />
            </CardSimple>
          </Col>
          <Col lg={3}>
            <CardSimple title="Success Bar">
              <Progress progress={0.5} color={Colors.success} />
              <Progress progress={0.5} color={Colors.success} striped />
              <Progress
                progress={0.5}
                color={Colors.success}
                striped
                animated
              />
            </CardSimple>
          </Col>
          <Col lg={3}>
            <CardSimple title="Warning Bar">
              <Progress progress={0.5} color={Colors.warning} />
              <Progress progress={0.5} color={Colors.warning} striped />
              <Progress
                progress={0.5}
                color={Colors.warning}
                striped
                animated
              />
            </CardSimple>
          </Col>
          <Col lg={3}>
            <CardSimple title="Danger Bar">
              <Progress progress={0.5} color={Colors.danger} />
              <Progress progress={0.5} color={Colors.danger} striped />
              <Progress progress={0.5} color={Colors.danger} striped animated />
            </CardSimple>
          </Col>
        </Row>
        <TextHeader title="Custom Sizes" />
        <Row>
          <Col lg={4}>
            <CardSimple title="Small Bar">
              <Progress progress={1} stroke={10} />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Normal Bar">
              <Progress progress={1} stroke={20} />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Tall Bar">
              <Progress progress={1} stroke={30} />
            </CardSimple>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
