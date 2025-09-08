import React from 'react';

import {
  Paper,
} from '@mui/material';

import {
  styled,
  alpha,
} from '@mui/material/styles';

// ------------[MUI THEME]--------------
const Container = styled(Paper)(({ theme }) => (
  {
    alignItems: 'right',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    padding: theme.spacing(1),
    width: '8rem',
    margin: '1rem auto',
  }
));

function Message(props) {
  // --------------[PROPS]---------------
  const { username, text } = props;
  // --------------[RENDER]---------------
  return (
    <Container elevation={3}>
      { `${username} : ${text}` }
    </Container>
  );
}

export default Message;
