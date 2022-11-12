import React, { useState } from 'react'
import { SelectPayment } from './selectPayment'

export const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState(null)

  return (
    <>
      <SelectPayment setSelectedMethod={setSelectedMethod} />
      { selectedMethod === 'paypal' && <div>paypal</div> }
      { selectedMethod === 'pago_mobil' && <div>pago mobil</div> }
    </>
  )
}
