import React from 'react';
import { useState } from 'react'

function Chat() {
  const [messages, setMessages] = useState([]);



  socket.on('message', message => {
    setMessages(messages.concat(message))
  });

  socket.on('joinedNotif', note =>{
    console.log(note);
  });

  return (
    <div>
      <ul>
        { messages.map((msg)=>(<div> { msg } </div>)) }
      </ul>
      <button onClick={()=>{
        socket.emit('message', 'ribbit!')
      }} >Click here to frog</button>
    </div>
);
};

export default Chat;