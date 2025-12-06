import ProductCard from '@/components/card/ProductCard'
import { products } from '@/libs/products'
import React from 'react'

const RelatedProducts = () => {
    return (
        <div className='py-10 container mx-auto space-y-5'>
            <div>
                <h1 className='font-semibold text-black text-[40px]'>Related Products</h1>
            <p className='text-[18px] text-heading'>Affordable, Stylish, and Ready for You – Choose to Buy or Rent.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    products.slice(0, 4).map((product, index) => <ProductCard activeLayout='grid' key={index} product={product}></ProductCard>)
                }
            </div>
        </div>
    )
}

export default RelatedProducts
