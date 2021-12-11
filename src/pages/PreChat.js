import React, { useState } from 'react'
import { PageLayout } from '../components/PageLayout'
import { TopNavWantToTalk } from '../components/TopNav'
import { useNavigate } from 'react-router-dom'

export const PreChat = () => {
  const navigate = useNavigate()
  const [nickname, setNickname] = useState('')
  return (
    <>
      <TopNavWantToTalk />
      <PageLayout>
        <div className='flex justify-center flex-col'>
          <p className='font-bold my-2'>We would like to talk with you too!</p>
          <p className='text-slate-500 text-sm my-2'>Our professionalists are waiting to know more about your situation.</p>
          <input
            type='name'
            name='nickname'
            id='nickname'
            className='shadow-md focus:ring-indigo-500 focus:border-indigo-800 block w-full sm:text-sm border-gray-300 rounded-md h-10 p-4 my-4'
            placeholder='Your name / nick*'
            value={nickname} onChange={(e) => setNickname(e.target.value)}
          />
          <button
            type='button'
            className='inline-flex justify-center items-center mb-5 px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            onClick={() => navigate(`/chat/${nickname}`)}
            disabled={!nickname}
          >
            Next
          </button>
        </div>
      </PageLayout>
    </>
  )
}
