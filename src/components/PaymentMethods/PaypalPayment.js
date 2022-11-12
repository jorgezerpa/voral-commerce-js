import React from 'react'
import { PayPalButtons,  PayPalScriptProvider } from '@paypal/react-paypal-js'

export const PaypalPayment = ({ handlePayment, totalAmmount }) => {  
  const createOrder = (data, actions) => {
    return actions.order.create({
        currency_code: "USD",   
        purchase_units: [{amount:{value:totalAmmount, currency_code:"USD" }}],
    }).then(orderId=> orderId)
  }

  const onApprove = async(data, actions) => {
    const receipt = await actions.order.capture()
    handlePayment('paypal', receipt)
}

  return (
    <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }} >
      <PayPalButtons createOrder={createOrder} onApprove={onApprove}></PayPalButtons>
    </PayPalScriptProvider>
  )
}
