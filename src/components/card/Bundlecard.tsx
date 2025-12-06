'use client';
import { TBundle } from '@/libs/bundles';
import { Circle } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowRight, MdStar } from 'react-icons/md';

const Bundlecard = ({ bundle }: { bundle: TBundle }) => {
    const [purchaseType, setPurchaseType] = useState<"rent" | "buy">("rent");
    const [quantity, setQuantity] = useState<string>("1")
    const [rentalLength, setRentalLength] = useState<string>("1 month")
    const quantityOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const rentalOptions = ["1 month", "2 month", "3 month", "4 month", "6 month", "12 month"]


    return (
        <div className='bg-common-background px-5 md:px-0'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row md:gap-10'>
                    <div className='w-full md:w-1/2 space-y-5 my-10'>
                        <div className='flex justify-center items-center rounded-sm'>
                            <Image src={bundle.image} alt={bundle.title} width={628} height={543} />
                        </div>
                        <div className='flex justify-center gap-5'>
                            {
                                [0, 1, 2, 3].map(item =>
                                    <div className='bg-[#F5F5F5] rounded-sm' key={item}>
                                        <Image src={bundle.image} alt={bundle.title} width={106} height={106} />
                                    </div>
                                )
                            }
                        </div>
                    </div>


                    <div className='w-full md:w-1/2 space-y-5 my-10'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-3xl font-medium text-black capitalize'>{bundle.title}</h2>
                            <p className='flex items-center gap-2'>
                                <MdStar color='orange' size={24} />
                                <span>{bundle.rating}</span>
                            </p>
                        </div>
                        <p className='text-title text-lg'>Transform your living space with a stylish and comfortable set that includes:</p>
                        <div className='space-y-1'>
                            {
                                bundle.feature.map((feature: string, index: number) =>
                                    <div className='flex items-center gap-5' key={index}>
                                        <MdOutlineKeyboardDoubleArrowRight color='#4FBE9F' size={24} />
                                        <p className='text-[18px] text-title'>{feature}</p>
                                    </div>
                                )
                            }
                        </div>

                        {/* rent and buy option type */}
                        <div className="flex gap-4 mb-6">
                            <button
                                onClick={() => setPurchaseType("rent")}
                                className={`flex w-full items-center gap-3 p-2 rounded-lg border-2 transition-all ${purchaseType === "rent"
                                    ? "border border-button-background bg-white"
                                    : "bg-white"
                                    }`}
                            >
                                <Circle
                                    size={28}
                                    className={`transition-all ${purchaseType === "rent" ? "text-button-background" : "text-gray-400"
                                        }`}
                                />
                                <div className="flex items-center gap-2">
                                    <p className="text-lg font-semibold text-gray-900">Rent</p>
                                    <p className="text-lg text-title">$<span className='font-medium'>{bundle.rent}</span>/mo</p>
                                </div>
                            </button>
                            <button
                                onClick={() => setPurchaseType("buy")}
                                className={`flex w-full items-center gap-3 p-2 rounded-lg border-2 transition-all ${purchaseType === "buy" ? "border border-button-background bg-white" : "bg-white"
                                    }`}
                            >
                                <Circle
                                    size={28}
                                    className={`transition-all ${purchaseType === "buy" ? "text-button-background" : "text-gray-400"}`}
                                />
                                <p className="text-lg text-title font-medium">${bundle.price} to buy</p>
                            </button>
                        </div>


                        {/* Conditional Content */}
                        <div className=' '>
                            {purchaseType === "rent" && (
                                <div className="mb-6 bg-white p-5 rounded-lg">
                                    <div className="text-title text-lg font-semibold mb-4">Rent for $<span>{bundle.rent}</span>/mo</div>

                                    {/* Selection Fields */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Quantity Select */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-900 mb-2">Quantity</label>
                                            <select
                                                value={quantity}
                                                onChange={(e) => setQuantity(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-900 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                            >
                                                {quantityOptions.map((opt) => (
                                                    <option key={opt} value={opt}>
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Rental Length Select */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-900 mb-2">Rental Length</label>
                                            <select
                                                value={rentalLength}
                                                onChange={(e) => setRentalLength(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-900 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                            >
                                                {rentalOptions.map((opt) => (
                                                    <option key={opt} value={opt}>
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-4 pt-6">
                            {
                                purchaseType === "rent"
                                    ?
                                    <div className='space-x-5'>
                                        <button className="flex-1 bg-button-background text-title font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer">
                                            Checkout
                                        </button>
                                        <button className="flex-1 border border-heading text-heading font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer">
                                            Add new bundle
                                        </button>
                                    </div>
                                    :
                                    <button className="flex-1 bg-button-background text-title font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer">
                                        Buy Now
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bundlecard
