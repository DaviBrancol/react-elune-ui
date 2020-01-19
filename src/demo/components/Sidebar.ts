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
        title: 'Alerts',
        path: '/components/alerts'
      },
      {
        title: 'Avatars',
        path: '/components/avatars'
      },
      {
        title: 'Breadcrumb',
        path: '/components/breadcrumbs'
      },
      {
        title: 'Buttons',
        path: '/components/buttons'
      },
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
        title: 'Progress',
        path: '/components/progress'
      }
    ]
  },
  {
    title: 'Calendar',
    icon: 'fa fa-fw fa-calendar-alt',
    path: '/calendar'
  },
  {
    title: 'Charts',
    icon: 'fa fa-fw fa-chart-bar',
    path: '/charts'
  },
  {
    title: 'Forms',
    icon: 'fa fa-fw fa-edit',
    children: [
      {
        title: 'Inputs',
        path: '/forms/inputs'
      },
      {
        title: 'Basic Forms',
        path: '/forms/basic'
      },
      {
        title: 'Advanced Forms',
        path: '/forms/advanced'
      },
      {
        title: 'Validation',
        path: '/forms/validation'
      },
      {
        title: 'Wizard',
        path: '/forms/wizard'
      }
    ]
  }
]

export default menu
