import { TProduct } from '@/libs/products'
import { Rating } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { MdFavoriteBorder } from 'react-icons/md'

const ProductCard = ({ product, activeLayout }: { product: TProduct, activeLayout: string }) => {
    // console.log(activeLayout)
    const handleWishList = () => {
        console.log("added to wishlist", product.name);
    }
    return (
        <div className={`${activeLayout === "col" ? "flex md:flex-row flex-col gap-5 mb-10" : "flex flex-col md:space-y-4 space-y-1 h-[463px]"}`}>
            <div className={`bg-[#F5F5F5] h-[332px] rounded-sm flex justify-center items-center relative ${activeLayout === "col" ? "md:w-1/2 w-full" : "w-full"}`}>
                <Image src={product.image} width={220} height={220} className={``} alt={product.name} />
                <button onClick={handleWishList} className='text-title absolute top-3 right-3 bg-white p-1 rounded-full cursor-pointer'>
                    <MdFavoriteBorder size={24} />
                </button>
            </div>
            <div className={`space-y-1 md:space-y-2 ${activeLayout === "col" ? "md:w-1/2 w-full" : "w-full"}`}>
                <h2 className='font-medium text-[32px] text-black capitalize'>{product.name}</h2>
                <div className='gap-3 text-[18px] flex text-title'>
                    <p className='font-medium'>${product.rent}/mo</p>
                    <p className='text-[17px]'>${product.price} to buy</p>
                </div>
                <Rating name="read-only" value={product.rating} readOnly />
                <div>
                {
                    activeLayout === "col" && 
                    <div className=''>
                        <p className='text-sm text-heading'>{product.description}</p>
                        <div className='mt-5'>
                            <Link href={`/shop/${product.id}`} className='bg-button-background rounded-sm font-semibold py-3 px-5 cursor-pointer mt-1'>See Details</Link>
                        </div>
                    </div>
                }
            </div>
            </div>
        </div>
    )
}

export default ProductCard
