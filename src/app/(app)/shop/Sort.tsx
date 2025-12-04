"use client";
import { ChevronDown } from 'lucide-react';
import React from 'react';
import { IconType } from 'react-icons';
import { CiGrid2H, CiGrid41 } from 'react-icons/ci';

type TLayout = {
    layout: "col" | "grid";
    icon: IconType;
}
const layouts: TLayout[] = [
    { layout: "grid", icon: CiGrid41 },
    { layout: "col", icon: CiGrid2H },
]

const Sort = ({ setActiveLayout, activeLayout, setSortText }: { setActiveLayout: React.Dispatch<"col" | "grid">, activeLayout: string, setSortText: React.Dispatch<string> }) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='space-x-2'>
                {
                    layouts.map((layout: TLayout, index: number) =>
                        <button onClick={() => setActiveLayout(layout.layout)} key={index} className={`text-3xl cursor-pointer ${activeLayout === layout.layout ? "text-[#FF6038]" : "text-title"}`}>
                            {layout.icon && <layout.icon />}
                        </button>
                    )
                }
            </div>

            <div className='relative'>
                <select onChange={(e) => setSortText(e.target.value)} defaultValue={"latest"} className='rounded-sm appearance-none bg-[#F5F5F5] py-3 px-5 outline-none border-none text-black text-sm' name="filter" id="filter">
                    <option value="latest">Sort by latest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-0 pointer-events-none">
                    <ChevronDown size={20} className="text-gray-500" />
                </div>
            </div>
        </div>
    )
}

export default Sort
