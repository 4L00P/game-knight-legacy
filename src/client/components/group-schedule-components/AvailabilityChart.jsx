import React from 'react';

// MUI
import { BarChart } from '@mui/x-charts/BarChart';
import { Typography } from '@mui/material';
import { sampleAvailabilities } from './sample-data';

// EXAMPLE 2

// const xLabels = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];

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


// ________________________________________________________________

const dataset = [
  {
    Adonis: 16.50,
    Tyler: 18.50,
    day: 'Sun',
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

  return (
    <>
      <Typography variant="h5">{day}</Typography>
      <BarChart
        // import data into the chart
        dataset={dataset}
        // height of the chart
        height={200}
        // set scaleType and match data to input data
        yAxis={[{ scaleType: 'band', dataKey: 'day' }]}
        // set label for x axis and maximum
        xAxis={[{ label: 'time - 24 hr clock', max: 24.00 }]}
        // represents all the bars that will show
        series={[
          { dataKey: 'Adonis', label: 'Adonis Availability' },
          { dataKey: 'Tyler', label: 'Tyler Availability' },
        ]}
        // make layout into horizontal bar chart
        layout="horizontal"
        borderRadius={7}
      />

    </>
  );
}
