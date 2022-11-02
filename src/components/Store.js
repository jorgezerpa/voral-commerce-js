import React, { useState, useEffect } from 'react'
import { SidebarMenu } from './SidebarMenu'
import { ProductsGrid } from './ProductsGrid'
import { StoreBanner } from './StoreBanner'

export const Store = () => {  
  return (
    <div className='relative w-full flex overflow-hidden h-screen'>
      <SidebarMenu />
      <div className='w-full h-screen overflow-y-scroll'>
        <StoreBanner />
        <ProductsGrid />
      </div>
    </div>
  )
}
