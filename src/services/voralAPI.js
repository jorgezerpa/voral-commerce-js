import axios from 'axios'
import { endpoints } from '../utils/voralAPIEndpoints';
import { convertToBase64 } from 'utils/convertToBase64';

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

