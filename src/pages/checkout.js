import React, { useEffect, useState } from 'react'
import { PayPalButtons,  PayPalScriptProvider } from '@paypal/react-paypal-js'
import { createCheckout, captureOrder, executeOrder } from 'services/commerce'
import { useMainContext } from 'Context/mainContext'
import { CheckoutForm } from '@components/checkoutForm'
import { useForm } from 'hooks/useForm'

export const Checkout = () => {
    const { formRef, handleSubmit, data, wasSubmitted } = useForm()
    const { cart, setCheckoutToken, checkoutToken, setCheckout, checkout } = useMainContext()
    const [payerId, setPayerId] = useState('')
    const [paymentId, setPaymentId] = useState('')
    const [recipe, setRecipe] = useState({})
    const [approved, setApproved] = useState(false)
    
    useEffect(()=>{createCheckout(cart?.id).then(data=>setCheckoutToken(data))}, [])
    
    useEffect(()=>{
        if(wasSubmitted){
            captureOrder(checkoutToken.id, data).then(data => setPaymentId(data.payment_id))
        }
    }, [wasSubmitted])

    useEffect(()=>{
        if(approved){
            executeOrder(checkoutToken.id, data, paymentId, payerId)
                .then(data => setRecipe(data))
        }
    }, [approved])

    const createOrder = (data, actions) => {
        return actions.order.create({
            currency_code: "USD",   
            purchase_units: [{amount:{value:cart.subtotal.raw, currency_code:"USD" }}],
            // application_context:{return_url:'http://localhost:3000/wujuu', cancel_url:'http://localhost:3000/naaa'}
        }).then(orderId=> orderId)
    }

    const onApprove = async(data, actions) => {
            setPayerId(data.payerID)
            setApproved(true)
    } 

    return (
    <>
    <div className='py-10'>
        <CheckoutForm formRef={formRef} handleSubmit={handleSubmit}/>
        <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }} >
            <PayPalButtons createOrder={createOrder} onApprove={onApprove}  ></PayPalButtons>
        </PayPalScriptProvider>
    </div>
    </>
  )
}

export default Checkout
