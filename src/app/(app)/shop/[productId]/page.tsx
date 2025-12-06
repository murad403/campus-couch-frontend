"use client"
import ProductDetailsCard from '@/components/card/ProductDetailsCard';
import { products } from '@/libs/products';
import { useParams } from 'next/navigation'
import React from 'react'
import ProductDetailsTabs from '../../../../components/shared/ProductDetailsTabs';
import RelatedProducts from './RelatedProducts';

const ProductDetails = () => {
    const { productId } = useParams();
    const product = products.find(product => product?.id === Number(productId));
    // console.log(product);
    return (
        <div className='px-5 md:px-0 mb-10'>
            <h1 className='font-semibold text-4xl text-black text-center md:mb-12 mb-7'>Product Details</h1>
            <ProductDetailsCard product={product!}></ProductDetailsCard>
            <ProductDetailsTabs product={product!}></ProductDetailsTabs>
            <RelatedProducts></RelatedProducts>
        </div>
    )
}

export default ProductDetails
