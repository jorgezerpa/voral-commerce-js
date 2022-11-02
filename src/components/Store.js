import React, { useState } from 'react'
import { SidebarMenu } from './SidebarMenu'
import { ProductsGrid } from './productsGrid'

export const Store = () => {
  const [products, setProducts] = useState([])

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
