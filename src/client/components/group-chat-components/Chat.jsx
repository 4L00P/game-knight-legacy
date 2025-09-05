/* eslint-disable linebreak-style */
import React from 'react';
import { useState } from 'react';

import {
  Paper,
  TextField,
  Box,
} from '@mui/material';

import {
  styled,
  alpha,
} from '@mui/material/styles';

import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import Message from './Message.jsx';

// ------------[MUI THEME]--------------
const Container = styled(Paper)(({ theme }) => (
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'right',
    gap: theme.spacing(2),
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    padding: theme.spacing(6),
    borderRadius: 10,
    width: '25rem',
    height: '30rem',
    margin: '5rem auto',
  }
));

// test data
const testMessages = [
  'hi guys!',
  'does this chat work?',
  "let's play DnD!",
];

function Chat() {
  // --------------[STATES]---------------
  const [messages, setMessages] = useState([...testMessages]);
  const [message, setMessage] = useState('');

  // --------------[SOCKET]---------------
  socket.on('message', message => {
    setMessages(messages.concat(message));
  });

  socket.on('joinedNotif', note => {
    console.log(note);
  });

  // -------------[HANDLERS]--------------

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const sendMessage = () => {
    // update state with new message
    setMessages([...messages, message]);
    setMessage('');

    // how to use value with the socket, where does it need to go?
    // trigger a socket.emit with message and user information
  };

  // ---------------[HTML]----------------
  return (
    <Container elevation={6}>
      <Box>
        {
          messages.map((chat) => <Message message={chat} />)
        }
      </Box>
      <Box sx={
        {
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          width: 300,
          maxWidth: '100%',

        }
      }
      >
        <TextField
          id="fullWidth"
          label="Send a message..."
          onChange={handleChange}
          onKeyUp={({ key }) => {
            if (key === 'Enter') {
              sendMessage();
            }
          }}
        />
      </Box>
    </Container>
  );
}

export default Chat;
