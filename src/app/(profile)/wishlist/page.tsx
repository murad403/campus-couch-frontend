import { orders, TOrder } from '@/libs/orders'
import Image from 'next/image'
import { RiDeleteBin6Line } from 'react-icons/ri'

const WishList = () => {
    return (
        <div className='space-y-4'>
            {
                orders.map((order: TOrder) =>
                    <div key={order.id} className='flex justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <div className='bg-[#F5F5F5] rounded-lg'>
                                <Image width={108} height={108} alt={order.name} src={order.image} />
                            </div>
                            <div>
                                <h2 className='text-title font-bold text-2xl'>{order.name}</h2>
                                <p className='text-title text-[16px]'>${order.total}</p>
                                <p className='text-title text-[16px]'>Color: {order.color}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <button className='bg-button-background py-2 px-4 rounded-lg font-medium'>Add To Cart</button>
                            <button className='flex items-center justify-center hover:text-red-400 duration-300'>
                                <RiDeleteBin6Line size={24}/>
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default WishList
