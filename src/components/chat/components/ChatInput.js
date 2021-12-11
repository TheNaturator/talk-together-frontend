import React, { useState } from 'react'

export const ChatInput = ({ onSend }) => {
  const [chatInput, setChatInput] = useState('')

  const submitHandler = (event) => {
    // Stop the form from refreshing the page on submit
    event.preventDefault()

    // Clear the input box
    setChatInput('')

    // Call the onSend callback with the chatInput message
    onSend(chatInput)
  }

  return (
    <form className='chat-input' onSubmit={submitHandler}>
      <input
        type='text'
        onChange={e => setChatInput(e.target.value)}
        value={chatInput}
        placeholder='Write a message...'
        required
      />
    </form>
  )
}
