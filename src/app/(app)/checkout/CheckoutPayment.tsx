"use client"
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cartItems, TCart } from '@/libs/cart'
import Image from 'next/image'
import React from 'react'
import { useForm, useWatch } from 'react-hook-form'

type PaymentInputs = {
  paymentMethod: "credit-card" | "apple-pay" | "venmo"
  cardNumber: string
  expirationDate: string
  cvc: string
  nameOnCard: string
  useSameAddress: boolean
}

const CheckoutPayment = () => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentInputs>({
    mode: "onChange",
    defaultValues: {
      paymentMethod: "credit-card",
      useSameAddress: false,
    },
  })

  const paymentMethod = useWatch({ control, name: "paymentMethod" })

  const onSubmit = (data: PaymentInputs) => {
    console.log("Payment data:", data)
  }

  return (
    <div className='space-y-4 md:p-7 p-3 rounded-md bg-gray-50'>
      <div>
        {cartItems.map((item: TCart) => (
          <div key={item.id} className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
              <div className='bg-gray-300 flex justify-center items-center w-[100px] h-[100px] rounded-md relative'>
                <Image src={item.image} alt={item.name} width={100} height={100} />
                <p className='absolute -top-2 -right-2 text-sm text-white bg-heading size-5 flex justify-center items-center rounded-full'>
                  {item.quantity}
                </p>
              </div>
              <div>
                <h3 className='font-medium text-[18px] text-title'>{item.name}</h3>
                <h3 className='font-medium text-[18px] text-title'>{item.material}/{item.color}</h3>
              </div>
            </div>
            <h3 className='font-medium text-[18px] text-title'>${item.price}</h3>
          </div>
        ))}
      </div>

      <div className='flex justify-between'>
        <h3 className='text-[18px] text-title'>Subtotal : {totalItems} items</h3>
        <h3 className='text-[18px] text-title'>${totalPrice}</h3>
      </div>

      <div className='flex justify-between'>
        <h3 className='text-[18px] text-title'>Shipping</h3>
        <h3 className='text-[16px] text-description'>Enter shipping address</h3>
      </div>

      <div className='flex justify-between font-bold'>
        <h3 className='text-[18px] text-title'>Total</h3>
        <h3 className='text-[16px] text-title'>USD: ${totalPrice}</h3>
      </div>

      {/* Payment Section */}
      <h2 className="font-semibold text-2xl">Payment</h2>
      <div className='bg-white p-4 rounded-md'>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <div className="rounded-lg md:p-6 space-y-4">
              <RadioGroup
                value={paymentMethod}
                onValueChange={(value) => {
                  // RHF-এ ভ্যালু আপডেট করা
                  register("paymentMethod").onChange({
                    target: { name: "paymentMethod", value }
                  })
                }}
              >
                {/* Credit Card Option */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <label htmlFor="credit-card" className="text-[20px] font-medium cursor-pointer">
                        Credit Card
                      </label>
                    </div>
                    <div className="text-2xl font-bold text-[#1434CB]">VISA</div>
                  </div>

                  {paymentMethod === "credit-card" && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-[18px] block mb-1">Card Number</label>
                        <input
                          type="text"
                          placeholder="Card number"
                          {...register("cardNumber", {
                            required: paymentMethod === "credit-card" ? "Card number is required" : false,
                          })}
                          className="border border-heading px-4 py-2 appearance-none w-full outline-none rounded-sm"
                        />
                        {errors.cardNumber && (
                          <span className="text-red-500 text-xs mt-1 block">{errors.cardNumber.message}</span>
                        )}
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label className="text-[18px] block mb-1">Expiration Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            {...register("expirationDate", {
                              required: paymentMethod === "credit-card" ? "Expiration date is required" : false,
                            })}
                            className="border border-heading px-4 py-2 appearance-none w-full outline-none rounded-sm"
                          />
                          {errors.expirationDate && (
                            <span className="text-red-500 text-xs mt-1 block">{errors.expirationDate.message}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <label className="text-[18px] block mb-1">CVC</label>
                          <input
                            type="text"
                            placeholder="CVC"
                            {...register("cvc", {
                              required: paymentMethod === "credit-card" ? "CVC is required" : false,
                            })}
                            className="border border-heading px-4 py-2 appearance-none w-full outline-none rounded-sm"
                          />
                          {errors.cvc && (
                            <span className="text-red-500 text-xs mt-1 block">{errors.cvc.message}</span>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="text-[18px] block mb-1">Name On Card</label>
                        <input
                          type="text"
                          placeholder="Name on card"
                          {...register("nameOnCard", {
                            required: paymentMethod === "credit-card" ? "Name on card is required" : false,
                          })}
                          className="border border-heading px-4 py-2 appearance-none w-full outline-none rounded-sm"
                        />
                        {errors.nameOnCard && (
                          <span className="text-red-500 text-xs mt-1 block">{errors.nameOnCard.message}</span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="useSameAddress"
                          {...register("useSameAddress")}
                        />
                        <label htmlFor="useSameAddress" className="text-[18px] mb-1 ml-2 text-title">
                          Use shipping address as billing address
                        </label>
                      </div>
                    </div>
                  )}
                </div>

                {/* Apple Pay Option */}
                <div className="pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="apple-pay" id="apple-pay" />
                      <label htmlFor="apple-pay" className="text-[20px] font-medium cursor-pointer text-title">
                        Apple Pay
                      </label>
                    </div>
                    <div className="text-2xl font-semibold">Pay</div>
                  </div>
                </div>

                {/* Venmo Option */}
                <div className="pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="venmo" id="venmo" />
                      <label htmlFor="venmo" className="text-[20px] font-medium cursor-pointer text-title">
                        Venmo
                      </label>
                    </div>
                    <div className="text-xl font-bold text-[#3D95CE]">venmo</div>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Submit Button */}
          <div className="space-y-3">
            <button
              type="submit"
              className="w-full bg-[#F59E0B] text-white py-3 text-base font-semibold rounded-md"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckoutPayment