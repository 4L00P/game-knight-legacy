import React from 'react';

// MUI COMPONENTS
import { BarChart } from '@mui/x-charts/BarChart';
import { Typography } from '@mui/material';

const dataset1 = [
  {
    user: {
      _id: '77hui',
      name: 'Tyler',
      googleId: '66754',
      email: 'tyler@helpdesk.com',
    },
    date: '09 02 2025',
    timeStart: '05:00',
    timeEnd: '10:00',
  },
];

const dataset2 = [
  {
    name: 'Me',
    date: '09 02 2025',
    timeStart: 7,
    timeEnd: 18,
    duration: 11,
  },
  {
    name: 'Friend',
    date: '09 03 2025',
    timeStart: 12,
    timeEnd: 20,
    duration: 8,
  },
];

// formatter to add (good for client clarity)
// function valueFormatter(value) {
//   return `${value}hours`;
// }

export default function AvailabilityChart({ day }) {
  const getAvailabilities = () => {
    axios.get('/api/availabilities')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const makeTimeNumbers = () => {

  // };

  return (
    <>
      <Typography variant="h5">{day}</Typography>
      <BarChart
        // import data into the chart
        dataset={dataset2}
        // height of the chart
        height={200}
        // set scaleType and match data to input data
        yAxis={[{ scaleType: 'band', dataKey: 'name' }]}
        // set label for x axis and maximum
        xAxis={[{ label: 'time - 24 hr clock', max: 24.00 }]}
        // represents all the bars that will show
        series={[
          // invisible start stack
          { dataKey: 'timeStart', stack: 'rangeStack', color: 'transparent' },
          // visible 'duration' stack
          { dataKey: 'duration', stack: 'rangeStack', color: 'blue' },
        ]}
        // make layout into horizontal bar chart
        layout="horizontal"
      />

    </>
  );
}
