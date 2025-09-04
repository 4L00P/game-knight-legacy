import React from 'react'
const socket = new WebSocket('ws://localhost:9000')

export default function Chat (props){
  const [messages, addMessage] = useState([])

  addMessage = () => {
    
  }
  socket.onmessage = ({ data }) => {
    
  };
  
  return (
    <div>
      Chat Div
      <ul>
        {messages.map((message)=> <li> { message } </li>)}
      </ul>
    </div>
  )
};