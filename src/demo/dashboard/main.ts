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
  height: 120
}
