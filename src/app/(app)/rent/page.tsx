"use client"
import React, { useState } from 'react'
import Sort from '../shop/Sort'
import Filter from '../shop/Filter'
import ShopProducts from '../shop/ShopProducts'

const RentPage = () => {
  const [activeLayout, setActiveLayout] = useState<string>("grid");
  const [sortText, setSortText] = useState<string>("col");
  console.log("sort by", sortText);
  return (
    <div className='container mx-auto px-5 md:px-0'>
      <h1 className='font-semibold text-4xl text-black text-center md:mb-12 mb-7'>Rent</h1>
      <Sort activeLayout={activeLayout} setActiveLayout={setActiveLayout} setSortText={setSortText}></Sort>
      <div className='flex gap-5 flex-col md:flex-row mt-7 md:mb-12'>
        <div className='w-full md:w-1/4'>
          <Filter></Filter>
        </div>
        <div className='w-full md:w-3/4'>
          <ShopProducts activeLayout={activeLayout}></ShopProducts>
        </div>
      </div>
    </div>
  )
}

export default RentPage
