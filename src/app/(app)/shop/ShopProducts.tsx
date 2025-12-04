"use client";
import ProductCard from '@/components/card/ProductCard'
import { products, TProduct } from '@/libs/products'
import React, { useState } from 'react'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

const ShopProducts = ({ activeLayout }: { activeLayout: string }) => {
    const totalProducts = products.length;
    const productPerPage = 6;
    const totalPages = Math.ceil(totalProducts/productPerPage);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const skip = (currentPage -1) * productPerPage;

    const handleNext = () =>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1);
        }
    }
    const handlePrevious = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }
    return (
        <div>
            <div className={`${activeLayout === "grid" ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5" : ""}`}>
                {
                    products.slice(skip, skip + productPerPage).map((product: TProduct, index: number) => <ProductCard key={index} product={product} activeLayout={activeLayout}></ProductCard>)
                }
            </div>

            {/* pagination */}
            <div className='flex justify-center gap-3 mt-10 mb-10 md:mb-0'>
                <button onClick={handlePrevious} className='cursor-pointer px-4 py-2 rounded-lg bg-gray-100'>
                    <MdKeyboardDoubleArrowLeft />
                </button>
                {
                    Array(totalPages).fill(null).map((page, index) =>
                        <button onClick={() => setCurrentPage(index + 1)} className={`cursor-pointer px-4 py-2 rounded-lg ${currentPage === index + 1 ? "bg-button-background" : "bg-gray-100"}`} key={index}>
                            {index + 1}
                        </button>
                    )
                }
                <button onClick={handleNext} className='cursor-pointer px-4 py-2 rounded-lg bg-gray-100'>
                    <MdKeyboardDoubleArrowRight />
                </button>
            </div>
        </div>
    )
}

export default ShopProducts
