import { IChart, EUIColorType as Colors } from '../../interfaces'

export const salesDashboard: IChart = {
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'June', 'July'],
    datasets: [
      {
        label: 'Prospects',
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        fill: false,
        data: [120, 180, 200, 260, 300, 400]
      },
      {
        label: 'Leads',
        backgroundColor: Colors.warning,
        borderColor: Colors.warning,
        fill: false,
        data: [80, 110, 130, 180, 200, 270]
      },
      {
        label: 'Sellings',
        backgroundColor: Colors.success,
        borderColor: Colors.success,
        fill: false,
        data: [42, 62, 72, 102, 120, 190]
      },
      {
        label: 'Prospects',
        backgroundColor: Colors.danger,
        borderColor: Colors.danger,
        fill: false,
        data: [24, 19, 29, 32, 38, 22]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: 'rgba(0, 0, 0, 0.2)'
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0.04)'
          },
          ticks: {
            fontColor: 'rgba(0, 0, 0, 0.2)',
            maxTicksLimit: 5
          }
        }
      ]
    }
  },
  height: 165
}

export const teamActivity = [
  {
    member_photo: '/main_photo.jpg',
    activity: 'Kayle added 10 prospects to the list',
    time: '5 hours ago'
  },
  {
    member_photo: '/main_photo.jpg',
    activity: 'Kayle added 10 prospects to the list',
    time: '5 hours ago'
  },
  {
    member_photo: '/main_photo.jpg',
    activity: 'Kayle added 10 prospects to the list',
    time: '5 hours ago'
  },
  {
    member_photo: '/main_photo.jpg',
    activity: 'Kayle added 10 prospects to the list',
    time: '5 hours ago'
  },
  {
    member_photo: '/main_photo.jpg',
    activity: 'Kayle added 10 prospects to the list',
    time: '5 hours ago'
  }
]

export const teamMembers = [
  {
    member_photo: '/team_0.png',
    name: 'Henrick',
    job: 'Prospect Hunter'
  },
  {
    member_photo: '/team_1.png',
    name: 'Emily',
    job: 'Leads Advisor'
  },
  {
    member_photo: '/team_2.png',
    name: 'David',
    job: 'Sales Closer'
  },
  {
    member_photo: '/team_3.png',
    name: 'Carl',
    job: 'Sales Closer'
  },
  {
    member_photo: '/team_4.png',
    name: 'John',
    job: 'Customer Success'
  },
  {
    member_photo: '/team_5.png',
    name: 'Kayle',
    job: 'Refunds Dealer'
  }
]

export const adworks = [
  {
    icon: 'fab fa-facebook-f',
    iconBackground: '#5C6BC0',
    source: 'Facebook',
    spent: '$100',
    prospects: 120,
    leads: 30,
    sellings: 10
  },
  {
    icon: 'fab fa-instagram',
    iconBackground: '#8D6E63',
    source: 'Instagram',
    spent: '$579',
    prospects: 100,
    leads: 40,
    sellings: 15
  },
  {
    icon: 'fab fa-youtube',
    iconBackground: '#D50000',
    source: 'Youtube',
    spent: '$579',
    prospects: 80,
    leads: 10,
    sellings: 5
  },
  {
    icon: 'fa fa-phone',
    iconBackground: Colors.primary,
    source: 'Outbound',
    spent: '$579',
    prospects: 100,
    leads: 40,
    sellings: 10
  },
  {
    icon: 'fa fa-phone',
    iconBackground: Colors.primary,
    source: 'Outbound',
    spent: '$579',
    prospects: 100,
    leads: 40,
    sellings: 10
  }
]
