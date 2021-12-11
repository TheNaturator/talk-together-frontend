import '../styles/ChatApp.css'

import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import config from '../config'

import { Messages } from './Messages'
import { ChatInput } from './ChatInput'

export const ChatApp = ({ userName }) => {
  const [messages, setMessages] = useState([])
  const [socket, setSocket] = useState({})

  useEffect(() => {
    const socketObj = io(config.api, { query: `username=${userName}` })

    socketObj.on('server:message', message => {
      addMessage(message)
    })

    setSocket(socketObj)
    return () => {
      socket.close()
    }
  }, [])

  const sendHandler = (message) => {
    const messageObject = {
      username: userName,
      message
    }

    // Emit the message to the server
    socket.emit('client:message', messageObject)

    messageObject.fromMe = true
    addMessage(messageObject)
  }

  const addMessage = (message) => {
    setMessages(prevState => {
      console.log('prevState', prevState)
      const newState = [...prevState]
      newState.push(message)
      return newState
    })
  }

  return (
    <div className='container'>
      <h3>React Chat App</h3>
      <Messages messages={messages} />
      <ChatInput onSend={sendHandler} />
    </div>
  )
}
