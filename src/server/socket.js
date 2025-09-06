const { Server } = require("socket.io");
const { io } = require('./index');

io.on('connection', socket => {

  // CONNNECTION LOGIC
  // console.log(socket)
  console.log(`User ${socket.id} is connected`);
  socket.join('allChat');
  socket.to('allChat').emit('joinedNotif', `${socket.id.substring(0, 5)} has joined `)


  // MESSAGE HANDLING
  socket.on('message', data => {
    console.log(data);
    io.to('allChat').emit('message', `${socket.id.substring(0, 5)}: ${data}`);
  });
  
  // // 
  // socket.on('joinedRoom', data => {
  //   io.to(`${data}`).emit('joinNotif', `${socket.id.substring(0, 5)} has joined ${data}`)
  // });

  // ROLL HANDLING
  socket.on('roll', (rollData) => {

  });
});
