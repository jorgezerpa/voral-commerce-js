import React from 'react'

export const SelectPayment = ({ setSelectedMethod }) => {
    
    const handleSelect = (e) => {
        setSelectedMethod(e.target.value)
    }

    return (
        <div className='flex gap-3' >
            <div>
                <input type="radio" id='paypalMethod' name="paymentMethod" value="paypal" onChange={handleSelect} />
                <label htmlFor="paypalMethod">Paypal</label>
            </div>

            <div>
                <input type="radio" id='pagoMobilMethod' name="paymentMethod" value="pago_mobil" onChange={handleSelect} />
                <label htmlFor="pagoMobilMethod">Pago Móvil</label>
            </div>
        </div>
    )
}
