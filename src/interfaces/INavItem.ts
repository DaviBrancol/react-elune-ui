export default interface INavItem {
  layer: number
  index: number
  title: string
  icon?: string
  path?: string
  submenu?: Array<INavItem>
}
