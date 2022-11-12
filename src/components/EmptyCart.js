import React from 'react'

export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center pt-44">
        <div className='w-[200px] h-[200px] bg-blue-800 rounded-[50%]'></div>
        <div>
            <h4 className='text-center text-3xl mb-2'>Tú carrito esta Vacío</h4>
            <p className='text-center text-lg'>¿Qué esperas? compra algo</p>
        </div>
    </div>
  )
}
