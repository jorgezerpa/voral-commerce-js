import React, { useEffect, useState } from 'react'
import { getCategories, getProductsByCategory } from 'services/commerce'
import Image from 'next/image'

// const mockCategories = [
//     'products',
//     'categories',
//     'merchant',
//     'config',
//     'orders',
//     'developer'
// ]

export const SidebarMenu = ({ setProducts }) => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        (async()=>{
            const { data } = await getCategories()
            setCategories(data)
        })()
    }, [])

    async function handleClick(categoryId){
        const { data } = await getProductsByCategory(categoryId)
        setProducts(data)
    }


    return (
        <div className='w-full py-[10px]'>
            <ul className='w-full flex flex-col h-screen overflow-y-scroll align-middle'>
                { categories.map(item=>(
                    <div key={item.id} onClick={()=>handleClick(item.id)} className="w-[120px] mb-3 flex flex-col align-middle" >
                        <img className='w-[80px] rounded-lg mx-auto' src={item.assets[0].url} alt={item.name} />
                        <li className='text-sm text-center'>{item.name}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}
