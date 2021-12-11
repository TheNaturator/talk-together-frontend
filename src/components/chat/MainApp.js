import React from 'react'
import { ChatApp } from './components/ChatApp'
import './styles/App.css'
import './styles/Login.css'

export const App = ({ userName }) => {
  return (
    <ChatApp userName={userName} />
  )
}
