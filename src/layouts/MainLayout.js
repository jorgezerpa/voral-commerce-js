import React from 'react'

export const MainLayout = ({children}) => {
  return (
    <div className='flex'>
      <div className='h-screen w-full'>
          {children}
      </div>
    </div>
  )
}
