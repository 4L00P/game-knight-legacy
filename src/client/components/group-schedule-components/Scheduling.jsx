import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddAvailability from './AddAvailability';
import AvailabilityChart from './AvailabilityChart';


export default function Scheduling() {
  const Section = styled(Paper)(({ theme }) => ({
    display: 'flex', // put them side by side
    flexDirection: 'column', // change to 'column' if you want them stacked
    alignItems: 'left',
    padding: 10,
    // gap: theme.spacing(2),
    backgroundColor: '#6fe2ebff',
    borderRadius: 10,
    // width: 'fit-content',
    margin: '1rem',
  }));

  return (
    <>
      <Section>
        <AddAvailability />
      </Section>

      <Section>
        <AvailabilityChart />
      </Section>
    </>
  );
}
