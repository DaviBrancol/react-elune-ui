export interface ITextHeader {
  title: string
}

export interface IGridCol {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export interface INavItem {
  layer: number
  index: number
  title: string
  icon?: string
  path?: string
  submenu?: Array<INavItem>
}

export interface ICardSimple {
  title: string
  style?: Object
}

export interface IColorCard {
  title: string
  hex: string
}

export interface IPageHeader {
  title: string
  list?: Array<string>
}

export interface IBreadcrumb {
  list: Array<string>
}

{
  /* Color Pallete */
}

export interface IColorPallete {
  grade: string
  hex: string
  whiteLabel: boolean
}

export interface ICardNumber {
  version: number
  title: string
  icon: string
  value: string
  gradient?: string
}

{
  /* Components */
}

export enum EUIColorType {
  primary = '#DB83D7',
  secondary = '#A3C0E6',
  info = '#5CE7D6',
  success = '#66DC74',
  warning = '#FBD164',
  danger = '#F4967B'
}

export interface IProgressBar {
  stroke?: number
  color?: EUIColorType
  className?: string
  style?: Object
  progress: number
  striped?: boolean
  position?: 'vertical' | 'horizontal'
  animated?: boolean
  completion?: boolean
}
