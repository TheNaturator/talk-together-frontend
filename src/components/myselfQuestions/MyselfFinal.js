import React from 'react'
import { ArrowRightIcon, StatusOnlineIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom'

export const MyselfFinal = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center flex-col justify-between h-full'>
      <p className='font-bold text-xl mt-4 mb-7'>
        Your results
      </p>
      <p>
        You are awesome! Thanks for the answers! Now you can join our specialist.
      </p>
      <div className='flex flex-col bg-slate-300 mt-12 w-full p-4 rounded-md'>
        <p className='font-bold text-slate-500'>Maria</p>
        <p className='flex items-center text-green-600'><StatusOnlineIcon className='mr-1 h-5 w-5 fill-green-600' /> online</p>
        <a className='flex items-center text-blue-600 hover:text-blue-800' onClick={() => navigate('/prechat')}>
          Go to chat <ArrowRightIcon className='ml-3 mr-3 h-5 w-5' />
        </a>
      </div>
    </div>
  )
}
