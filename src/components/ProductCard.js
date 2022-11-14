import React from 'react'
import { AddToCartButton } from './AddToCartButton'
import { useRouter } from 'next/router'

export const ProductCard = ({ item }) => {
  const router = useRouter()
  
  const navToDetail = (itemId) => router.push(`/productDetail/${itemId}`)

  return (
    <div onClick={()=>navToDetail(item.id)} className=" mb-10 relative w-[230px] h-[300px] p-1 shadow-sm flex flex-col" key={item.id}>
        <div className='rounded-lg w-[230px] h-[200px] bg-center bg-no-repeat bg-cover' style={{ backgroundImage:`url("${item.image}")` }}></div>
        <h4 className="text-xl font-bold">{item.name}</h4>
        <p className="text-xs mb-2 font-bold">{item.price}$</p>
        <div className='absolute bottom-0'>
          <AddToCartButton productId={item.id} />
        </div>
    </div>
  )
}
