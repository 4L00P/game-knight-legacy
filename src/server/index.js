const path = require('path');
require('./database');
const dotenv = require('dotenv');

const { Server } = require("socket.io");

// Loads the .env information into process.env (Do this before requiring app)
// This is how we'll hide our .env info
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const { app } = require('./app');

// Set PUBLIC_IP_ADDRESS in .env file
const { DOMAIN_NAME } = process.env;

// Set custom PORT in .env file if different from 8000
const PORT = process.env.PORT || 8000;

const expressServer = app.listen(PORT, () => {
  console.log(`Server listening at http://${DOMAIN_NAME}:${PORT}`);
  // Only show localhost log for a DOMAIN_NAME of 127.0.0.1
  if (DOMAIN_NAME === '127.0.0.1') {
    console.log(`Server listening at http://localhost:${PORT}`);
  }
});

const io = new Server(expressServer, {
  cors: {
    origin: `http://localhost:${PORT}`,
  },
});

io.on('connection', socket => {
  console.log(`User ${socket.id} is connected`);
  socket.join('allChat');
  socket.to('allChat').emit('joinedNotif', `${socket.id.substring(0, 5)} has joined `)

  socket.on('message', data => {
    console.log(data);
    io.to('allChat').emit('message', `${socket.id.substring(0, 5)}: ${data}`);
  });

  socket.on('joinedRoom', data => {
    io.to(`${data}`).emit('joinNotif', `${socket.id.substring(0, 5)} has joined ${data}`)
  });
});

