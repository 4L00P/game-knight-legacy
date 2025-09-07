/* eslint-disable linebreak-style */
import React, { useState, useEffect, useRef } from "react";
import { Paper, TextField, Box } from "@mui/material";
import axios from "axios";

import { styled, alpha } from "@mui/material/styles";

import { outlinedInputClasses } from "@mui/material/OutlinedInput";

import Message from "./Message.jsx";

// ------------[MUI THEME]--------------
const Container = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "right",
  gap: theme.spacing(2),
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  padding: theme.spacing(6),
  borderRadius: 10,
  width: "25rem",
  height: "30rem",
  margin: "5rem auto",
}));

// test data
const testMessages = [
  {
    username: "User1",
    text: "Hello?",
  },
  {
    username: "User2",
    text: "Hi.",
  },
  {
    username: "User1",
    text: "Bad",
  },
];

function Chat() {
  // --------------[STATES]---------------
  const [messages, setMessages] = useState([...testMessages]);
  const [message, setMessage] = useState("");
  const socketRef = useRef(null);
  useEffect(() => {
    let isMounted = true; // flag if component is mounted (prevents changes while in other pages)
    axios
      .get("/auth/user")
      .then(({ data }) => {
        if (data && isMounted) {
          console.log("User is logged in ", data);
          socketRef.current = window.io();

          // socket is live! Tell server which user this is, and add listeners
          socketRef.current.emit("userInfo", {
            name: data.name,
            userId: data._id,
          });
          socketRef.current.on("message", (message) => {
            if (Array.isArray(message)) {
              setMessages([...messages, ...message]);
            } else {
              setMessages([...messages, message]);
            }
          });
          socketRef.current.on("joinedNotif", (note) => {
            console.log(note);
          });
        }
      })
      .catch((err) => {
        console.error("User is not logged in", err);
      });

    return () => {
      isMounted = false;
      if (socketRef.current) {
        socketRef.current.off("message");
        socketRef.current.off("joinedNotif");
        socketRef.current.disconnect();
      }
    };
  }, []);

  // -------------[HANDLERS]--------------

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const sendMessage = () => {
    // update state with new message
    if (socketRef.current && message.trim()) {
      socketRef.current.emit("message", message);
      setMessage("");
    }
    // how to use value with the socket, where does it need to go?
    // trigger a socket.emit with message and user information
  };

  // ---------------[HTML]----------------
  return (
    <Container elevation={6}>
      <Box>
        {messages.map(({ text, username }) => (
          <Message text={text} username={username} />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          width: 300,
          maxWidth: "100%",
        }}
      >
        <TextField
          id="fullWidth"
          label="Send a message..."
          onChange={handleChange}
          onKeyUp={({ key }) => {
            if (key === "Enter") {
              // console.log("enter key pressed");
              sendMessage();
            }
          }}
        />
      </Box>
    </Container>
  );
}

export default Chat;
