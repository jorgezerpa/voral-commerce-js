import React, { useEffect, useState } from 'react'
// import { addToCart, removeFromCart, createCart } from 'services/commerce'
import { addToCart, removeFromCart, createCart } from 'services/voralAPI'
import { useMainContext } from 'Context/mainContext'
import { ThreeDotsLoading } from './loadings/ThreeDotsLoading'

export const AddToCartButton = ({ productId }) => {
    const { cart, setCart } = useMainContext()
    const [isAdded, setIsAdded] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        if(cart){
            setIsAdded(cart.products.findIndex(product=>product.id===productId)===-1 ? false : true )
            setIsLoading(false)
        }
    }, [cart])

    const handleClick = async(productId) => {
        setIsLoading(true) 
        if(!isAdded && !cart){
            const newCart = await createCart()
            const result = await addToCart(productId)
            setCart(result)
        } 
        if(!isAdded && cart){
            const result = await addToCart(productId)
            setCart(result)
        } 
        if(isAdded){ //means-> deleteFromCart
            const itemId = cart.products.findIndex(product=>product.id===productId)
            //handle if itemId === -1
            const result = await removeFromCart(productId)
            setCart(result)
        }
    }

    return (
        <>
            <button 
                className="hover:scale-95 hover:from-[rgba(0,0,0,1)] hover:to-[rgba(0,0,0,.7)] transition-all ease-in-out rounded-lg w-[230px] h-[30px] text-sm text-white font-semibold px-2 border-none bg-gradient-to-br from-[rgba(0,0,0,.8)] to-[rgba(0,0,0,.5)] shadow-sm"
                onClick={(e)=> {
                    e.stopPropagation()
                    handleClick(productId)}
                } 
            >
                { isLoading ? <ThreeDotsLoading /> : (isAdded ? 'Remover' : 'Agregar') }
            </button>         
        </>
  )
}
