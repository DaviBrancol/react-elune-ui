import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { EUIColorType } from '../../interfaces'

export const WidgetTeamActivity: FunctionComponent<any> = ({
  activities = []
}) => {
  return (
    <div className="eln-widget-team-activity">
      {activities.map(a => (
        <div>
          <div>
            <img src={a.member_photo} alt="Team Member" />
            <p>{a.activity}</p>
          </div>
          <p>{a.time}</p>
        </div>
      ))}
    </div>
  )
}
