import React, { useState, useEffect } from 'react'
import { SidebarMenu } from './SidebarMenu'
import { ProductsGrid } from './productsGrid'
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
    <div className='w-full flex'>
      <div className='w-[120px]'>
        <SidebarMenu setProducts={setProducts} />
      </div>
      <div className='w-full'>
        <ProductsGrid products={products} />
      </div>
    </div>
  )
}
