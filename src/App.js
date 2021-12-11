import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import { ChatApp } from './components/chat/components/ChatApp'
import { Homepage } from './pages/Homepage'
import { Menu } from './components/Menu'
import { Chat } from './pages/Chat'

function App () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/chat' element={<Chat />} exact />
          <Route path='/chat/admin' element={<ChatApp userName='admin' />} exact />
          <Route path='/chat/user' element={<ChatApp userName='user' />} exact />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
