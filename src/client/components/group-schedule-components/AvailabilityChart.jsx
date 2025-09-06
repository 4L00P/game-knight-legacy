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

// const yLabels = [
//   '10:00am',
//   '11:00am',
//   '12:00pm',
//   '1:00pm',
//   '2:00pm',
//   '3:00pm',
//   '4:00pm',
//   '5:00pm',
//   '6:00pm',
//   '7:00pm',
//   '8:00pm',
//   '9:00pm',
//   '10:00pm',
//   '11:00pm',
//   '12:00am',
// ];

// const yLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const sampleDataset = [
  { category: 'Adonis', start: -12, end: -24, duration: -12 },
  { category: 'Adonis', start: 0, end: -5, duration: -5 },
  // { category: 'Adonis', start: 10, end: 12, duration: 2 },
];

export default function AvailabilityChart() {
  return (
    <BarChart
      dataset={sampleDataset}
      height={420}
      series={[

        { dataKey: 'start', stack: 'rangeStack', color: 'transparent' }, // transparent start segment
        { dataKey: 'duration', stack: 'rangeStack', color: 'blue', label: 'Adonis', id: 'AdonisId' }, // visible duration segment
      ]}
      // layout="horizontal" // this makes the page crash lol
      // date is the label, data is the ticks on the bottom
      xAxis={[{ label: 'date', data: xLabels }]}
      yAxis={[{ label: 'available times', width: 60 }]}
    />
  );
}
