import React from 'react'

export const PageLayout = ({ children }) => {
  return (
    <>
      {/* <Menu /> */}
      <div className='flex'>
        {/* <Menu /> */}
        <div
          className='flex flex' style={{ height: '80vh' }}
        >
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
