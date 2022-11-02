import React, { useState } from 'react'
import { SidebarMenu } from '@commons/SidebarMenu'

export const MainLayout = ({children}) => {
  return (
    <div className='flex'>
      <div className='h-screen w-full'>
          {children}
      </div>
    </div>
  )
}
