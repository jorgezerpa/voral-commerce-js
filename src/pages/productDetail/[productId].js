import React, { useEffect, useState } from 'react'
import { AddToCartButton } from '@components/AddToCartButton'
import { useRouter } from 'next/router'
import { getProduct } from '../../services/voralAPI'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const ProductDetail = () => {
    const { query:{ productId } } = useRouter()
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        (async()=>{
            const result = await getProduct(productId)
            setProduct(result)
        })()
    }, [])


  return (
    <>
        <Link href="/">
            <div className='flex gap-2 m-4'>
                <AiOutlineArrowLeft size={30} />
                <p className='text-xl block font-bold'>Volver</p>
            </div>
        </Link>
        <div className='w-full flex flex-col sm:flex-row justify-center items-center sm:items-start p-4 sm:p-10'>
            { product && (
                <>
                    <div className='rounded-xl w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-center bg-no-repeat bg-cover' style={{ backgroundImage:`url("${product.image}")` }}></div>
                    <div className='w-[250px]  sm:w-[400px] p-3 sm:p-8 sm:py-0'>
                        <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
                        <p className="text mb-2">{product.description}</p>
                        {/* <p className="text-xs mb-2">{product.size}</p> */}
                        <p className="mb-4 font-semibold">{product.price}$</p>
                            <AddToCartButton productId={product.id} />
                    </div>
                </>
            )}
        </div>
    </>
  )
}

export default ProductDetail