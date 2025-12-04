import ProductCard from '@/components/card/ProductCard'
import { products, TProduct } from '@/libs/products'
import React from 'react'

const ShopProducts = ({ activeLayout }: { activeLayout: string }) => {
    // console.log(activeLayout)
    return (
        <div className={`${activeLayout === "grid" ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5" : ""}`}>
            {
                products.map((product: TProduct, index: number) => <ProductCard key={index} product={product} activeLayout={activeLayout}></ProductCard>)
            }
        </div>
    )
}

export default ShopProducts
