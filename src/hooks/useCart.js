import React, { useState } from "react";
import { createCart, emptyCart } from "services/commerce";

export const useCart = () => {
    const [cart, setCart] = useState(null)

    async function createCart(){
        const result = await createCart()
        setCart(result)
    }

    async function emptyCart(){
        const result = await emptyCart()
        setCart(result)
    }

    return {
        cart,
        setCart,
        createCart,
        emptyCart
    }
}
