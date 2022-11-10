const BASEPATH = "https://commerce-api.zerpacode.com/api"
const VERSION = "v1"
const BASEENDPOINT ="client"
// tIQYu1BefrPp49W3GuNXxQpkPt4l3L
// BtW98K6HiQtIaKtb51LBsDsu3O5jHR

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
}

