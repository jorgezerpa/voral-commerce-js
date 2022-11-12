import React from 'react'

const PaypalPayment = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }} >
      <PayPalButtons createOrder={createOrder} onApprove={onApprove}></PayPalButtons>
    </PayPalScriptProvider>
  )
}

export default PaypalPayment