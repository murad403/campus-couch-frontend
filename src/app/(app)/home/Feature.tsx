import { feautures } from '@/libs/feature'
import Image from 'next/image'
import React from 'react'

const Feature = () => {
  return (
    <div className='bg-common-background'>
      <div className='md:py-10 py-5 container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6'>
        {
          feautures.map((feature, index) =>
            <div className='p-10 bg-white flex flex-col justify-center items-center gap-4' key={index}>
              <Image src={feature.image} alt={feature.title} width={80} height={80} />
              <h2 className='font-medium text-[18px] text-black'>{feature.title}</h2>
              <p className='text-sm text-heading text-center'>{feature.description}</p>
            </div>

          )
        }
      </div>
    </div>
  )
}

export default Feature
