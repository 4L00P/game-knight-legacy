import React from "react";

function Chat() {
  // let everyone know that user joined
  // socket.emit('joinedRoom', 'allChat');

  socket.on('message', message => {
    console.log(message);
  });

  socket.on('joinedNotif', note =>{
    console.log(note);
  });

  return (
    <div>
      messages here
      <button onClick={()=>{
        socket.emit('message', 'ribbit!')
      }} >Click here to frog</button>
    </div>
);
};

export default Chat;