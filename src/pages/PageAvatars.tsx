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

export const PageAvatars: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader title="Avatars" list={['Home', 'Components', 'Avatars']} />
        <TextHeader title="Example Components" />
        <Row>
          <Col lg={12}>
            <CardSimple title="Images">
              <Row
                style={{ justifyContent: 'space-around', alignItems: 'center' }}
              >
                <Avatar image="/team_0.png" color={Colors.primary} />
                <Avatar name="Davi Duarte Gomes" color={Colors.primary} />
                <Avatar image="/team_1.png" color={Colors.secondary} />
                <Avatar name="Henrick Martins" color={Colors.secondary} />
                <Avatar image="/team_2.png" color={Colors.success} />
                <Avatar name="Mauricio Elano" color={Colors.success} />
                <Avatar image="/team_3.png" color={Colors.warning} />
                <Avatar name="Gabriel Roberto" color={Colors.warning} />
                <Avatar image="/team_4.png" color={Colors.danger} />
                <Avatar name="Carlos Martins" color={Colors.danger} />
              </Row>
            </CardSimple>
          </Col>
        </Row>
        <TextHeader title="Custom Sizes" />
        <Row>
          <Col lg={6}>
            <CardSimple title="Image Sizes">
              <Row
                style={{ justifyContent: 'space-around', alignItems: 'center' }}
              >
                <Avatar
                  image="/team_0.png"
                  size="extralarge"
                  color={Colors.primary}
                />
                <Avatar
                  image="/team_1.png"
                  size="large"
                  color={Colors.secondary}
                />
                <Avatar image="/team_2.png" color={Colors.success} />
                <Avatar
                  image="/team_3.png"
                  size="small"
                  color={Colors.warning}
                />
                <Avatar
                  image="/team_4.png"
                  size="extrasmall"
                  color={Colors.danger}
                />
              </Row>
            </CardSimple>
          </Col>
          <Col lg={6}>
            <CardSimple title="Username Sizes">
              <Row
                style={{ justifyContent: 'space-around', alignItems: 'center' }}
              >
                <Avatar
                  name="Davi Duarte Gomes"
                  size="extralarge"
                  color={Colors.primary}
                />
                <Avatar
                  name="Henrick Martins"
                  size="large"
                  color={Colors.secondary}
                />
                <Avatar name="Mauricio Elano" color={Colors.success} />
                <Avatar
                  name="Gabriel Roberto"
                  size="small"
                  color={Colors.warning}
                />
                <Avatar
                  name="Carlos Martins"
                  size="extrasmall"
                  color={Colors.danger}
                />
              </Row>
            </CardSimple>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
