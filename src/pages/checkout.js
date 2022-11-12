import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { createOrder as createOrderApi } from 'services/voralAPI'
import { useMainContext } from 'Context/mainContext'
import { CheckoutForm } from '@components/checkoutForm'
import { PaymentMethods } from '@components/PaymentMethods'
import { useForm } from 'hooks/useForm'
import Cookies from 'js-cookie'

export const Checkout = () => {
    const router = useRouter()
    const { formRef, handleSubmit, data:formData, wasSubmitted } = useForm()
    const { cart, order, setOrder } = useMainContext()
    const [done, setDone] = useState({})

    useEffect(()=>{
        if(done && order) router.push(`/thankYouPage`) // redirect to "thanks" page, HAVE TO pass the order to show to client. Provide download option
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
    <div className='absolute top-2 left-2 z-50'>
        <Link href="/">
            <div className='flex gap-2'>
                <AiOutlineArrowLeft size={30} />
                <p className='text-xl block font-bold'>Volver</p>
            </div>
        </Link>
    </div>
    <div className='py-10'>
        <CheckoutForm formRef={formRef} handleSubmit={handleSubmit}/>
        <PaymentMethods handlePayment={handlePayment} totalAmmount={cart?.totalAmmount} />

    </div>
    </>
  )
}

export default Checkout
