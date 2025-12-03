import { TProduct } from '@/libs/products'
import { Rating } from '@mui/material'
import Image from 'next/image'
import { MdFavoriteBorder } from 'react-icons/md'

const ProductCard = ({product}: {product: TProduct}) => {
    const handleWishList = () =>{
        console.log("added to wishlist", product.name)
    }
    return (
        <div className='h-[463px] md:w-[302px] w-full space-y-4'>
            <div className='bg-[#F5F5F5] h-[332px] rounded-sm flex justify-center items-center relative'>
                <Image src={product.image} width={220} height={220} alt={product.name} />
                <button onClick={handleWishList} className='text-title absolute top-3 right-3 bg-white p-1 rounded-full cursor-pointer'>
                    <MdFavoriteBorder size={24}/>
                </button>
            </div>
            <div className='space-y-2'>
                <h2 className='font-medium text-[32px] text-black'>{product.name}</h2>
                <div className='gap-3 text-[18px] flex text-title'>
                    <p className='font-medium'>${product.rent}/mo</p>
                    <p>${product.price} to buy</p>
                </div>
                <Rating name="read-only" value={5} readOnly />
            </div>
        </div>
    )
}

export default ProductCard
