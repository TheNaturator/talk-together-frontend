import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChatApp } from './components/chat/components/ChatApp'
import { Homepage } from './pages/Homepage'
import { Chat } from './pages/Chat'
import { PreChat } from './pages/PreChat'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/prechat' element={<PreChat />} exact />
        <Route path='/chat/:nickname' element={<Chat />} exact />
        <Route path='/adminchat' element={<ChatApp userName='Maria' />} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
