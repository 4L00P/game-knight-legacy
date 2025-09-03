const WebSocket = require('ws')
const server = new WebSocket.Server({port: 9000})

server.on('connection', socket => {
  socket.on('message', message => {
    console.log('message in socket', message)
    socket.send(`${message}`)
  })
})

