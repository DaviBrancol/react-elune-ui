import React, { FunctionComponent } from 'react'
import { ITextHeader } from '../interfaces'

export const TextHeader: FunctionComponent<ITextHeader> = ({ title }) => {
  return <h4 className="eln-text-header">{title}</h4>
}
