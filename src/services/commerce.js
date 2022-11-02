// Import the Commerce module
import Commerce from '@chec/commerce.js';

// Create a Commerce instance
const commerce = new Commerce(process.env.NEXT_PUBLIC_COMMERCE_JS_PUBLIC_KEY);

export const getCategories = async() => {
    const result = await commerce.categories.list()
    return result
}

export const getProductsByCategory = async(categoryId) => {
    const result = await commerce.products.list({ category_id:categoryId })
    return result
}

export const getProducts = async() => {
    const result = await commerce.products.list()
    return result
}

