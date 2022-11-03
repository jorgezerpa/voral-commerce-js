import React, { useEffect } from 'react'
import Script from 'next/script'
import { createCheckout, captureOrder } from 'services/commerce'
import { renderPaypalButton } from 'utils/renderPaypalButton'
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
                    window.paypal.Button.render({
                        env: 'sandbox', // Or 'production',
                        commit: true, // Show a 'Pay Now' button
                        payment: function() {
                          return checkout.payment_id // The payment ID from earlier
                    
                        },
                        onAuthorize: function(data, actions) {
                          // Handler if customer DOES authorize payment (this is where you get the payment_id & payer_id you need to pass to Chec)
                        //   captureOrder(data);
                        console.log(data)
                        },
                        onCancel: function(data, actions) {
                          console.log('order canceled', data)
                        }
                      },
                      '#paypal-button-container'
                    );
                })
        }
    }, [data])

    return (
    <>
    <Script src="https://www.paypalobjects.com/api/checkout.js"></Script>
    <div className='py-10'>
        <CheckoutForm formRef={formRef} handleSubmit={handleSubmit}/>
        <div id='paypal-button-container'></div>
    </div>
    </>
  )
}

export default Checkout




