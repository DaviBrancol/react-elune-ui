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
    title: 'Components',
    icon: 'fa fa-fw fa-folder',
    children: [
      {
        title: 'Breadcrumb',
        path: '/components/breadcrumbs'
      }
    ]
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
      },
      {
        title: 'Dashboard'
      },
      {
        title: 'Dashboard'
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
