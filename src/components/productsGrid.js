import React from 'react'
import Link from 'next/link'

const elements = [
    'products',
    'categories',
    'merchant',
    'config',
    'orders',
    'developer'
]
export const ProductsGrid = ({ products }) => {
    return (
        <div className='w-full flex gap-10 flex-wrap justify-evenly p-10'>
            { products?.map(item=>(
                <div className="mb-10 relative w-[230px] h-[300px] p-1 shadow-sm flex flex-col" key={item.id}>
                    <div className='rounded-lg w-[230px] h-[200px] bg-center bg-no-repeat bg-cover' style={{ backgroundImage:`url("${item.image.url}")` }}></div>
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <p className="text-xs mb-2">{item.price.formatted_with_symbol}</p>
                    <button className="absolute rounded-lg bottom-0 w-[230px] text-sm text-white font-semibold py-1 px-2 border-none bg-pink-400 shadow-sm" onClick={()=>{console.log(`producto ${item.id} en el carrito`)}}>agregar</button>
                </div>
            )) }
        </div>
    )
}
