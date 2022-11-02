import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { AddToCartButton } from './AddToCartButton'
import { getProducts } from 'services/commerce'
import { ProductCard } from './ProductCard'
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
            { products?.map(item=><ProductCard key={item.id} item={item}/>) }
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
