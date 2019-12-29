import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { EUIColorType } from '../../interfaces'

export const WidgetTeam: FunctionComponent<any> = ({ members = [] }) => {
  return (
    <div className="eln-widget-team">
      {members.map(m => (
        <div>
          <img src={m.member_photo} alt="Team Member" />
          <p className="eln-widget-team-name">{m.name}</p>
          <p className="eln-widget-team-job">{m.job}</p>
        </div>
      ))}
    </div>
  )
}
