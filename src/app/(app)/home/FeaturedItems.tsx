"use client"
import ProductCard from '@/components/card/ProductCard'
import { products } from '@/libs/products'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

const FeaturedItems = () => {
    return (
        <div className='md:p-10 p-5 space-y-5 md:space-y-10'>
            <div>
                <div>
                    <h1 className='font-semibold text-4xl text-black'>Featured Items</h1>
                    <p className='text-[18px] text-heading'>Trending Now: Best-Selling & Most-Rented Items!</p>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    products.slice(0, 4).map((product, index) => <ProductCard key={index} product={product}></ProductCard>)
                }
            </div>
            <div className='flex justify-center text-title text-[18px] font-medium'>
                <Link href={"/shop"} className='flex gap-2 items-center'>
            <span className='underline underline-offset-2'>View All Furniture</span>
            <FiArrowUpRight />
            </Link>
            </div>
        </div>
    )
}

export default FeaturedItems
