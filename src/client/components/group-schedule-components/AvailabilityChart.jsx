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

const yLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const sampleDataset = [
  { category: 'Adonis', start: 1, end: 5, duration: 4 },
  { category: 'Tyler', start: 3, end: 8, duration: 5 },
];

export default function AvailabilityChart() {
  return (
    <BarChart
      dataset={sampleDataset}
      height={420}
      series={[

        { dataKey: 'start', stack: 'rangeStack', color: 'transparent', label: 'Adonis', id: 'adonisId' }, // transparent start segment
        { dataKey: 'duration', stack: 'rangeStack', color: 'blue', label: 'Tyler', id: 'tylerId' }, // visible duration segment
      ]}
      // date is the label, data is the ticks on the bottom
      xAxis={[{ label: 'date', data: xLabels }]}
      yAxis={[{ label: 'available times', data: yLabels, width: 60 }]}
    />
  );
}
