import { TOrder } from '@/libs/orders'
import Image from 'next/image'
import React from 'react'

const OrderDetailsModal = ({ order }: { order: TOrder }) => {
    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box bg-white p-4">
                <form method="dialog">
                    <button className="bg-red-500 absolute right-3 top-3 text-white size-7 rounded-xl flex justify-center items-center">✕</button>
                </form>

                <div className='flex gap-4'>
                    <div className='bg-[#F5F5F5] inline-block rounded-lg p-4'>
                        <Image src={order.image} alt={order.name} width={130} height={130} />
                    </div>
                    <div className='text-title text-start'>
                        <h2 className='font-bold text-2xl'>{order.name}</h2>
                        <p className='text-title text-[16px]'>Color: {order.color}</p>
                        <p className='text-title text-[16px]'>Date: {order.date}</p>
                        <p className='text-title text-[16px]'>Total: ${order.total}</p>
                        <p className='text-title text-[16px]'>Shipping Address : {order.shippingAddress}</p>
                    </div>
                </div>
                <button className='mt-4 text-title bg-button-background w-full rounded py-2'>Cancel Order</button>
            </div>
        </dialog>
    )
}

export default OrderDetailsModal
