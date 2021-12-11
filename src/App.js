import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import { Main } from './components/Main'

function App () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/chat/admin' element={<Main userName='admin' />} />
          <Route path='/chat/user' element={<Main userName='user' />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
