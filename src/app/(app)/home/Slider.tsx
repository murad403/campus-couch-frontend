"use client"
import { categories, TCategories } from '@/libs/slider'
import { Armchair, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdArrowRightAlt } from 'react-icons/md'

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const handlePrevious = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1))
    }

    const handleNext = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1))
    }

    const getVisibleProducts = (): TCategories[] => {
        const visibleCount = 3
        const items: TCategories[] = []
        for (let i = 0; i < visibleCount; i++) {
            const index = (currentIndex + i) % categories.length;
            items.push(categories[index])
        }
        return items;
    }
    return (
        <div className='bg-common-background md:p-10 p-5 flex items-center flex-col md:flex-row gap-5'>
            <div className='w-full md:w-[25%] space-y-5 md:space-y-7'>
                <h2 className='text-4xl font-medium text-black'>Shop by categories</h2>
                <div className='flex items-center gap-3'>
                    <Armchair className='text-heading' size={80} />
                    <p className='text-xl text-heading'>+200 Unique <br /> Products</p>
                </div>
                <Link href={"/all-category"} className='flex gap-2 items-center text-heading'>
                    <span className='underline underline-offset-2'>All categories</span>
                    <MdArrowRightAlt />
                </Link>
            </div>

            {/* slider */}
            <div className='w-full md:w-[75%]'>
                <div className="w-full">
                    {/* Slider Container */}
                    <div className="relative flex items-center justify-center">
                        {/* Previous Button */}
                        <button
                            onClick={handlePrevious}
                            className="absolute md:left-14 left-12 z-10 -translate-x-16 md:-translate-x-20 bg-slate-800 hover:bg-slate-700 text-white rounded-full p-3 transition-all duration-300 flex items-center justify-center"
                            aria-label="Previous product"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Product Cards */}
                        <div className="w-full flex justify-center gap-4 md:gap-6">
                            {/* Mobile - Show 1 card */}
                            <div className="block sm:hidden w-full">
                                <div className="bg-white rounded-sm p-6 sm:p-8 flex flex-col items-center gap-4">
                                    <div className="w-full aspect-square rounded-xl overflow-hidden flex items-center justify-center">
                                        <Image
                                            src={categories[currentIndex].image}
                                            alt={categories[currentIndex].title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{categories[currentIndex].title}</h3>
                                </div>
                            </div>

                            {/* Tablet - Show 2 cards */}
                            <div className="hidden sm:flex lg:hidden gap-6 w-full justify-center">
                                {getVisibleProducts()
                                    .slice(0, 2)
                                    .map((product, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-sm p-6 flex-1 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow"
                                        >
                                            <div className="w-full aspect-square rounded-xl overflow-hidden flex items-center justify-center">
                                                <Image
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 capitalize">{product.title}</h3>
                                        </div>
                                    ))}
                            </div>

                            {/* Desktop - Show 3 cards with middle image scaled 1.5x */}
                            <div className="hidden lg:flex gap-6 w-full justify-center items-center">
                                {getVisibleProducts().map((product, index) => (
                                    <div
                                        key={index}
                                        className={`bg-white rounded-sm flex-1 flex flex-col items-center gap-4 hover:shadow-lg transition-all ${index === 1 ? "scale-[102%] p-12" : "p-8"
                                            }`}
                                    >
                                        <div
                                            className={`${index === 1 ? "w-full" : "w-full"} aspect-squar rounded-xl overflow-hidden flex items-center justify-center`}
                                        >
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className={`font-bold text-slate-900 ${index === 1 ? "text-2xl" : "text-xl"} capitalize`}>{product.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="absolute md:right-14 right-12 z-10 translate-x-16 md:translate-x-20 bg-slate-800 hover:bg-slate-700 text-white rounded-full p-3 transition-all duration-300 flex items-center justify-center"
                            aria-label="Next product"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Indicators */}
                    {/* <div className="flex justify-center gap-2 mt-8">
                        {categories.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-slate-800 w-8" : "bg-slate-400 w-2 hover:bg-slate-600"
                                    }`}
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Slider
