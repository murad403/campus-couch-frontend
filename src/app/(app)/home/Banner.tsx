import React from 'react'
import banner from "@/assets/banner/banner.png";
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='bg-[#254EA4] grid md:grid-cols-2 grid-cols-1 gap-10 md:pt-10 md:pl-10'>
            <div className='flex flex-col justify-center md:gap-10 gap-5 p-5 md:p-0'>
                <h1 className='font-bold md:text-6xl text-4xl text-white'>Affordable & Sustainable Furniture  for Students</h1>
                <p className='text-[18px] text-[#E6E6E6]'>Couch makes it easy for students to buy and rent affordable, high-quality second-hand furniture. Our mission is to create a sustainable, budget-friendly solution for furnishing student spaces effortlessly.</p>
                <div className='space-x-6'>
                    <button className='bg-background rounded-sm font-semibold py-3 px-5'>Shop Now</button>
                    <button className='rounded-sm font-semibold py-3 px-5 border border-white text-white'>Sell Your Furniture</button>
                </div>
                <div className='flex items-center gap-12 '>
                    <div>
                        <h2 className='font-semibold text-3xl text-white'>25k+</h2>
                        <p className='text-[18px] text-[#E6E6E6]'>Unique Styles</p>
                    </div>
                    <div>
                        <h2 className='font-semibold text-3xl text-white'>100</h2>
                        <p className='text-[18px] text-[#E6E6E6]'>Happy Customer</p>
                    </div>
                    <div>
                        <h2 className='font-semibold text-3xl text-white'>200</h2>
                        <p className='text-[18px] text-[#E6E6E6]'>Certified Outlets</p>
                    </div>
                </div>
            </div>
            <div className='pl-5 md:pl-0'>
                <Image src={banner} alt='banner image' width={731} height={593} />
            </div>
        </div>
    )
}

export default Banner
