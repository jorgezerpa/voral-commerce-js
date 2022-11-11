import axios from 'axios'
import { endpoints } from '../utils/voralAPIEndpoints';
import { convertToBase64 } from 'utils/convertToBase64';
import Cookies from 'js-cookie';

const myAxios = axios.create({
    headers: {
        "x-APP-TOKEN":convertToBase64(`${process.env.NEXT_PUBLIC_VORAL_API_CLIENT_ID}:${process.env.NEXT_PUBLIC_VORAL_API_CLIENT_SECRET}`),
    },
});

        //CATEGORIES
export const getCategories = async() => {
    const result = await myAxios.get(endpoints.getCategories)
    return result
}

export const getCategory = async(categoryId) => {
    const result = await myAxios.get(endpoints.getCategory(categoryId))
    return result
}

        //PRODUCTS
export const getProductsByCategory = async(categoryId) => {
    const result = await myAxios.get(endpoints.getProductByCategory(categoryId))
    return result
}

export const getProducts = async() => {
    try {
        const result = await myAxios.get(endpoints.getProducts)
        return result
    } catch (error) {
        console.log(error)
    }
}

export const getProduct = async(productId) => {
    const result = await myAxios.get(endpoints.getProduct(productId))
    return result
}

        //ORDERS
export const getOrderTemplate = async(productId) => {
    const result = await myAxios.get(endpoints.getOrderTemplate)
    return result
}

export const createOrder = async(order) => {
    const result = await myAxios.post(endpoints.createOrder, order)
    return result
}

        //CART
export const createCart = async() => {
    const { data:{ data:{ cart }}} = await myAxios.get(endpoints.createCart)
    setCartOnCookies(cart.id)
    return cart
}

export const getCart = async() => {
    const cartId = getCartFromCookies()
    if(!cartId) return null
    const { data:{ data:{ cart }}} = await myAxios.get(endpoints.getCart(cartId))
    return cart
}

export const addToCart = async(productId) => {
    const cartId = getCartFromCookies()
    if(!cartId) return null
    const { data:{ data:{ cart }}} = await myAxios.patch(endpoints.addToCart(cartId), { productId:productId })
    return cart
}

export const removeFromCart = async(productId) => {
    const cartId = getCartFromCookies()
    if(!cartId) return null
    const { data:{ data:{ cart }}} = await myAxios.patch(endpoints.removeFromCart(cartId), { productId:productId })
    return cart
}
export const emptyCart = async() => {
    const cartId = getCartFromCookies()
    if(!cartId) return null
    const { data:{ data:{ cart }}} = await myAxios.get(endpoints.emptyCart(cartId))
    return cart
}
export const deleteCart = async() => {
    const cartId = getCartFromCookies()
    if(!cartId) return null
    const { data } = await myAxios.get(endpoints.deleteCart(cartId))
    return data
}


function getCartFromCookies(){
    const cartIdCookie = Cookies.get('voral_cart_id')
    if(!cartIdCookie) return null
    return cartIdCookie
} 

function setCartOnCookies(cartId){
    Cookies.set('voral_cart_id', cartId)
} 


