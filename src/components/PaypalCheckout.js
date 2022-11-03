import React from 'react'
import { useMainContext } from 'Context/mainContext'

const paymentObject = {
  gateway: 'paypal',
  paypal: {
    action: 'authorize',
  }
}

export const PaypalCheckout = () => {
  const { checkout } = useMainContext()  

  return (
    <div id='paypal-button-container'>
      <button>Comprar</button>
    </div>
  )
}
