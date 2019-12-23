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

export interface IPageHeader {
  title: string
  list?: Array<string>
}

export interface IBreadcrumb {
  list: Array<string>
}
