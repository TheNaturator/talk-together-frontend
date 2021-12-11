import React from 'react'
import { Drawer, List, ListItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { TopNav } from './TopNav'

export const Menu = () => {
  const drawerWidth = 240

  const navigate = useNavigate()

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
      variant='permanent'
      anchor='left'
    >
      <TopNav />
      <List>
        <ListItem button onClick={() => navigate('/chat')}>
          Chat
        </ListItem>
        <ListItem button>
          debug2
        </ListItem>
        <ListItem button>
          debug3
        </ListItem>
      </List>
    </Drawer>
  )
}
