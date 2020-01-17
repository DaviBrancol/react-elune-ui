export interface ITextHeader {
  title: string
}

export interface IGridCol {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  style?: Object
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
  title?: string
  style?: Object
  bodyStyle?: Object
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
  primaryLight = '#F3B2EB',
  primaryHeavy = '#B35BB7',
  // Secondary
  secondary = '#A3C0E6',
  secondaryLight = '#C7DDF6',
  secondaryHeavy = '#82A0CD',
  // Info
  info = '#5CE7D6',
  infoLight = '#94F7E2',
  infoHeavy = '#33CFC9',
  // Success
  success = '#66DC74',
  successLight = '#9CF39E',
  successHeavy = '#3dBA58',
  // Warning
  warning = '#FBD164',
  warningLight = '#FDE598',
  warningHeavy = '#F8BE3E',
  // Danger
  danger = '#F4967B',
  dangerLight = '#FBC2A8',
  dangerHeavy = '#EA6D59',
  // White
  white = '#FFF',
  light = '#DDD',
  dark = '#222',
  black = '#000'
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

export interface IAvatar {
  name?: string
  color?: EUIColorType
  image?: string
  className?: string
  style?: string
  size?: 'default' | 'extralarge' | 'large' | 'small' | 'extrasmall'
}

export interface IButton {
  color?: EUIColorType
  className?: string
  style?: Object
  title?: string
  icon?: string
  onClick: () => void
  rounded?: boolean
  border?: 'default' | 'circular' | 'square'
  size?: 'default' | 'small' | 'large'
  labelColor?: 'light' | 'dark'
}

export interface IChart {
  data: Object
  options?: Object
  width?: number
  height?: number
}
