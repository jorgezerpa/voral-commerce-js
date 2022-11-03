import React, { useEffect } from 'react'
import { createCheckout, captureOrder } from 'services/commerce'
import { useMainContext } from 'Context/mainContext'
import { CheckoutForm } from '@components/checkoutForm'
import { useForm } from 'hooks/useForm'

export const Checkout = () => {
    const { formRef, handleSubmit, data, wasSubmitted } = useForm()
    const { cart, setCheckoutToken, checkoutToken, setCheckout, checkout } = useMainContext()

    useEffect(()=>{createCheckout(cart?.id).then(data=>setCheckoutToken(data))}, [])
    console.log(checkout)
    useEffect(()=>{
        if(wasSubmitted){
            captureOrder(checkoutToken.id, data)
                .then(result => setCheckout(result))
        }
    }, [data])

    return (
    <div className='py-10'>
        <CheckoutForm formRef={formRef} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Checkout




