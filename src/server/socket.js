const { Server } = require('socket.io');
const { io } = require('./index');

// importing dice helper
const { rollDice } = require('./helpers/dice-rolling-helpers');

io.on('connection', socket => {
  // CONNNECTION LOGIC
  console.log(`User ${socket.id} is connected`);
  socket.join('allChat');
  socket.to('allChat').emit('joinedNotif', `${socket.id.substring(0, 5)} has joined `)


  // MESSAGE HANDLING
  socket.on('message', data => {
    io.to('allChat').emit('message', `${socket.id.substring(0, 5)}: ${data}`);
  });

  // socket.on('joinedRoom', data => {
  //   io.to(`${data}`).emit('joinNotif', `${socket.id.substring(0, 5)} has joined ${data}`)
  // });

  // ROLL HANDLING
  socket.on('roll', (rolls) => {
    console.log(rolls);

    const allRollMessages = [];

    rolls.forEach((roll) => {
      const rolled = rollDice(roll);
      
      allRollMessages.push(`${socket.id.substring(0, 5)} rolled ${rolled[0]} for ${rolled[1]}!`);

    });
    io.to('allChat').emit('message', allRollMessages);
  });
});
