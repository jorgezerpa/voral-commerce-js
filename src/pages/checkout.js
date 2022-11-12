import React, { useEffect, useState } from 'react'
import { PayPalButtons,  PayPalScriptProvider } from '@paypal/react-paypal-js'
import { createOrder as createOrderApi } from 'services/voralAPI'
import { useMainContext } from 'Context/mainContext'
import { CheckoutForm } from '@components/checkoutForm'
import { PaymentMethods } from '@components/PaymentMethods'
import { useForm } from 'hooks/useForm'
import Cookies from 'js-cookie'

export const Checkout = () => {
  const { formRef, handleSubmit, data:formData, wasSubmitted } = useForm()
  const { cart } = useMainContext()
  const [done, setDone] = useState({})
  const [order, setOrder] = useState(null)
  console.log(formData)

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
                phone: formData.phone_number,
                direction: {
                    houseNumber:"-",
                    street: formData.street,
                    city: formData.town_city + " " + formData.postal_zip_code, //till fix backend shipping options
                    references: "referencias",
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
        <PaymentMethods />
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
