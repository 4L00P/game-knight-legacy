import React from 'react';

// MUI COMPONENTS
import { BarChart } from '@mui/x-charts/BarChart';
import { Typography } from '@mui/material';

export default function AvailabilityChart({ day, dataset }) {
  return (
    <>
      <Typography variant="h5">{day}</Typography>
      <BarChart
        // import data into the chart
        dataset={dataset}
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
