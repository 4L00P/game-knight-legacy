const { Server } = require('socket.io');
const { io } = require('./index');

// importing dice helper
const { rollDice } = require('./helpers/dice-rolling-helpers');

io.on('connection', socket => {
  // CONNNECTION LOGIC
  console.log(`User ${socket.id} is connected`);
  socket.join('allChat');
  socket.to('allChat').emit('joinedNotif', `${socket.id.substring(0, 5)} has joined `)

  socket.on('userInfo', ({ name, userId }) => {
    console.log(`User info received: ${name} with ID: ${userId}`);
    socket.username = name;
    socket.userId = userId;
  });


  // MESSAGE HANDLING
  socket.on('message', data => {
    io.to('allChat').emit('message', { username: socket.username, text: data });
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
      console.log('sending roll', rolled);

      io.to('allChat').emit('message', {username: socket.username, text: `rolled ${rolled[0]} for ${rolled[1]}!`});
      
      allRollMessages.push(`${socket.id.substring(0, 5)} rolled ${rolled[0]} for ${rolled[1]}!`);

    });
    io.to('allChat').emit('message', allRollMessages);
  });
});
