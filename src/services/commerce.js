// Import the Commerce module
import Commerce from '@chec/commerce.js';
import { formatCaptureData, formatExecuteData } from 'utils/formatCaptureData';

// Create a Commerce instance
const commerce = new Commerce(process.env.NEXT_PUBLIC_COMMERCE_JS_PUBLIC_KEY);

        //CATEGORIES
export const getCategories = async() => {
    const result = await commerce.categories.list()
    return result
}

        //PRODUCTS
export const getProductsByCategory = async(categoryId) => {
    const result = await commerce.products.list({ category_id:categoryId })
    return result
}

export const getProducts = async() => {
    const result = await commerce.products.list()
    return result
}


        //CART
export const createCart = async() => {
    const result = await commerce.cart.retrieve()
    console.log(result)
    return result
}

export const getCart = async(cartId) => {
    const result = await commerce.cart.retrieve(cartId)
    return result
}

export const addToCart = async(productId) => {
    const result = await commerce.cart.add(productId)
    return result

}

export const removeFromCart = async(productId) => {
    const result = await commerce.cart.remove(productId)
    return result
}

export const emptyCart = async() => {
    const result = await commerce.cart.empty()
    return result
}


            //CHECKOUT  
export const createCheckout = async(cartId) => {
    const result = await commerce.checkout.generateTokenFrom('cart', cartId)
    return result
}

export const captureOrder = async(checkoutToken, formData) => {
    const data = formatCaptureData(formData)
    const result = await commerce.checkout.capture(checkoutToken, data)
    return result
}

export const executeOrder = async(checkoutToken, formData, payment_id, payer_id) => {
    const data = formatExecuteData(formData, payment_id, payer_id )
    const result = await commerce.checkout.capture(checkoutToken, data)
    return result
}

