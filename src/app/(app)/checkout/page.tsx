import React from 'react'
import CheckoutForm from './CheckoutForm'
import CheckoutPayment from './CheckoutPayment'

const Checkout = () => {
    return (
        <div className="container mx-auto md:mb-20 mb-10 px-5 md:px-0">
            <h1 className="font-semibold text-3xl md:text-4xl text-black text-center md:mb-12 mb-7">Checkout</h1>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='w-full md:w-1/2'>
                    <CheckoutForm></CheckoutForm>
                </div>
                <div className='w-full md:w-1/2'>
                    <CheckoutPayment></CheckoutPayment>
                </div>
            </div>
        </div>
    )
}

export default Checkout
