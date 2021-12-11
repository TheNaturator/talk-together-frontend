import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { ChatApp } from '../components/chat/components/ChatApp'

export const Chat = () => {
  return (
    <PageLayout>
      <div className='flex' style={{ width: '100%', boxShadow: '0px 0px 24px -17px rgba(66, 68, 90, 1)' }}>
        <ChatApp userName='user' />
      </div>
    </PageLayout>
  )
}
