const BASEPATH = "https://commerce-api.zerpacode.com/api"
const VERSION = "v1"
const BASEENDPOINT ="client"

export const endpoints = {
        //products
    getProducts: `${BASEPATH}/${VERSION}/${BASEENDPOINT}/products`,
    getProductsWithUnavailable: `${BASEPATH}/${VERSION}/${BASEENDPOINT}/products?unavailable=true`,
    getProduct: (productId)=>`${BASEPATH}/${VERSION}/${BASEENDPOINT}/products/${productId}`,
    getProductByCategory: (categoryId)=>`${BASEPATH}/${VERSION}/${BASEENDPOINT}/products/get-by-category/${categoryId}`,

        //categories
    getCategories: `${BASEPATH}/${VERSION}/${BASEENDPOINT}/categories`,
    getCategory: (categoryId)=>`${BASEPATH}/${VERSION}/${BASEENDPOINT}/categories/${categoryId}`,
    
    //orders
    getOrderTemplate:`${BASEPATH}/${VERSION}/${BASEENDPOINT}/orders/template`,
    createOrder:`${BASEPATH}/${VERSION}/${BASEENDPOINT}/orders`,
 
    //cart
    createCart: `${BASEPATH}/${VERSION}/${BASEENDPOINT}/cart`,
    getCart: (cartId)=>`${BASEPATH}/${VERSION}/${BASEENDPOINT}/cart/${cartId}`,
    addToCart: (cartId)=>`${BASEPATH}/${VERSION}/${BASEENDPOINT}/cart/addToCart/${cartId}`,
    removeFromCart: (cartId)=>`${BASEPATH}/${VERSION}/${BASEENDPOINT}/cart/removeFromCart/${cartId}`,
    deleteCart: (cartId)=>`${BASEPATH}/${VERSION}/${BASEENDPOINT}/cart/${cartId}`,
    emptyCart: (cartId)=>`${BASEPATH}/${VERSION}/${BASEENDPOINT}/cart/empty/${cartId}`,
}

