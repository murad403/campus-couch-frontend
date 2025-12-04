import { TProduct } from '@/libs/products';
import { reviews, TReview } from '@/libs/reviews';
import Image from 'next/image';
import React, { useState } from 'react'
import { MdStar } from 'react-icons/md';

const tabs: string[] = ["description", "additional", "reviews"];

const ProductDetailsTabs = ({product}: {product: TProduct}) => {
    const [activeTab, setActiveTab] = useState<string>("description");
    // console.log(activeTab);
    return (
        <div className='px-5 md:px-0 mt-10'>
            <div className='flex justify-center items-center gap-5 mb-5'>
                {
                    tabs.map(tab =>
                        <button onClick={() => setActiveTab(tab)} key={tab} className={`uppercase cursor-pointer text-2xl ${activeTab === tab ? "text-title border-b-2 border-button-background" : "text-description"}`}>{tab}</button>
                    )
                }
            </div>

            <div className='bg-common-background py-10'>
                <div className='container mx-auto'>
                    {
                        activeTab === "description" && <p className='text-[18px] text-heading'>{product.description}</p>
                    }
                    {
                        activeTab === "additional" && 
                        <div className='flex justify-center gap-7'>
                            <div className='text-[18px]'>
                                <h3 className='font-medium text-black'>Dimensions</h3>
                                <h3 className='font-medium text-black'>Color</h3>
                            </div>
                            <div className='text-[18px]'>
                                <p className='text-heading'>120cm (L) x 80cm (W) x 75cm (H)</p>
                                <p className='text-heading'>Black, Grey, Pink, White</p>
                            </div>
                        </div>
                    }
                    {
                        activeTab === "reviews" && 
                        <div className='flex flex-col md:flex-row gap-10'>
                            <div className='w-full md:w-1/2 space-y-5'>
                                {
                                    reviews.map((review: TReview) => 
                                    <div className='p-5 bg-white rounded-lg' key={review.id}>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center gap-2'>
                                                <Image src={review.image} alt={review.name} width={40} height={40} className='rounded-full border'/>
                                                <h3 className='text-black text-[20px]'>{review.name}</h3>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                 <MdStar color='orange' size={24} />
                                                 <span className='text-black text-xl'>{review.rating}</span>
                                            </div>
                                        </div>
                                        <p className=''>{review.message}</p>
                                    </div>
                                    )
                                }
                            </div>
                            <div className='w-full md:w-1/2'>

                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsTabs
