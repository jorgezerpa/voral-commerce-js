import React from 'react'

const product = {
  name: 't-shirt',
  price: 100,
  category: 't-shirts',
  size: 'L'
}

const products = [product,product,product,product,product,product,product]
const tableHeaders = ['name', 'size', 'category', 'price', '']

const Products = () => {
  return (
    <>
    <h2 className='text-center text-5xl my-10 block'>Products</h2>
    <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {tableHeaders.map(tableHeader=>(
                      <th scope="col" className="py-3 px-6">
                          {tableHeader}
                      </th>
                    ))}
                  </tr>
              </thead>
              <tbody>
                {products.map(product=>(
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {product.name}
                      </td>
                      <td className="py-4 px-6">
                          {product.size}
                      </td>
                      <td className="py-4 px-6">
                          {product.category}
                      </td>
                      <td className="py-4 px-6">
                          {product.price}
                      </td>
                      <td className="py-4 px-6">
                          <button>edit</button>
                          <button>delete</button>
                      </td>
                  </tr>
                ))}
              </tbody>
          </table>
      </div>
    </>
  )
}

export default Products 