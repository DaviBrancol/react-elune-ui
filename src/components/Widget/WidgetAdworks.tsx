import React, { FunctionComponent } from 'react'
import { EUIColorType as Colors } from '../../interfaces'

const WidgetTableData = ({ value, label }) => {
  return (
    <td>
      <p className="eln-widget-adworks-label">{label}</p>
      <p>{value}</p>
    </td>
  )
}

export const WidgetAdworks: FunctionComponent<any> = ({ adworks = [] }) => {
  return (
    <table className="eln-widget-adworks">
      <tbody>
        {adworks.map(a => (
          <tr>
            <td>
              <i
                className={a.icon}
                style={{ backgroundColor: a.iconBackground }}
              />
            </td>
            <td>
              <p className="eln-widget-adworks-label">Source</p>
              <p>{a.source}</p>
            </td>
            <WidgetTableData value={a.spent} label="Spent" />
            <WidgetTableData value={a.prospects} label="Prospects" />
            <WidgetTableData value={a.leads} label="Leads" />
            <WidgetTableData value={a.sellings} label="Sellings" />
          </tr>
        ))}
      </tbody>
    </table>
  )
}
