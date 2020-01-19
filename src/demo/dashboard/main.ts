import { IChart, EUIColorType as Colors } from '../../interfaces'

export const salesDashboard: IChart = {
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'June', 'July'],
    datasets: [
      {
        label: 'Prospects',
        backgroundColor: Colors.primaryHeavy,
        borderColor: Colors.primaryHeavy,
        fill: false,
        data: [120, 180, 200, 260, 300, 400]
      },
      {
        label: 'Leads',
        backgroundColor: Colors.warningHeavy,
        borderColor: Colors.warningHeavy,
        fill: false,
        data: [80, 110, 130, 180, 200, 270]
      },
      {
        label: 'Sellings',
        backgroundColor: Colors.successHeavy,
        borderColor: Colors.successHeavy,
        fill: false,
        data: [42, 62, 72, 102, 120, 190]
      },
      {
        label: 'Refunds',
        backgroundColor: Colors.dangerHeavy,
        borderColor: Colors.dangerHeavy,
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

export const refundsDashboard: IChart = {
  data: {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        label: 'Customers',
        backgroundColor: Colors.successHeavy,
        borderColor: Colors.successHeavy,
        fill: false,
        data: [42, 62, 72, 142, 120, 240, 150, 130, 180, 220, 150, 180]
      },
      {
        label: 'Refunds',
        backgroundColor: Colors.dangerHeavy,
        borderColor: Colors.dangerHeavy,
        fill: false,
        data: [24, 19, 29, 42, 38, 22, 40, 30, 15, 40, 30, 20, 25]
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          barPercentage: 0.6,
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: 'rgba(0, 0, 0, 0.6)'
          },
          stacked: true
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          },
          stacked: true
        }
      ]
    }
  },
  height: 84
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
    spent: '$120',
    prospects: 120,
    leads: 30,
    sellings: 10
  },
  {
    icon: 'fab fa-youtube',
    iconBackground: 'red',
    source: 'Youtube',
    spent: '$80',
    prospects: 100,
    leads: 40,
    sellings: 15
  },
  {
    icon: 'fa fa-phone',
    iconBackground: Colors.primary,
    source: 'Calling',
    spent: '$30',
    prospects: 100,
    leads: 40,
    sellings: 10
  }
]

export const prospects = [
  {
    name: 'Carl',
    cellphone: '(203) 203-4934',
    email: 'carl@email.com',
    status: ['Prospect']
  },
  {
    name: 'Jessica',
    cellphone: '(680) 914-9593',
    email: 'jessica@email.com',
    status: ['Prospect']
  },
  {
    name: 'Michael',
    cellphone: '(700) 192-1495',
    email: 'michael@email.com',
    status: ['Lead']
  },
  {
    name: 'Brenda',
    cellphone: '(888) 194-1923',
    email: 'brenda@email.com',
    status: ['Lead']
  },
  {
    name: 'Lindsey',
    cellphone: '(555) 542-3456',
    email: 'lindsey@email.com',
    status: ['Client']
  },
  {
    name: 'Axel',
    cellphone: '(123) 123-4567',
    email: 'axel@email.com',
    status: ['Client', 'Refund']
  }
]
