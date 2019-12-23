import React, { FunctionComponent } from 'react'
import {
  PageHeader,
  Row,
  Col,
  CardSimple,
  ColorPallete
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
          <Col lg={4}>
            <CardSimple title="Primary Color">
              <ColorPallete grade="300" hex="#DB83D7" whiteLabel={true} />
              <ColorPallete grade="100" hex="#F9D7F2" whiteLabel={false} />
              <ColorPallete grade="200" hex="#F3B2EB" whiteLabel={false} />
              <ColorPallete grade="300" hex="#DB83D7" whiteLabel={true} />
              <ColorPallete grade="400" hex="#B35BB7" whiteLabel={true} />
              <ColorPallete grade="500" hex="#7D2D88" whiteLabel={true} />
              <ColorPallete grade="600" hex="#642074" whiteLabel={true} />
              <ColorPallete grade="700" hex="#4C1661" whiteLabel={true} />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Secondary Color">
              <ColorPallete grade="300" hex="#A3C0E6" whiteLabel={true} />
              <ColorPallete grade="100" hex="#E2EEFA" whiteLabel={false} />
              <ColorPallete grade="200" hex="#C7DDF6" whiteLabel={false} />
              <ColorPallete grade="300" hex="#A3C0E6" whiteLabel={true} />
              <ColorPallete grade="400" hex="#82A0CD" whiteLabel={true} />
              <ColorPallete grade="500" hex="#5977AC" whiteLabel={true} />
              <ColorPallete grade="600" hex="#415B93" whiteLabel={true} />
              <ColorPallete grade="700" hex="#2C437B" whiteLabel={true} />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Info Color">
              <ColorPallete grade="300" hex="#5CE7D6" whiteLabel={true} />
              <ColorPallete grade="100" hex="#C8FBEC" whiteLabel={false} />
              <ColorPallete grade="200" hex="#94F7E2" whiteLabel={false} />
              <ColorPallete grade="300" hex="#5CE7D6" whiteLabel={true} />
              <ColorPallete grade="400" hex="#33CFC9" whiteLabel={true} />
              <ColorPallete grade="500" hex="#00A7AF" whiteLabel={true} />
              <ColorPallete grade="600" hex="#008296" whiteLabel={true} />
              <ColorPallete grade="700" hex="#00637D" whiteLabel={true} />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Success Color">
              <ColorPallete grade="300" hex="#66DC74" whiteLabel={true} />
              <ColorPallete grade="100" hex="#D0F9CC" whiteLabel={false} />
              <ColorPallete grade="200" hex="#9CF39E" whiteLabel={false} />
              <ColorPallete grade="300" hex="#66DC74" whiteLabel={true} />
              <ColorPallete grade="400" hex="#3DBA58" whiteLabel={true} />
              <ColorPallete grade="500" hex="#0F8C36" whiteLabel={true} />
              <ColorPallete grade="600" hex="#0A7837" whiteLabel={true} />
              <ColorPallete grade="700" hex="#076436" whiteLabel={true} />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Warning Color">
              <ColorPallete grade="300" hex="#FBD164" whiteLabel={true} />
              <ColorPallete grade="100" hex="#FEF3CB" whiteLabel={false} />
              <ColorPallete grade="200" hex="#FDE598" whiteLabel={false} />
              <ColorPallete grade="300" hex="#FBD164" whiteLabel={true} />
              <ColorPallete grade="400" hex="#F8BE3E" whiteLabel={true} />
              <ColorPallete grade="500" hex="#F49F00" whiteLabel={true} />
              <ColorPallete grade="600" hex="#D18100" whiteLabel={true} />
              <ColorPallete grade="700" hex="#AF6500" whiteLabel={true} />
            </CardSimple>
          </Col>
          <Col lg={4}>
            <CardSimple title="Danger Color">
              <ColorPallete grade="300" hex="#F4967B" whiteLabel={true} />
              <ColorPallete grade="100" hex="#FDE3D3" whiteLabel={false} />
              <ColorPallete grade="200" hex="#FBC2A8" whiteLabel={false} />
              <ColorPallete grade="300" hex="#F4967B" whiteLabel={true} />
              <ColorPallete grade="400" hex="#EA6D59" whiteLabel={true} />
              <ColorPallete grade="500" hex="#DD3127" whiteLabel={true} />
              <ColorPallete grade="600" hex="#BE1C21" whiteLabel={true} />
              <ColorPallete grade="700" hex="#9F1323" whiteLabel={true} />
            </CardSimple>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
