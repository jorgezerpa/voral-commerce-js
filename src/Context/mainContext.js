import React, { useState, useContext, createContext, useEffect } from "react";
import Cookies from "js-cookie";
import { createCart, addToCart, getCart } from "services/commerce";

const MainContext = createContext()

const MainContextContainer = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState(null)

    useEffect(() => {
        const cartIdCookie = Cookies.get('commercejs_cart_id')
        if(cartIdCookie){
            getCart(cartIdCookie)
                .then(data => setCart(data))
        }
    }, [])
    

    return(
    <MainContext.Provider value={{ products, setProducts, cart, setCart }}>
        { children }
    </MainContext.Provider>
    )
}

const useMainContext = () => {
    const context = useContext(MainContext)
    return context
}

export {
    MainContext,
    MainContextContainer,
    useMainContext
}



