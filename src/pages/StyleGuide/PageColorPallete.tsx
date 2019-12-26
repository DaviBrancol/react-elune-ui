import React, { FunctionComponent } from 'react'
import {
  PageHeader,
  Row,
  Col,
  CardSimple,
  ColorPallete,
  ColorCard
} from '../../components'

export const PageColorPallete: FunctionComponent<any> = ({ ...props }) => {
  return (
    <div className="eln-page">
      <Col lg={12}>
        <PageHeader
          title="Color Pallete"
          list={['Home', 'Style Guide', 'Color Pallete']}
        />
        <Row>
          <Col lg={2}>
            <ColorCard title="Primary" hex="#DB83D7" />
          </Col>
          <Col lg={2}>
            <ColorCard title="Secondary" hex="#A3C0E6" />
          </Col>
          <Col lg={2}>
            <ColorCard title="Info" hex="#5CE7D6" />
          </Col>
          <Col lg={2}>
            <ColorCard title="Success" hex="#66DC74" />
          </Col>
          <Col lg={2}>
            <ColorCard title="Warning" hex="#FBD164" />
          </Col>
          <Col lg={2}>
            <ColorCard title="Danger" hex="#F4967B" />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <CardSimple title="Primary Pallete">
              <ColorPallete grade="Lighter" hex="#F9D7F2" whiteLabel={false} />
              <ColorPallete grade="Light" hex="#F3B2EB" whiteLabel={false} />
              <ColorPallete grade="Primary" hex="#DB83D7" whiteLabel={true} />
              <ColorPallete grade="Heavy" hex="#B35BB7" whiteLabel={true} />
              <ColorPallete grade="Heavier" hex="#7D2D88" whiteLabel={true} />
              <ColorPallete grade="Dark" hex="#642074" whiteLabel={true} />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Secondary Pallete">
              <ColorPallete grade="Lighter" hex="#E2EEFA" whiteLabel={false} />
              <ColorPallete grade="Light" hex="#C7DDF6" whiteLabel={false} />
              <ColorPallete grade="Secondary" hex="#A3C0E6" whiteLabel={true} />
              <ColorPallete grade="Heavy" hex="#82A0CD" whiteLabel={true} />
              <ColorPallete grade="Heavier" hex="#5977AC" whiteLabel={true} />
              <ColorPallete grade="Dark" hex="#415B93" whiteLabel={true} />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Info Pallete">
              <ColorPallete grade="Lighter" hex="#C8FBEC" whiteLabel={false} />
              <ColorPallete grade="Light" hex="#94F7E2" whiteLabel={false} />
              <ColorPallete grade="Info" hex="#5CE7D6" whiteLabel={true} />
              <ColorPallete grade="Heavy" hex="#33CFC9" whiteLabel={true} />
              <ColorPallete grade="Heavier" hex="#00A7AF" whiteLabel={true} />
              <ColorPallete grade="Dark" hex="#008296" whiteLabel={true} />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Success Color">
              <ColorPallete grade="Lighter" hex="#D0F9CC" whiteLabel={false} />
              <ColorPallete grade="Light" hex="#9CF39E" whiteLabel={false} />
              <ColorPallete grade="Success" hex="#66DC74" whiteLabel={true} />
              <ColorPallete grade="Heavy" hex="#3DBA58" whiteLabel={true} />
              <ColorPallete grade="Heavier" hex="#0F8C36" whiteLabel={true} />
              <ColorPallete grade="Dark" hex="#0A7837" whiteLabel={true} />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Warning Color">
              <ColorPallete grade="Lighter" hex="#FEF3CB" whiteLabel={false} />
              <ColorPallete grade="Light" hex="#FDE598" whiteLabel={false} />
              <ColorPallete grade="Warning" hex="#FBD164" whiteLabel={true} />
              <ColorPallete grade="Heavy" hex="#F8BE3E" whiteLabel={true} />
              <ColorPallete grade="Heavier" hex="#F49F00" whiteLabel={true} />
              <ColorPallete grade="Dark" hex="#D18100" whiteLabel={true} />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Danger Color">
              <ColorPallete grade="Lighter" hex="#FDE3D3" whiteLabel={false} />
              <ColorPallete grade="Light" hex="#FBC2A8" whiteLabel={false} />
              <ColorPallete grade="Danger" hex="#F4967B" whiteLabel={true} />
              <ColorPallete grade="Heavy" hex="#EA6D59" whiteLabel={true} />
              <ColorPallete grade="Heavier" hex="#DD3127" whiteLabel={true} />
              <ColorPallete grade="Dark" hex="#BE1C21" whiteLabel={true} />
            </CardSimple>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
