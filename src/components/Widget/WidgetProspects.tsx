import React, { FunctionComponent } from 'react'
import { Row, Table, Button, Label } from '../'
import { EUIColorType as Colors } from '../../interfaces'

export const WidgetProspects: FunctionComponent<any> = ({ prospects = [] }) => {
  function getColorFor(status) {
    switch (status) {
      case 'Prospect':
        return Colors.primary
      case 'Lead':
        return Colors.warning
      case 'Client':
        return Colors.success
      case 'Refund':
        return Colors.danger
    }
  }

  return (
    <Table>
      <thead>
        <th>Name</th>
        <th>Cellphone</th>
        <th>Email</th>
        <th>Status</th>
        <th>Actions</th>
      </thead>
      <tbody>
        {prospects.map(p => (
          <tr>
            <td>{p.name}</td>
            <td>{p.cellphone}</td>
            <td>{p.email}</td>
            <td>
              <Row>
                {p.status.map(s => (
                  <Label
                    title={s}
                    color={getColorFor(s)}
                    style={{ marginLeft: '15px' }}
                  />
                ))}
              </Row>
            </td>
            <td>
              <Button
                onClick={() => {}}
                icon="fa fa-pencil-alt"
                color={Colors.secondaryHeavy}
                size="small"
                style={{ marginRight: '15px' }}
              />
              <Button
                onClick={() => {}}
                icon="fa fa-times"
                color={Colors.dangerHeavy}
                size="small"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
