import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, StatusOnlineIcon } from '@heroicons/react/solid'

export const TopNavWantToTalk = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-white pl-5'>
      <a className='flex items-center py-5' onClick={() => navigate('/')}>
        <ArrowLeftIcon className='ml-3 mr-3 h-5 w-5 fill-slate-500' />
        <p className='text-slate-500'>
          I want to type
        </p>
      </a>
    </div>
  )
}

export const TopNavChat = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-white px-5'>
      <a className='flex flex-row items-center py-5 justify-between' onClick={() => navigate('/')}>
        <p className='flex flex-row items-center text-slate-500'>
          <StatusOnlineIcon className='ml-3 mr-3 h-5 w-5 fill-green-600' /> Maria
        </p>
        <button
          type='button'
          className='inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={() => navigate('/')}
        >
          Close conversation
        </button>
      </a>
    </div>
  )
}

export const TopNavMyself = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-white pl-5'>
      <a className='flex items-center py-5' onClick={() => navigate('/')}>
        <ArrowLeftIcon className='ml-3 mr-3 h-5 w-5 fill-slate-500' />
        <p className='text-slate-500'>
          I want to know more about myself
        </p>
      </a>
    </div>
  )
}
