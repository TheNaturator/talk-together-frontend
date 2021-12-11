import '../styles/ChatApp.css'
import '../styles/App.css'

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
      socketObj.close()
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
      const newState = [...prevState]
      newState.push(message)
      return newState
    })
  }

  return (
    <div className='container'>
      <Messages messages={messages} />
      <ChatInput onSend={sendHandler} />
    </div>
  )
}
