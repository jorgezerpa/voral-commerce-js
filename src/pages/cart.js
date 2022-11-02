import React from 'react'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useMainContext } from 'Context/mainContext'
import { CartCard } from '@components/CartCard'

const Cart = () => {
    const { cart } = useMainContext()

    if(!cart || cart.line_items.length<=0){
        return (
            <p>no tienes productos brou :(</p>
        )
    }
    
    return (
        <div className='relative py-10 px-2 sm:px-10 flex flex-col justify-center'>
            <div className='absolute top-2 left-2'>
                <Link href="/">
                    <div className='flex gap-2'>
                        <AiOutlineArrowLeft size={30} />
                        <p className='text-xl block font-bold'>Volver</p>
                    </div>
                </Link>
            </div>
            <h2 className='mt-10 mb-10 text-3xl font-bold text-center'>Tú Carrito</h2>
            

            <div className='sm:inline-block sm:bg-gray-200 sm:p-10 rounded-xl mx-auto'>
                {  cart?.line_items.map(item=>(
                    <CartCard key={'cart'+item.id} item={item} />
                ))}

                <div>
                    <p className='w-full flex justify-center align-middle mt-10 mb-2'>Total: {cart.subtotal.formatted_with_symbol}</p>
                </div>

                <div className='w-full flex justify-center align-middle mb-10'>
                    <Link href="/checkout">
                        <p className='text-md sm:text-xl block rounded-xl bg-pink-300 text-white font-semibold py-2 px-3'>Comprar</p>
                    </Link>
                </div>
            </div>

            
        </div>
    )
}

export default Cart