import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { SidebarMenu } from '@commons/SidebarMenu'

export const MainLayout = ({children}) => {
  const router = useRouter()
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    if(router.pathname!=='/' || router.pathname!=='/register' ) setShowSidebar(true)
    if(router.pathname==='/' || router.pathname==='/register') setShowSidebar(false)
  }, [router.pathname])
  

  return (
    <div className='flex'>
      { showSidebar && (
        <div className='h-screen w-1/5'>
          <SidebarMenu />
        </div>
      )}
      <div className='h-screen w-full'>
          {children}
      </div>
    </div>
  )
}
