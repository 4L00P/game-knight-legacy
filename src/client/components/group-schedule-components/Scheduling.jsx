import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import AddAvailability from './AddAvailability';
import AvailabilityChart from './AvailabilityChart';


export default function Scheduling() {
  const Container = styled(Paper)(() => ({
    display: 'flex', // put them side by side
    flexDirection: 'column', // change to 'column' if you want them stacked
    alignItems: 'center',
    padding: '5px',
    // gap: theme.spacing(2),
    backgroundColor: '#8de3fdff',
    borderRadius: '5px',
    width: 'fit-content',
    margin: '2rem auto',
  }));

  return (
    <Container>

      <AddAvailability />

      <AvailabilityChart />
    </Container>
  );
}
