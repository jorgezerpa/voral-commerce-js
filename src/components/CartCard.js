import React from 'react'
import { removeFromCart } from 'services/voralAPI'
import { useMainContext } from 'Context/mainContext'

export const CartCard = ({ item }) => {
  const { setCart } = useMainContext()

  const handleClick = async(productId) => {
        const result = await removeFromCart(productId)
        setCart(result)
  }

  return (
    <div className='mx-auto flex gap-4 mb-5 justify-start align-middle'>
        <div className='relative  w-[100px] h-[100px] rounded-lg overflow-hidden bg-center bg-cover bg-no-repeat' style={{backgroundImage:`url("${item.image}")`}}>
        </div>

        <div className='w-[130px] sm:w-[200px]'>
            <h4 className='text-md sm:text-lg font-bold'>{item.name}</h4>
            <p className='text-sm font-semibold'>{item.price}</p>
            <button onClick={()=>{handleClick(item.id)}} className='text-pink-400'>Eliminar</button>
        </div>
    </div>
  )
}
