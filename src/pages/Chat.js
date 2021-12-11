import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { ChatApp } from '../components/chat/components/ChatApp'
import { useParams } from 'react-router-dom'
import { TopNavChat } from '../components/TopNav'

export const Chat = () => {
  const { nickname } = useParams()
  return (
    <>
      <TopNavChat />
      <PageLayout>
        <div className='flex'>
          <ChatApp userName={nickname} />
        </div>
      </PageLayout>
    </>
  )
}
