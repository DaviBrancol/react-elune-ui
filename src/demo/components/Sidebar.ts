interface IMenu {
  title: string
  icon?: string
  path?: string
  children?: Array<IMenu>
}

const menu: Array<IMenu> = [
  {
    title: 'Dashboard',
    icon: 'fa fa-fw fa-tachometer-alt',
    path: '/'
  },
  {
    title: 'Cards',
    icon: 'fa fa-fw fa-credit-card',
    children: [
      {
        title: 'Dashboard',
        path: '/cards/numbers'
      }
    ]
  },
  {
    title: 'Layouts',
    icon: 'fa fa-fw fa-th-large',
    children: [
      {
        title: 'Dashboard',
        children: [
          {
            title: 'Dashboard',
            path: '/cards/numbers'
          }
        ]
      }
    ]
  },
  {
    title: 'Forms',
    icon: 'fa fa-fw fa-edit',
    path: '/forms'
  }
]

export default menu
