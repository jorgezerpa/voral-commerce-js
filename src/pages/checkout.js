import React, { useEffect, useState } from 'react'
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

    useEffect(()=>{
        if(done) console.log(order) // redirect to "thanks" page, HAVE TO pass the order to show to client. Provide download option
    }, [done])

    const handlePayment = async(paymentMethod, receipt) => {
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
            totalAmount: cart.totalAmmount,
            paymentMethod: paymentMethod, 
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
        <PaymentMethods handlePayment={handlePayment} totalAmmount={cart?.totalAmmount} />

    </div>
    </>
  )
}

export default Checkout
