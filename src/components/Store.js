import React, { useState, useEffect } from 'react'
import { SidebarMenu } from './SidebarMenu'
import { ProductsGrid } from './ProductsGrid'
import { StoreBanner } from './StoreBanner'
import { getProducts } from 'services/commerce'

export const Store = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    (async()=>{
      const { data } = await getProducts()
      setProducts(data)
    })()
  }, [])
  
  return (
    <div className='relative w-full flex overflow-hidden h-screen'>
      
      <SidebarMenu setProducts={setProducts} />
      
      <div className='w-full h-screen overflow-y-scroll'>
        <StoreBanner />
        <ProductsGrid products={products} />
      </div>
    </div>
  )
}
