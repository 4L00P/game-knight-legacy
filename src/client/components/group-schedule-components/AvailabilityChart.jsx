import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { sampleAvailabilities } from './sample-data';

// EXAMPLE 1

// export default function AvailabilityChart() {
//   return (
//     <BarChart
//       dataset={sampleAvailabilities}
//       xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
//       series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
//       height={420}
//     />
//   );
// }

// EXAMPLE 2
const pData = [2400, 1398, -9800, 3908, 4800, -3800, 4300];
// const uData = [4000, -3000, -2000, 2780, -1890, 2390, 3490];

const xLabels = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export default function AvailabilityChart() {
  return (
    <BarChart
      height={300}
      series={[
        {
          data: pData, label: 'pv', id: 'pvId',
        },

      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 60 }]}
    />
  );
}
