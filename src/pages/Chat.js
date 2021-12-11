import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { ChatApp } from '../components/chat/components/ChatApp'
import { Container } from '@mui/material'

export const Chat = () => {
  return (
    <PageLayout>
      <Container sx={{ display: 'flex', width: '100%', boxShadow: '0px 0px 24px -17px rgba(66, 68, 90, 1)' }}>
        <ChatApp userName='user' />
      </Container>
    </PageLayout>
  )
}
