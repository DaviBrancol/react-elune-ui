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
    title: 'Style Guide',
    icon: 'fa fa-fw fa-th-large',
    children: [
      {
        title: 'Grid System',
        path: '/style/grid'
      },
      {
        title: 'Color Pallete',
        path: '/style/colors'
      },
      {
        title: 'Typography',
        path: '/style/typography'
      },
      {
        title: 'Icons',
        path: '/style/icons'
      },
      {
        title: 'Shapes',
        path: '/style/shapes'
      }
    ]
  },

  {
    title: 'Components',
    icon: 'fa fa-fw fa-folder',
    children: [
      {
        title: 'Cards',
        children: [
          {
            title: 'Simple Card',
            path: '/components/cards/simple'
          }
        ]
      },
      {
        title: 'Breadcrumb',
        path: '/components/breadcrumbs'
      },
      {
        title: 'Progress',
        path: '/components/progress'
      },
      {
        title: 'Buttons',
        path: '/components/buttons'
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
