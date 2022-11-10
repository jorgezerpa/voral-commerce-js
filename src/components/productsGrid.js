import React, { useEffect } from 'react'
import { ProductCard } from './ProductCard'
import { useMainContext } from 'Context/mainContext'
import { getProducts as getProducts2 } from '../services/voralAPI'

export const ProductsGrid = ({  }) => {
    const { products, setProducts } = useMainContext()

    useEffect(()=>{
      (async()=>{
        const {data:{ data }} = await getProducts2()
        setProducts(data.products)
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
