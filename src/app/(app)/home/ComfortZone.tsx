"use client"
import ProductCard from '@/components/card/ProductCard'
import { products } from '@/libs/products'
import Link from 'next/link'

const ConfortZone = () => {
    return (
        <div className='container mx-auto md:py-10 py-5 space-y-5 md:space-y-10 px-5 md:px-0'>
            <div className='flex justify-between md:flex-row flex-col'>
                <div>
                    <h1 className='font-semibold text-4xl text-black'>The Comfort Zone</h1>
                    <p className='text-[18px] text-heading'>Affordable, Stylish, and Ready for You – Choose to Buy or Rent.</p>
                </div>
                <Link className='text-[18px] text-heading underline underline-offset-2' href={'/see-all'}>See All</Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    products.slice(4, 8).map((product, index) => <ProductCard activeLayout='grid' key={index} product={product}></ProductCard>)
                }
            </div>
        </div>
    )
}

export default ConfortZone
