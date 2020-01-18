import React, { FunctionComponent, useState } from 'react'
import {
  PageHeader,
  Col,
  Row,
  CardSimple,
  Alert,
  TextHeader
} from '../components'
import { EUIColorType as Colors } from '../interfaces'

export const PageAlerts: FunctionComponent<any> = ({ ...props }) => {
  const [visible, _setVisible] = useState(Array(12).fill(true))

  function setVisible(index) {
    const vis = visible.slice(0)
    vis[index] = false
    _setVisible(vis)
  }

  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader title="Alerts" list={['Home', 'Components', 'Alerts']} />
        <TextHeader title="Example Components" />
        <Row>
          <Col lg={6}>
            <CardSimple title="Alerts">
              <Alert
                title="This is a primary alert - check it out!"
                color={Colors.primary}
              />
              <Alert
                title="This is a secondary alert - check it out!"
                color={Colors.secondary}
              />
              <Alert
                title="This is a info alert - check it out!"
                color={Colors.info}
              />
              <Alert
                title="This is a success alert - check it out!"
                color={Colors.success}
              />
              <Alert
                title="This is a warning alert - check it out!"
                color={Colors.warning}
              />
              <Alert
                title="This is a danger alert - check it out!"
                color={Colors.danger}
              />
            </CardSimple>
          </Col>
          <Col lg={6}>
            <CardSimple title="Highlighted">
              <Alert
                title="This is a primary alert - check it out!"
                color={Colors.primaryHeavy}
              />
              <Alert
                title="This is a secondary alert - check it out!"
                color={Colors.secondaryHeavy}
              />
              <Alert
                title="This is a info alert - check it out!"
                color={Colors.infoHeavy}
              />
              <Alert
                title="This is a success alert - check it out!"
                color={Colors.successHeavy}
              />
              <Alert
                title="This is a warning alert - check it out!"
                color={Colors.warningHeavy}
              />
              <Alert
                title="This is a danger alert - check it out!"
                color={Colors.dangerHeavy}
              />
            </CardSimple>
          </Col>
        </Row>
        <TextHeader title="Dismissible Button" />
        <Row>
          <Col lg={12}>
            <CardSimple title="Dismissible">
              <Alert
                title="This is a primary alert - check it out!"
                color={Colors.primary}
                isVisible={visible[0]}
                onClose={() => setVisible(0)}
              />
              <Alert
                title="This is a secondary alert - check it out!"
                color={Colors.secondary}
                isVisible={visible[1]}
                onClose={() => setVisible(1)}
              />
              <Alert
                title="This is a info alert - check it out!"
                color={Colors.info}
                isVisible={visible[2]}
                onClose={() => setVisible(2)}
              />
              <Alert
                title="This is a success alert - check it out!"
                color={Colors.success}
                isVisible={visible[3]}
                onClose={() => setVisible(3)}
              />
              <Alert
                title="This is a warning alert - check it out!"
                color={Colors.warning}
                isVisible={visible[4]}
                onClose={() => setVisible(4)}
              />
              <Alert
                title="This is a danger alert - check it out!"
                color={Colors.danger}
                isVisible={visible[5]}
                onClose={() => setVisible(5)}
              />
            </CardSimple>
          </Col>
        </Row>
        <TextHeader title="Alert with Icons" />
        <Row>
          <Col lg={12}>
            <CardSimple title="Icons">
              <Alert
                title="This is a primary alert - check it out!"
                color={Colors.primary}
                icon="fa fa-users"
                isVisible={visible[6]}
                onClose={() => setVisible(6)}
              />
              <Alert
                title="This is a secondary alert - check it out!"
                color={Colors.secondary}
                icon="fa fa-user-tie"
                isVisible={visible[7]}
                onClose={() => setVisible(7)}
              />
              <Alert
                title="This is a info alert - check it out!"
                color={Colors.info}
                icon="fa fa-question"
                isVisible={visible[8]}
                onClose={() => setVisible(8)}
              />
              <Alert
                title="This is a success alert - check it out!"
                color={Colors.success}
                icon="fa fa-check"
                isVisible={visible[9]}
                onClose={() => setVisible(9)}
              />
              <Alert
                title="This is a warning alert - check it out!"
                color={Colors.warning}
                icon="fa fa-exclamation"
                isVisible={visible[10]}
                onClose={() => setVisible(10)}
              />
              <Alert
                title="This is a danger alert - check it out!"
                color={Colors.danger}
                icon="fa fa-ambulance"
                isVisible={visible[11]}
                onClose={() => setVisible(11)}
              />
            </CardSimple>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
