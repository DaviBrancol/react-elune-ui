import { IChart, EUIColorType as Colors } from '../../interfaces'

export const barDemoChart: IChart = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset-1',
        backgroundColor: Colors.primary,
        data: [10, 30, 50, 30, 20, 60]
      },
      {
        label: 'Dataset-2',
        backgroundColor: Colors.secondary,
        data: [2, 20, 40, 60, 40, 10]
      }
    ]
  },
  options: {
    height: 200
  },
  height: 80
}
