import React, { useEffect } from 'react'
import { createCheckout } from 'services/commerce'
import { useMainContext } from 'Context/mainContext'
import { CheckoutForm } from '@components/checkoutForm'

export const Checkout = () => {
    const { cart, checkoutToken, setCheckoutToken, setCheckout } = useMainContext()

    useEffect(()=>{
        createCheckout(cart?.id).then(data=>setCheckoutToken(data.id))
    }, [])

    return (
    <div className='py-10'>
        <CheckoutForm/>
    </div>
  )
}

export default Checkout




