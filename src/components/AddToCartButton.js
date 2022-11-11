import React, { useEffect, useState } from 'react'
// import { addToCart, removeFromCart, createCart } from 'services/commerce'
import { addToCart, removeFromCart, createCart } from 'services/voralAPI'
import { useMainContext } from 'Context/mainContext'

export const AddToCartButton = ({ productId }) => {
    const { cart, setCart } = useMainContext()
    const [isAdded, setIsAdded] = useState(false)

    useEffect(()=>{
        if(cart){
            setIsAdded(cart.products.findIndex(product=>product.id===productId)===-1 ? false : true )
        }
    }, [cart])

    const handleClick = async(productId) => {
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
        <button 
            className="absolute rounded-lg bottom-0 w-[230px] text-sm text-white font-semibold py-1 px-2 border-none bg-pink-400 shadow-sm"
            onClick={()=> handleClick(productId)}
        >
            { isAdded ? 'Remover' : 'Agregar' }
        </button>
  )
}
