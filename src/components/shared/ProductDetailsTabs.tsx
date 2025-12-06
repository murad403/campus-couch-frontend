/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; 
import { reviews, TReview } from '@/libs/reviews';
import { Rating } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import { MdStar } from 'react-icons/md';

const tabs: string[] = ["description", "additional", "reviews"];

const ProductDetailsTabs = ({ product }: { product: any }) => {
    const [activeTab, setActiveTab] = useState<string>("description");
    const [value, setValue] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const message = form.get("message");
        const newReview = {
            value, message
        }
        console.log(newReview)
    }

    // console.log(value);
    return (
        <div className=' mt-10'>
            <div className='flex justify-center items-center md:gap-5 gap-3 mb-5'>
                {
                    tabs.map(tab =>
                        <button onClick={() => setActiveTab(tab)} key={tab} className={`uppercase cursor-pointer text-xl md:text-2xl ${activeTab === tab ? "text-title border-b-2 border-button-background" : "text-description"}`}>{tab}</button>
                    )
                }
            </div>

            <div className='bg-common-background md:py-10 py-5 px-5 md:px-0'>
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
                                        <div className='p-5 bg-white rounded-lg space-y-3' key={review.id}>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex items-center gap-2'>
                                                    <Image src={review.image} alt={review.name} width={40} height={40} className='rounded-full border' />
                                                    <h3 className='text-black text-[20px] font-medium'>{review.name}</h3>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <MdStar color='orange' size={24} />
                                                    <span className='text-black text-lg'>{review.rating}</span>
                                                </div>
                                            </div>
                                            <p className=''>{review.message}</p>
                                            <p className='text-[#B0B0B0] text-sm'>{review.date}</p>
                                        </div>
                                    )
                                }
                            </div>

                            <div className='w-full md:w-1/2 space-y-3'>
                                <h1 className='text-2xl font-bold text-title'>Add a review</h1>
                                <p className='text-[16px] text-heading'>Your email address will not be published. Required fields are marked</p>
                                <form onSubmit={handleSubmit} className='space-y-3'>
                                    <div className='flex items-center gap-3'>
                                        <h2 className='text-xl font-medium text-title'>Your rating</h2>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue!);
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label className='text-[18px] text-title mb-3'>Your review</label>
                                        <textarea name="message" id="message" className='w-full min-h-[200px] outline-none border border-heading p-5 rounded-lg' placeholder='Message'></textarea>
                                    </div>
                                    <button type='submit' className='bg-button-background rounded-sm font-semibold py-3 px-5 cursor-pointer'>Submit</button>
                                </form>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsTabs
