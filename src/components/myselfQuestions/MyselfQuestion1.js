import React from 'react'

export const MyselfQuestion1 = ({ setAnswerHandler }) => {
  return (
    <div className='flex items-center flex-col'>
      <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-300 text-gray-800 my-3'>
        Question 1
      </span>
      <p className='font-bold mt-4 mb-7'>
        How tall are you?
      </p>
      <div className='flex flex-col w-full'>
        <button
          type='button'
          className='inline-flex justify-between items-center px-6 py-3 mb-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={() => setAnswerHandler(0, 'veryHigh')}
        >
          Very high
        </button>
        <button
          type='button'
          className='inline-flex justify-between items-center px-6 py-3 mb-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={() => setAnswerHandler(0, 'high')}
        >
          High
        </button>
        <button
          type='button'
          className='inline-flex justify-between items-center px-6 py-3 mb-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={() => setAnswerHandler(0, 'medium')}
        >
          Medium
        </button>
        <button
          type='button'
          className='inline-flex justify-between items-center px-6 py-3 mb-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={() => setAnswerHandler(0, 'small')}
        >
          Small
        </button>
      </div>
    </div>
  )
}
