import React from 'react'
import { AddToCartButton } from './AddToCartButton'

export const ProductCard = ({ item }) => {
  return (
    <div className=" mb-10 relative w-[230px] h-[300px] p-1 shadow-sm flex flex-col" key={item.id}>
        <div className='rounded-lg w-[230px] h-[200px] bg-center bg-no-repeat bg-cover' style={{ backgroundImage:`url("${item.image}")` }}></div>
        <h4 className="text-xl font-semibold">{item.name}</h4>
        <p className="text-xs mb-2">{item.price}</p>
        <AddToCartButton productId={item.id} />
    </div>
  )
}
