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
