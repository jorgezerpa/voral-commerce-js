import React, { useState } from 'react'
import { SelectPayment } from './selectPayment'
import { PaypalPayment } from './PaypalPayment'

export const PaymentMethods = ({ handlePayment, totalAmmount }) => {
  const [selectedMethod, setSelectedMethod] = useState(null)

  return (
    <>
      <SelectPayment setSelectedMethod={setSelectedMethod} />
      { selectedMethod === 'paypal' && <PaypalPayment handlePayment={handlePayment} totalAmmount={totalAmmount} /> }
      { selectedMethod === 'pago_mobil' && <div>pago mobil</div> }
    </>
  )
}
