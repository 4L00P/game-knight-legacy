import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function Friend(props) {
  // --------------[PROPS]---------------
  const { friend } = props;
  console.log(friend);

  // --------------[RENDER]---------------
  return (
    <Container elevation={3}>
      <Button>
        Add Friend
      </Button>

    </Container>
  );
}
