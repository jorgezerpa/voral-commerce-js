import React, { useRef } from 'react'

export const CheckoutForm = ({ formRef, handleSubmit }) => {
  return (
      <div className="mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form ref={formRef} onSubmit={handleSubmit}>
                {/* contact  */}
        <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                aria-describedby="emailHelp123" placeholder="Nombre" name='firstname' />
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                aria-describedby="emailHelp124" placeholder="Apellido" name='lastname' />
            </div>
          </div>
          <div className="form-group mb-6">
            <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
              placeholder="Email" name='email' />
          </div>

                {/* address  */}
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                aria-describedby="emailHelp123" placeholder="Calle" name='street' />
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                aria-describedby="emailHelp124" placeholder="Municipio" name='town_city' />
            </div>
          </div>
          <div className="form-group mb-6">
            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
              placeholder="Estado" name='county_state' />
          </div>

          <div className="form-group mb-6">
            <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
              placeholder="Código Postal" name='postal_zip_code' />
          </div>

          
          
          <button type="submit" className=" w-full px-6 py-2.5 bg-pink-300 text-white font-medium rounded-lg">Siguiente</button>
        </form>
      </div>
  )
}

