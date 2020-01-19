import React, { FunctionComponent, useState } from 'react'
import {
  PageHeader,
  Col,
  Row,
  CardSimple,
  Alert,
  Input,
  TextHeader
} from '../../components'
import { EUIColorType as Colors } from '../../interfaces'

export const PageInputs: FunctionComponent<any> = ({ ...props }) => {
  const [form, setForm] = useState('')

  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader title="Inputs" list={['Home', 'Forms', 'Inputs']} />
        <TextHeader title="Example Components" />
        <Row>
          <Col lg={12}>
            <CardSimple title="Inputs">
              <Row>
                <Col lg={4}>
                  <Input>
                    <input
                      className="eln-input"
                      type="text"
                      name="subject"
                      id="subject"
                      onChange={e => setForm(e.target.value)}
                      value={form}
                      required
                    />
                    <label htmlFor="subject" className="mr-sm-2">
                      Basic
                    </label>
                  </Input>
                </Col>
                <Col lg={4}>
                  <Input>
                    <input
                      className="eln-input"
                      type="text"
                      name="subject"
                      placeholder="Placeholder Info"
                      id="subject"
                      onChange={e => setForm(e.target.value)}
                      value={form}
                      required
                    />
                    <label htmlFor="subject" className="mr-sm-2">
                      Placeholder
                    </label>
                  </Input>
                </Col>
                <Col lg={4}>
                  <Input disabled>
                    <input
                      className="eln-input"
                      type="text"
                      name="subject"
                      id="subject"
                      onChange={e => setForm(e.target.value)}
                      value={form}
                      required
                      disabled
                    />
                    <label htmlFor="subject" className="mr-sm-2">
                      Disabled
                    </label>
                  </Input>
                </Col>
                <Col lg={4}>
                  <Input>
                    <input
                      className="eln-input"
                      type="text"
                      name="subject"
                      id="subject"
                      onChange={e => setForm(e.target.value)}
                      value={form}
                      required
                    />
                    <label htmlFor="subject" className="mr-sm-2">
                      Basic
                    </label>
                  </Input>
                </Col>
                <Col lg={4}>
                  <Input>
                    <input
                      className="eln-input"
                      type="text"
                      name="subject"
                      placeholder="Placeholder Info"
                      id="subject"
                      onChange={e => setForm(e.target.value)}
                      value={form}
                      required
                    />
                    <label htmlFor="subject" className="mr-sm-2">
                      Placeholder
                    </label>
                  </Input>
                </Col>
                <Col lg={4}>
                  <Input disabled>
                    <input
                      className="eln-input"
                      type="text"
                      name="subject"
                      id="subject"
                      onChange={e => setForm(e.target.value)}
                      value={form}
                      required
                      disabled
                    />
                    <label htmlFor="subject" className="mr-sm-2">
                      Disabled
                    </label>
                  </Input>
                </Col>
              </Row>
            </CardSimple>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
