"use client";
import Bundlecard from '@/components/card/Bundlecard'
import ProductDetailsTabs from '@/components/shared/ProductDetailsTabs';
import RelatedProducts from '@/components/shared/RelatedProducts';
import { bundles } from '@/libs/bundles';
import { useParams } from 'next/navigation';
import React from 'react'

const Bundle = () => {
    const { bundleId } = useParams();
    const bundle = bundles.find(bundle => bundle.id === Number(bundleId));
    return (
        <div className='px-5 md:px-0 mb-10'>
            <h1 className='font-semibold text-4xl text-black text-center md:mb-12 mb-7'>Bundle Offers Details</h1>
            <Bundlecard bundle={bundle!}></Bundlecard>
            <ProductDetailsTabs product={bundle}></ProductDetailsTabs>
            <RelatedProducts></RelatedProducts>
        </div>
    )
}

export default Bundle
