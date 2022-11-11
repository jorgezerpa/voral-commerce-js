import React, { useState, useContext, createContext, useEffect } from "react";
import Cookies from "js-cookie";
import { getCart } from 'services/voralAPI' 

const MainContext = createContext()

const MainContextContainer = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState(null)
    const [checkout, setCheckout] = useState({})
    const [checkoutToken, setCheckoutToken] = useState(null)
   
    useEffect(() => {
        getCart().then(cart => setCart(cart))
    }, [])
    
    return(
    <MainContext.Provider value={{ products, setProducts, cart, setCart, checkout, setCheckout, checkoutToken, setCheckoutToken }}>
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



