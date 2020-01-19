import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { IProgressBar, EUIColorType } from '../interfaces'

export const Table: FunctionComponent<any> = ({ children }) => {
  return (
    <table className="eln-table" cellSpacing={0}>
      {children}
    </table>
  )
}
