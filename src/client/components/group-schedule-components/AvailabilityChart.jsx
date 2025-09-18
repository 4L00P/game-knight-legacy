import React from 'react';

// MUI COMPONENTS
import { BarChart } from '@mui/x-charts/BarChart';
import { Typography } from '@mui/material';

const dataset2 = [
  {
    'user': '68b6303b6c1748ba13017e5d',
    'date': '09 30 2025',
    'timeStart': 9,
    'timeEnd': 20,
    'duration': 11,
    '__v': 0,
  },
];

// formatter to add (good for client clarity)
// function valueFormatter(value) {
//   return `${value}hours`;
// }

export default function AvailabilityChart({ day, dataset }) {
  return (
    <>
      <Typography variant="h5">{day}</Typography>
      <BarChart
        // import data into the chart
        dataset={dataset2}
        // height of the chart
        height={200}
        // set scaleType and match data to input data
        yAxis={[{ scaleType: 'band', dataKey: 'date' }]}
        // set label for x axis and maximum
        xAxis={[{ label: 'time - 24 hr clock', max: 24.00 }]}
        // represents all the bars that will show
        series={[
          // invisible start stack
          { dataKey: 'timeStart', stack: 'rangeStack', color: 'transparent' },
          // visible 'duration' stack
          { dataKey: 'duration', stack: 'rangeStack', color: 'blue', label: 'available hours' },
        ]}
        // make layout into horizontal bar chart
        layout="horizontal"
      />

    </>
  );
}
