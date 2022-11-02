import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { AddToCartButton } from './AddToCartButton'
import { getProducts } from 'services/commerce'
import { useMainContext } from 'Context/mainContext'

export const ProductsGrid = ({  }) => {
    const { products, setProducts } = useMainContext()

    useEffect(()=>{
      (async()=>{
        const { data } = await getProducts()
        setProducts(data)
      })()
    }, [])

    return (
        <div className='w-full flex gap-10 flex-wrap justify-evenly p-10'>
            { products?.map(item=>(
                <div className=" mb-10 relative w-[230px] h-[300px] p-1 shadow-sm flex flex-col" key={item.id}>
                    <div className='rounded-lg w-[230px] h-[200px] bg-center bg-no-repeat bg-cover' style={{ backgroundImage:`url("${item.image.url}")` }}></div>
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <p className="text-xs mb-2">{item.price.formatted_with_symbol}</p>
                    <AddToCartButton productId={item.id} />
                </div>
            )) }
        </div>
    )
}

// mock categories
// const elements = [
//     'products',
//     'categories',
//     'merchant',
//     'config',
//     'orders',
//     'developer'
// ]
