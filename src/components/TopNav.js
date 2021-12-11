import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const TopNav = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
            Talk Together
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
