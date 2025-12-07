"use client"
import Image from 'next/image'
import image from "@/assets/products/bed.png"
import { IoAdd } from 'react-icons/io5'
import { GrFormSubtract } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import RemoveCartItemModal from '@/components/modal/RemoveCartItemModal';

const Cart = () => {
    return (
        <div className="container mx-auto md:mb-20 mb-10 px-5 md:px-0">
            <h1 className="font-semibold text-3xl md:text-4xl text-black text-center md:mb-12 mb-7">My Cart</h1>

            <div className="space-y-6">
                <div className="hidden md:grid grid-cols-12 gap-4 items-center font-bold text-base md:text-lg border-b border-gray-300 pb-4">
                    <div className="col-span-5">Product</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-center">Total</div>
                    <div className="col-span-3 text-right">Remove</div>
                </div>

                <div className="space-y-4 md:space-y-6">
                    {/* Product 1 */}
                    <div className="pb-4 md:pb-6 last:border-b-0">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 items-center">
                            {/* Product Info */}
                            <div className="md:col-span-5 flex gap-3 md:gap-4">
                                <div className="bg-gray-200 rounded-lg p-2 md:p-3 shrink-0">
                                    <Image
                                        src={image}
                                        alt="Willey chair"
                                        width={80}
                                        height={80}
                                        className="md:w-[100px] md:h-[100px] w-20 h-20"
                                    />
                                </div>
                                <div className="font-medium text-sm md:text-base space-y-1">
                                    <h3 className="font-semibold">Willey chair</h3>
                                    <h3 className="text-gray-600">Material: Wooden</h3>
                                    <h3 className="text-gray-600">Color: Orange</h3>
                                </div>
                            </div>

                            {/* Quantity Controls */}
                            <div className="md:col-span-2 flex justify-between md:justify-center items-center">
                                <span className="md:hidden text-sm text-gray-600">Qty:</span>
                                <div className="border border-gray-400 rounded-lg flex items-center gap-2 px-2 py-1 md:py-2">
                                    <button className="cursor-pointer hover:text-blue-500 transition">
                                        <IoAdd size={16} className="md:w-5 md:h-5" />
                                    </button>
                                    <span className="font-semibold text-sm md:text-base">2</span>
                                    <button className="cursor-pointer hover:text-blue-500 transition">
                                        <GrFormSubtract size={16} className="md:w-5 md:h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="md:col-span-2 flex justify-between md:justify-center items-center">
                                <span className="md:hidden text-sm text-gray-600">Total:</span>
                                <div className="text-base md:text-lg font-semibold">$120.00</div>
                            </div>

                            {/* Delete Button */}
                            <div className="md:col-span-3 flex justify-between md:justify-end items-center gap-4">
                                <span className="md:hidden text-sm text-gray-600">Action:</span>
                                <button onClick={()=>(document.getElementById('my_modal_1') as HTMLDialogElement).showModal()} className="cursor-pointer hover:text-red-500 transition text-gray-700">
                                    <RiDeleteBin6Line size={24} />
                                </button>
                                <RemoveCartItemModal></RemoveCartItemModal>
                            </div>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="pb-4 md:pb-6 last:border-b-0">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 items-center">
                            {/* Product Info */}
                            <div className="md:col-span-5 flex gap-3 md:gap-4">
                                <div className="bg-gray-200 rounded-lg p-2 md:p-3 shrink-0">
                                    <Image
                                        src={image}
                                        alt="Willey chair"
                                        width={80}
                                        height={80}
                                        className="md:w-[100px] md:h-[100px] w-20 h-20"
                                    />
                                </div>
                                <div className="font-medium text-sm md:text-base space-y-1">
                                    <h3 className="font-semibold">Willey chair</h3>
                                    <h3 className="text-gray-600">Material: Wooden</h3>
                                    <h3 className="text-gray-600">Color: Orange</h3>
                                </div>
                            </div>

                            {/* Quantity Controls */}
                            <div className="md:col-span-2 flex justify-between md:justify-center items-center">
                                <span className="md:hidden text-sm text-gray-600">Qty:</span>
                                <div className="border border-gray-400 rounded-lg flex items-center gap-2 px-2 py-1 md:py-2">
                                    <button className="cursor-pointer hover:text-blue-500 transition">
                                        <IoAdd size={16} className="md:w-5 md:h-5" />
                                    </button>
                                    <span className="font-semibold text-sm md:text-base">2</span>
                                    <button className="cursor-pointer hover:text-blue-500 transition">
                                        <GrFormSubtract size={16} className="md:w-5 md:h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="md:col-span-2 flex justify-between md:justify-center items-center">
                                <span className="md:hidden text-sm text-gray-600">Total:</span>
                                <div className="text-base md:text-lg font-semibold">$120.00</div>
                            </div>

                            {/* Delete Button */}
                            <div className="md:col-span-3 flex justify-between md:justify-end items-center gap-4">
                                <span className="md:hidden text-sm text-gray-600">Action:</span>
                                <button onClick={()=>(document.getElementById('my_modal_1') as HTMLDialogElement).showModal()} className="cursor-pointer hover:text-red-500 transition text-gray-700">
                                    <RiDeleteBin6Line size={24} />
                                </button>
                                <RemoveCartItemModal></RemoveCartItemModal>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-4 mt-8 pt-6">
                    <div className="space-y-2 w-full md:w-auto text-right">
                        <h2 className="text-xl md:text-2xl font-bold">
                            Subtotal: $240.00
                        </h2>
                        <p className="text-sm text-gray-600">Taxes and shipping calculated at checkout</p>
                    </div>
                    <button className="w-full cursor-pointer md:w-64 bg-button-background text-black font-bold py-3 px-6 rounded transition">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
