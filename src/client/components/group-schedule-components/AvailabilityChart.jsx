import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { sampleAvailabilities } from './sample-data';

// EXAMPLE 2

const xLabels = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// const sampleDataset = [
//   { category: 'Adonis', start: -12, end: -23, duration: -12 },
//   { category: 'Adonis', start: 0, end: -5, duration: -5 },
//   // { category: 'Adonis', start: 10, end: 12, duration: 2 },
// ];

// export default function AvailabilityChart() {
//   return (
//     <BarChart
//       dataset={sampleDataset}
//       height={420}
//       series={[

//         { dataKey: 'start', stack: 'rangeStack', color: 'transparent' }, 
//         // transparent start segment
//         { dataKey: 'duration', stack: 'rangeStack', color: 'blue', label: 'Adonis', id: 'AdonisId' }, 
//         // visible duration segment
//       ]}
//       // layout="horizontal" // this makes the page crash lol
//       // date is the label, data is the ticks on the bottom
//       xAxis={[{ label: 'date', data: xLabels }]}
//       yAxis={[{ label: 'available times', width: 60 }]}
//     />
//   );
// }

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Feb',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'Dec',
  },
];

function valueFormatter(value) {
  return `${value}mm`;
}

export default function AvailabilityChart() {
  return (
    <BarChart
      dataset={dataset}
      height={400}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      xAxis={[{ label: 'rainfall (mm)' }]}
      series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
      layout="horizontal"
    />
  );
}
