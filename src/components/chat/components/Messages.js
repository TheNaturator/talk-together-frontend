import React from 'react'

import { Message } from './Message'

export const Messages = ({ messages }) => {
  return (
    <div className='messages' id='messageList'>
      {messages.map((message, index) => {
        return (
          <Message
            key={`message-${index}`}
            username={message.username}
            message={message.message}
            fromMe={message.fromMe}
          />
        )
      })}
    </div>
  )
}
