import React, { useEffect, useState } from 'react'
import { PayPalButtons,  PayPalScriptProvider } from '@paypal/react-paypal-js'
import { createCheckout, captureOrder, executeOrder } from 'services/commerce'
import { useMainContext } from 'Context/mainContext'
import { CheckoutForm } from '@components/checkoutForm'
import { useForm } from 'hooks/useForm'

export const Checkout = () => {
  const { formRef, handleSubmit, data, wasSubmitted } = useForm()
  const { cart, setCheckoutToken, checkoutToken, setCheckout, checkout } = useMainContext()
  const [paypalOrder, setPaypalOrder] = useState({})
  console.log(paypalOrder)

    const createOrder = (data, actions) => {
        return actions.order.create({
            currency_code: "USD",   
            purchase_units: [{amount:{value:cart.subtotal.raw, currency_code:"USD" }}],
        }).then(orderId=> orderId)
    }

    const onApprove = async(data, actions) => {
        console.log('aqui toy')  
        actions.order.capture().then((data)=>{setPaypalOrder(data)})
    } 
    return (
    <>
    <div className='py-10'>
        <CheckoutForm formRef={formRef} handleSubmit={handleSubmit}/>
        <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }} >
            <PayPalButtons createOrder={createOrder} onApprove={onApprove}></PayPalButtons>
        </PayPalScriptProvider>
    </div>
    </>
  )
}

export default Checkout
