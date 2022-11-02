import React, { useEffect, useState } from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import { getCategories, getProductsByCategory } from 'services/commerce'
import Image from 'next/image'
import { useWindowWidth } from 'hooks/useWindowWidth'

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
    const { width:windowWidth } = useWindowWidth()
    const [showSideBar, setShowSideBar] = useState(false)
    useEffect(()=>{
        (async()=>{
            const { data } = await getCategories()
            setCategories(data)
        })()
    }, [])

    async function handleClick(categoryId){
        setShowSideBar(false)
        const { data } = await getProductsByCategory(categoryId)
        setProducts(data)
    }
    
    function toggleShowSideBar(){
      setShowSideBar(prev=>!prev)
    }

    return (
        <div className={`bg-white z-50 ${windowWidth > 500 ? "w-[120px]":"w-[200px]"} py-[10px] transition ease-in-out ${windowWidth>500 ? "relative":`absolute translate-x-[${!showSideBar && "-200px"}]`}`}>
            <div className={`p-2 rounded-[50%] absolute top-5 left-full  bg-pink-300 ${windowWidth>500 && "hidden"}`} onClick={toggleShowSideBar}>
                <BiCategoryAlt size={35} color="#fff" />
            </div>
            <ul className='w-full flex flex-col h-screen overflow-hidden overflow-y-scroll align-middle'>
                { categories.map(item=>(
                    <div key={item.id} onClick={()=>handleClick(item.id)} className="w-full mb-3 flex flex-col align-middle" >
                        <img className={`w-[${windowWidth>500?'80':'120'}px] rounded-lg mx-auto`} src={item.assets[0].url} alt={item.name} />
                        <li className='text-sm text-center'>{item.name}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}
