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
          <div className="form-group mb-6">
            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
              placeholder="Télefono" name='phone_number' />
          </div>

                {/* address  */}
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                aria-describedby="emailHelp123" placeholder="Calle/Avenida" name='street' />
            </div>

          </div>
          <div className="form-group mb-6">
            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
              aria-describedby="emailHelp123" placeholder="dirección (edificio, número de casa...)" name='house_number' />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
                  <select defaultValue='town_city_default' name="town_city" placeholder="Ciudad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="town_city_default" >Ciudad</option>
                    <option value="merida">Mérida</option>
                    <option value="ejido">Ejido</option>
                    <option value="lagunillas">Lagunillas</option>
                  </select>
            </div>

            <div className="form-group mb-6">
                  <select defaultValue='town_city_default' name="county_state" placeholder="Ciudad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value='town_city_default'>Estado</option>
                    <option value="merida">Mérida</option>
                  </select>
            </div>
          </div>

          <div className="form-group mb-6">
            <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
              placeholder="Código Postal" name='postal_zip_code' />
          </div>

          <div className="form-group mb-6">
            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
              placeholder="Referencias" name='references' />
          </div>
          
          <button type="submit" className=" w-full px-6 py-2.5 bg-pink-300 text-white font-medium rounded-lg">Siguiente</button>
        </form>
      </div>
  )
}

