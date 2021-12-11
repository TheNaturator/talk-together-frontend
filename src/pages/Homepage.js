import React from 'react'
import { ChatAltIcon, SearchIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import homepageImage from '../assets/homepage.png'

export const Homepage = () => {
  const navigate = useNavigate()
  return (
    <PageLayout>
      <div>
        <p className='text-sm text-slate-500 pt-8'>
          Talk Together
        </p>
      </div>
      <p className='text-5xl font-medium py-7'>
        Do you not feel well?
      </p>
      <p className='text-xl py-2 mb-10'>
        There is not good way? You feel worse and worse? We are here to help you, totally for free.
      </p>
      <div className='flex flex-col'>
        <button
          type='button'
          className='inline-flex justify-between items-center mb-5 px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={() => navigate('/prechat')}
        >
          I want to type
          <ChatAltIcon className='ml-3 -mr-1 h-5 w-5' aria-hidden='true' />
        </button>
        <button
          type='button'
          className='inline-flex justify-between items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          I want to know more about myself
          <SearchIcon className='ml-3 -mr-1 h-5 w-5' aria-hidden='true' />
        </button>
      </div>
      <img src={homepageImage} className='absolute bottom-0 right-0 w-screen z-[-1]' />
    </PageLayout>
  )
}
