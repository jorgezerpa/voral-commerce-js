import React, { useEffect, useState } from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import { useWindowWidth } from 'hooks/useWindowWidth'
import { useMainContext } from 'Context/mainContext'
import { getCategories, getProductsByCategory, getProducts } from '../services/voralAPI'

// const mockCategories = [
//     'products',
//     'categories',
//     'merchant',
//     'config',
//     'orders',
//     'developer'
// ]

export const SidebarMenu = () => {
    const { setProducts } = useMainContext()
    const [categories, setCategories] = useState([])
    const { width:windowWidth } = useWindowWidth()
    const [showSideBar, setShowSideBar] = useState(false)
    useEffect(()=>{
        (async()=>{
            const { data:{ data:{categories:data} } } = await getCategories()
            setCategories(data)
        })()
    }, [])

    async function handleClick(categoryId=false){
        setShowSideBar(false)
        if(!categoryId){
            const { data:{ data:{products:data} } } = await getProducts()
            setProducts(data)
        } 
        else{
            const { data: { data:{ products:data } } } = await getProductsByCategory(categoryId) 
            setProducts(data)
        }         
    }
    
    function toggleShowSideBar(){
      setShowSideBar(prev=>!prev)
    }

    return (
        <div className={`bg-white z-50 ${windowWidth > 500 ? "w-[120px]":"w-[200px]"} py-[10px] transition ease-in-out ${windowWidth>500 ? "relative":`absolute ${showSideBar && "translate-x-[-200px]"}`}`}>
            <div className={`p-2 rounded-[50%] absolute top-5 left-full  bg-pink-300 ${windowWidth>500 && "hidden"}`} onClick={toggleShowSideBar}>
                <BiCategoryAlt size={35} color="#fff" />
            </div>
            <ul className='w-full flex flex-col h-screen overflow-hidden overflow-y-scroll align-middle'>
                <div onClick={()=>handleClick(null)} className="w-full mb-3 flex flex-col align-middle" >
                    {/* <img className={`w-[${windowWidth>500?'80':'120'}px] rounded-lg mx-auto`} src={item.image} alt={item.name} /> */}
                    <li className='text-sm text-center'>todo</li>
                </div>
                { categories.map(item=>(
                    <div key={item.id} onClick={()=>handleClick(item.id)} className="w-full mb-3 flex flex-col align-middle" >
                        <img className={`w-[${windowWidth>500?'80':'120'}px] rounded-lg mx-auto`} src={item.image} alt={item.name} />
                        <li className='text-sm text-center'>{item.name}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}
