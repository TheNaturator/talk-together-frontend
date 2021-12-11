import React from 'react'

export const Message = ({ fromMe, username, message }) => {
  const isFromMe = fromMe ? 'from-me' : ''

  return (
    <div className={`message ${isFromMe}`}>
      <div className='username'>
        {username}
      </div>
      <div className='message-body'>
        {message}
      </div>
    </div>
  )
}
