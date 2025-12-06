import { aboutFeatures, TAboutFeature } from '@/libs/feature'
import React from 'react'

const AboutFeature = () => {
  return (
    <div className='mx-auto container my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 md:mb-20'>
      {
        aboutFeatures.map((feature: TAboutFeature, index: number) =>
            <div className='shadow-xl p-5 rounded-2xl' key={feature.id}>
                <div className='font-medium flex items-center gap-2'>
                    <p className='text-yellow-400'>{index + 1}</p>
                    <p className='text-title'>{feature.title}</p>
                </div>
                <p className='text-heading text-sm'>{feature.description}</p>
            </div>
        )
      }
    </div>
  )
}

export default AboutFeature
