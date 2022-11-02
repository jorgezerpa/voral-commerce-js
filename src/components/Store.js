import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { CgShoppingBag } from 'react-icons/cg'
import { SidebarMenu } from './SidebarMenu'
import { ProductsGrid } from './ProductsGrid'
import { StoreBanner } from './StoreBanner'

export const Store = () => {  
  return (
    <div className='relative w-full flex overflow-hidden h-screen'>
        <div className='z-50 p-2 rounded-[50%] absolute top-5 right-5 bg-pink-300'>
          <Link href="/cart" >
              <div>
                <CgShoppingBag size={32} color="#fff" />
              </div>
          </Link>
        </div>
      <SidebarMenu />
      <div className='w-full h-screen overflow-y-scroll'>
        <StoreBanner />
        <ProductsGrid />
      </div>
    </div>
  )
}
