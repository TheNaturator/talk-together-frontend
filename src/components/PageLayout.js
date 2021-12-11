import React from 'react'

export const PageLayout = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto px-7 sm:px-6 lg:px-8'>
      {children}
    </div>
  )
}
