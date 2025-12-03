"use client"
import React, { useState } from 'react'
import Sort from './Sort'

const Shop = () => {
  const [activeLayout, setActiveLayout] = useState<string>("col");
  console.log("activeLayout", activeLayout);
  const [sortText, setSortText] = useState<string>("col");
  console.log("sort by", sortText)
  return (
    <div className='md:px-10 px-5 md:pb-10 pb-5'>
      <h1 className='font-semibold text-4xl text-black text-center md:mb-12 mb-7'>Chair</h1>
      <Sort activeLayout={activeLayout} setActiveLayout={setActiveLayout} setSortText={setSortText}></Sort>
    </div>
  )
}

export default Shop
