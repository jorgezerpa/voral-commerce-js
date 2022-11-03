import React, { useEffect } from 'react'
import { PayPalButtons, PayPalMarks, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { createCheckout, captureOrder } from 'services/commerce'
import { useMainContext } from 'Context/mainContext'
import { CheckoutForm } from '@components/checkoutForm'
import { useForm } from 'hooks/useForm'

export const Checkout = () => {
    const { formRef, handleSubmit, data, wasSubmitted } = useForm()
    const { cart, setCheckoutToken, checkoutToken, setCheckout, checkout } = useMainContext()
   console.log(checkout)
    useEffect(()=>{createCheckout(cart?.id).then(data=>setCheckoutToken(data))}, [])
    useEffect(()=>{
        if(wasSubmitted){
            captureOrder(checkoutToken.id, data)
                .then(result =>{
                    setCheckout(result)
                 })
        }
    }, [data])

    const createOrder = (data, actions) => {
        return actions.order.create({
            
            currency_code: "USD",   
            purchase_units: [{amount:{value:cart.subtotal.raw, currency_code:"USD" }}],
            application_context:{return_url:'http://localhost:3000/wujuu', cancel_url:'http://localhost:3000/naaa'}
        }).then(orderId=> orderId)
    }

    const onApprove = (data, actions) => console.log('woooorkssss', data) 

    return (
    <>
    <div className='py-10'>
        <CheckoutForm formRef={formRef} handleSubmit={handleSubmit}/>
        <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }} >
            <PayPalButtons createOrder={createOrder} onApprove={onApprove} ></PayPalButtons>
        </PayPalScriptProvider>
    </div>
    </>
  )
}

export default Checkout













// import React, { useEffect } from 'react'
// import { createCheckout, captureOrder } from 'services/commerce'
// import { renderPaypalButton } from 'utils/renderPaypalButton'
// import { useMainContext } from 'Context/mainContext'
// import { CheckoutForm } from '@components/checkoutForm'
// import { useForm } from 'hooks/useForm'

// export const Checkout = () => {
//     const { formRef, handleSubmit, data, wasSubmitted } = useForm()
//     const { cart, setCheckoutToken, checkoutToken, setCheckout, checkout } = useMainContext()
    
//     useEffect(()=>{createCheckout(cart?.id).then(data=>setCheckoutToken(data))}, [])
//     useEffect(()=>{
//         if(wasSubmitted){
//             captureOrder(checkoutToken.id, data)
//                 .then(result =>{
//                     setCheckout(result)
//                     window.paypal.Button.render({
//                         env: 'sandbox', // Or 'production',
//                         commit: true, // Show a 'Pay Now' button
//                         payment: function() {
//                           return checkout.payment_id // The payment ID from earlier
                    
//                         },
//                         onAuthorize: function(data, actions) {
//                           // Handler if customer DOES authorize payment (this is where you get the payment_id & payer_id you need to pass to Chec)
//                         //   captureOrder(data);
//                         console.log(data)
//                         },
//                         onCancel: function(data, actions) {
//                           console.log('order canceled', data)
//                         }
//                       },
//                       '#paypal-button-container'
//                     );
//                 })
//         }
//     }, [data])

//     return (
//     <>
//     <div className='py-10'>
//         <CheckoutForm formRef={formRef} handleSubmit={handleSubmit}/>
//         <div id='paypal-button-container'></div>
//     </div>
//     </>
//   )
// }

// export default Checkout