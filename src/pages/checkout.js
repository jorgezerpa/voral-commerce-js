import React, { useEffect, useState } from 'react'
import { PayPalButtons,  PayPalScriptProvider } from '@paypal/react-paypal-js'
import { createOrder as createOrderApi } from 'services/voralAPI'
import { useMainContext } from 'Context/mainContext'
import { CheckoutForm } from '@components/checkoutForm'
import { useForm } from 'hooks/useForm'
import Cookies from 'js-cookie'

export const Checkout = () => {
  const { formRef, handleSubmit, data:formData, wasSubmitted } = useForm()
  const { cart } = useMainContext()
  const [done, setDone] = useState({})
  const [order, setOrder] = useState(null)

    useEffect(()=>{
        if(done) console.log(order)
    }, [done])

    const createOrder = (data, actions) => {
        return actions.order.create({
            currency_code: "USD",   
            purchase_units: [{amount:{value:cart.totalAmmount, currency_code:"USD" }}],
        }).then(orderId=> orderId)
    }

    const onApprove = async(data, actions) => {
        const receipt = await actions.order.capture()
        const orderInfo = {
            buyer: {
                firstName: formData.firstname,
                lastName: formData.lastname,
                email: formData.email,
                phone: '04134838',
                direction: {
                    houseNumber:"73",
                    street: "Bolivar",
                    city: "Mérida",
                    references: "abajo de la plaza",
                    coordinates:[]
                }
            },
            products: cart.products.map(product=>({ id:product.id, name:product.name, price:product.price })),
            totalAmount: 137, //cart.totalAmmount, API have a bug
            paymentMethod: "paypal", 
            paymentMethodReceipt: JSON.stringify(receipt)
        }
        const order = await createOrderApi(orderInfo) 
        setOrder(order)
        Cookies.remove('voral_cart_id')
        setDone(true)
    } 
    return (
    <>
    <div className='py-10'>
        <CheckoutForm formRef={formRef} handleSubmit={handleSubmit}/>
        { wasSubmitted && (
            <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }} >
                <PayPalButtons createOrder={createOrder} onApprove={onApprove}></PayPalButtons>
            </PayPalScriptProvider>
        )}
    </div>
    </>
  )
}

export default Checkout
